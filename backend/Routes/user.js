import express from 'express';
import { updateUser, getAllUser, singleUser, deleteUser,getMyAppoinment,getUserProfile } from '../Controller/userController.js';
import { authenticate,registration } from '../auth/AuthTokern.js';

const router = express.Router();

router.get("/:id", authenticate,registration(['patient']),singleUser); // Corrected function call
router.get("/",authenticate,registration(['admin']), getAllUser);
router.put("/:id", authenticate,registration(['patient']), updateUser); // Added authentication for protected routes
router.delete("/:id", authenticate, registration(['patient']),deleteUser); // Added authentication for protected routes

router.get("/profile/me", authenticate, registration(['patient']),getUserProfile); // Added authentication for protected routes
router.get("/appointments/my-appointments", authenticate, registration(['patient']),getMyAppoinment); // Added authentication for protected routes

export default router;
