import BookingSchema from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const updateDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({ success: true, message: "Successfully updated", data: updatedDoctor });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const singleDoctor = async (req, res) => {
    const id = req.params.id;
 
    try {
        const singleDoctor = await Doctor.findById(id).populate("reviews").select("-password"); //no password showing
        res.status(200).json({ success: true, message: "Successfully found", data: singleDoctor });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to find user" });
    }
};

export const getAllDoctor = async (req, res) => {

    //filtering 
    const {query} = req.query;
    let doctors;
 
    if(query){
        doctors = await Doctor.find({
            isApproved:"approved",
            $or:[
                {name:{$regex:query,$option:"i"}},
                {specialization:{$regex:query,$option:"i"}},
            ]
        }).select("-password")
    }

    else{
         doctors = await Doctor.find({}).select("-password")
    }

    try {
        const allDoctor = await Doctor.find({}).select("-password") //no password showing
        res.status(200).json({ success: true, message: "Users found", data: allDoctor});
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to find users" });
    }
};

export const getDoctorProfile = async (req,res)=>{
    const doctorId = req.userId

    try{
        const doctor = await Doctor.findById(doctorId)
        const appoinments = await BookingSchema.find({doctor:doctorId})

        if(!doctor){
            return res.status(400).json({success:false,message:'Doctor not found'})
        }

        const {password,...rest} = doctor._doc
         

        res.status(200).json({success:true,message:'Profile info is getting',data:{...rest,appoinments}})
    }
    catch(err){
        res.status(500).json({success:false,message:'Something get wrong cant get'})
    }
}