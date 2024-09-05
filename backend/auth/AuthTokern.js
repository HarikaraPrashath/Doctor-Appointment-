import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => { // Corrected argument order
    // Get token from header
    const authToken = req.headers.authorization;

    // Check if token exists and starts with 'Bearer '
    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        // Extract the token by removing 'Bearer '
        const token = authToken.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user information to the request object
        req.user = decoded.user;
        req.role = decoded.role;

        next(); //must be  needed function
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:'Token is expired'})
        }
        return res.status(401).json({ success: false, message: "Token is not valid" });
    }
};


export const registration = roles => async (req, res, next) => {
    const userId = req.user; // use req.user instead of req.userId
    let user;

    // Find out if the user is a patient or a doctor
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    } else {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if the user's role is authorized
    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not authorized" });
    }

    next();
};