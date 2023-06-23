import * as checks from "../types_checks";
import { Quizs } from "../Models";

/**
 * Creates a new quiz.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
export async function create(req: any, res: any) {
  const body = req.body;

  // Validate input against the quizsSchema
  if (!checks.quizsSchema.validate(body))
    return res.status(400).json({ message: "Invalid input" });

  // Insert the quiz into the Quizs collection
  await Quizs.insertMany([body]);
  return res.send("The quiz: " + body + " added successfully!");
}

/**
 * Checks if a quiz with a specific question exists.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
export async function isFound(req: any, res: any) {
  const question = req.query.question;

  // Check if the question parameter is provided
  if (!question) return res.status(400).json({ message: "Invalid input" });

  // Find a quiz with the specified question
  const exists = await Quizs.findOne({ question: question });
  if (exists) return res.send("true");
  return res.send("false");
}

/**
 * Retrieves all quizzes.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
export async function getQ(res: any) {
  const objects = await Quizs.find({});
  return res.send(objects);
}

/**
 * Retrieves details of a quiz with a specific question.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
export async function getSQ(req: any, res: any) {
  if (!req.query.question)
    return res.status(400).json({ message: "Invalid input" });

  // Find a quiz with the specified question
  const details = await Quizs.findOne({ question: req.query.question });
  return res.send(details);
}

/**
 * Updates a quiz with a specific ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
export async function update(req: any, res: any) {
  if (!req.params.id && !req.body)
    return res.status(400).json({ message: "Invalid input" });

  const ID = req.params.id;
  const body = req.body;

  // Find a quiz with the specified ID and update its contents
  const newQuiz = await Quizs.findByIdAndUpdate(ID, body, {
    new: true,
  });

  if (newQuiz) return res.send(newQuiz);
  return res.send({ message: "error" });
}

/**
 * Deletes a quiz with a specific ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
export async function deleteq(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ message: "Invalid input" });

  // Find a quiz with the specified ID and delete it
  await Quizs.findByIdAndDelete(req.params.id);
  return res.send("Item removed successfully");
}
