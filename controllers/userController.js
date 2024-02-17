import "dotenv/config";
import { User, validate } from "../models/User.js";
import bcrypt from "bcrypt";

// Email AuthControllers
export const email_login = async (req, res) => {
  try {
    // const { error } = validate(req.body);
    // if (error)
    //   return res.status(400).send({ message: error.details[0].message });
    const { name, email, password } = req.body;
    const user = await User.find({ email: email });
    if (!user)
      return res.status(401).send({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid email or password" });

    const token = user[0].generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });
    res.redirect(process.env.CLIENT_URL);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export const email_register = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    console.log("in register");
    const { name, email, password } = req.body;

    const user = await User.find({ email: email });
    if (user.length > 0) {
      res.redirect(`${CLIENT_URL}/login}`);
      return res
        .status(409)
        .send({ message: "User with given email already exists!" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ ...req.body, password: hashPassword });
    await newUser.save();
    const token = newUser[0].generateAuthToken();
    res
      .status(200)
      .send({
        data: token,
        message: "User created and logged in successfully",
      });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
