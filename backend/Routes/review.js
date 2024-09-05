import express from 'express';
import { getAllReview, createReview } from '../Controller/reviewController.js';
import { authenticate, registration } from '../auth/AuthTokern.js';

const router = express.Router({ mergeParams: true });

// /doctor/:doctorId/reviews
router.route("/")
    .get(getAllReview)
    .post(authenticate, registration(["patient"]), createReview);

export default router;
