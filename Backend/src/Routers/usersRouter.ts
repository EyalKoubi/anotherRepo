import { Router } from "express";
import * as contUser from "../controllers/usersController";

// Create a new Express router
export const user_router = Router();

/**
 * Endpoint: POST /user/create
 * Description: Creates a new user.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<void>} - This function does not have a return value.
 */
user_router.post("/create", async (req, res) => {
  await contUser.create(req, res);
});

/**
 * Endpoint: POST /user/isAdmin
 * Description: Checks if the user making the request is an admin.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<void>} - This function does not have a return value.
 */
user_router.post("/isAdmin", async (req, res) => {
  await contUser.isAdmin(req, res);
});
