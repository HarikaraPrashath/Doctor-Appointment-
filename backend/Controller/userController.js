import User from '../models/UserSchema.js';
import BookingSchema from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js'
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({ success: true, message: "Successfully updated", data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};

export const singleUser = async (req, res) => {
    const id = req.params.id;
 
    try {
        const singleUser = await User.findById(id).select("-password") //no password showing
        res.status(200).json({ success: true, message: "Successfully found", data: singleUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to find user" });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const allUsers = await User.find({}).select("-password") //no password showing
        res.status(200).json({ success: true, message: "Users found", data: allUsers });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to find users" });
    }
};

 export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(400).json({success:false,message:'User not found'})
        }

        const {password,...rest} = user._doc

        res.status(200).json({success:true,message:'Profile info is getting',data:{...rest}})
    }
    catch(err){
        res.status(500).json({success:false,message:'Something get wrong cant get'})
    }
 }

 export const getMyAppoinment = async(req,res)=>{
   try{
     //setp - 1 retrieve appoinment from booking for specific user
     const booking = await  BookingSchema.find({user:req.userId})

     //step-2 extract doctor ids form appoinment bookings
     const doctorIds = booking.map(e1=>e1.doctor.id)
 
     //step-3 retrive doctors using doctors ids
     const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password')
 
     res.status(200).json({success:true,message:'Appoinment are getting',data:doctors})
   }
   catch(err){
    res.status(500).json({success:false,message:'Appoinment are  cannt get'})
 
   }

}

