import passport from 'passport';
import 'dotenv/config';
import Joi from "joi";
import { User, validate } from "../models/User.js";
import bcrypt from "bcrypt";

// Email AuthControllers
export const email_login = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
  const validate = (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required().label("Email"),
      password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
  };
};

export const email_register = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

// GoogleAuth Controllers
 export const google_login_success = (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Logged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
}

export const google_login_failure = (req, res) => {
	res.status(401).json({
		error: true,
		message: "Login failure",
	});
}

export const google_auth_callback = (req,res,next)=>{
    passport.authenticate('google', { failureRedirect: '/auth/google/error' }, async (error, user , info) => {
      if (error){
        return res.send({ message:error.message });
      }
      if (user){
        try {
          // your success code
          return res.send({
            data: user.data,
            message:'Sign in successful' 
          });
        } catch (error) {
          // error msg 
          return res.send({ message: error.message });
        }
      }
    })(req,res,next);
  }

export const logout = (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
}

