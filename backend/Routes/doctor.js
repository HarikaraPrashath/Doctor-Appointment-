import express from 'express';
import { updateDoctor, deleteDoctor, getAllDoctor, singleDoctor,getDoctorProfile } from '../Controller/doctorController.js';
import { authenticate, registration } from '../auth/AuthTokern.js';
import reviewRouter from './review.js';

const router = express.Router();

// Nested Router
router.use("/:doctorId/review", reviewRouter);

router.get("/:id", singleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, registration(['doctor']), updateDoctor);
router.delete("/:id", authenticate, registration(['doctor']), deleteDoctor);

router.get("/profile/me", authenticate, registration(['doctor']),getDoctorProfile);


export default router;
