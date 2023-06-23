import { Router } from "express";
import * as contQuiz from "../controllers/quizsController";

// Create a new Express router
export const quiz_router = Router();

/**
 * Endpoint: POST /quiz/create
 * Description: Creates a new quiz.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the create function in the quizsController module.
 */
quiz_router.post("/create", async (req, res) => {
  return await contQuiz.create(req, res);
});

/**
 * Endpoint: GET /quiz/isFound
 * Description: Checks if a quiz is found.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the isFound function in the quizsController module.
 */
quiz_router.get("/isFound", async (req, res) => {
  return await contQuiz.isFound(req, res);
});

/**
 * Endpoint: GET /quiz/getSingleQuestion
 * Description: Gets a single question from a quiz.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the getSQ function in the quizsController module.
 */
quiz_router.get("/getSingleQuestion", async (req, res) => {
  return await contQuiz.getSQ(req, res);
});

/**
 * Endpoint: GET /quiz/getQuestions
 * Description: Gets all questions from a quiz.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the getQ function in the quizsController module.
 */
quiz_router.get("/getQuestions", async (req, res) => {
  return await contQuiz.getQ(res);
});

/**
 * Endpoint: PATCH /quiz/update/:id
 * Description: Updates a quiz by ID.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the update function in the quizsController module.
 */
quiz_router.patch("/update/:id", async (req, res) => {
  return await contQuiz.update(req, res);
});

/**
 * Endpoint: DELETE /quiz/delete/:id
 * Description: Deletes a quiz by ID.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the deleteq function in the quizsController module.
 */
quiz_router.delete("/delete/:id", async (req, res) => {
  return await contQuiz.deleteq(req, res);
});
