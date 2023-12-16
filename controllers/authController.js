import passport from 'passport';
import 'dotenv/config';

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

