import express from "express";
import { subscribeUser } from "../Controllers/emailController.js";

const router = express.Router();

router.post("/subscribe", subscribeUser);

export default router;
