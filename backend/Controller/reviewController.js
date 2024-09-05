import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'


//get All review

export const getAllReview = async(req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ success: true, message: "Successful", data: reviews });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createReview = async (req, res) => {
    try {
        // Get the doctor ID from the URL parameters
        const doctorId = req.params.doctorId;

        // Assign doctor and user IDs to the review object
        req.body.doctor = doctorId;
        req.body.user = req.user; // Corrected this to use req.user instead of req.userId

        // Create and save the new review
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();

        // Update the doctor document with the new review ID
        await Doctor.findByIdAndUpdate(doctorId, {
            $push: { reviews: savedReview._id },
        });

        res.status(201).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};