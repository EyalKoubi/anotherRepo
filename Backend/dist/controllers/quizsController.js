"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteq = exports.update = exports.getSQ = exports.getQ = exports.isFound = exports.create = void 0;
const checks = __importStar(require("../types_checks"));
const Models_1 = require("../Models");
/**
 * Creates a new quiz.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
async function create(req, res) {
    const body = req.body;
    // Validate input against the quizsSchema
    if (!checks.quizsSchema.validate(body))
        return res.status(400).json({ message: "Invalid input" });
    // Insert the quiz into the Quizs collection
    await Models_1.Quizs.insertMany([body]);
    return res.send("The quiz: " + body + " added successfully!");
}
exports.create = create;
/**
 * Checks if a quiz with a specific question exists.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
async function isFound(req, res) {
    const question = req.query.question;
    // Check if the question parameter is provided
    if (!question)
        return res.status(400).json({ message: "Invalid input" });
    // Find a quiz with the specified question
    const exists = await Models_1.Quizs.findOne({ question: question });
    if (exists)
        return res.send("true");
    return res.send("false");
}
exports.isFound = isFound;
/**
 * Retrieves all quizzes.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
async function getQ(res) {
    const objects = await Models_1.Quizs.find({});
    return res.send(objects);
}
exports.getQ = getQ;
/**
 * Retrieves details of a quiz with a specific question.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
async function getSQ(req, res) {
    if (!req.query.question)
        return res.status(400).json({ message: "Invalid input" });
    // Find a quiz with the specified question
    const details = await Models_1.Quizs.findOne({ question: req.query.question });
    return res.send(details);
}
exports.getSQ = getSQ;
/**
 * Updates a quiz with a specific ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
async function update(req, res) {
    if (!req.params.id && !req.body)
        return res.status(400).json({ message: "Invalid input" });
    const ID = req.params.id;
    const body = req.body;
    // Find a quiz with the specified ID and update its contents
    const newQuiz = await Models_1.Quizs.findByIdAndUpdate(ID, body, {
        new: true,
    });
    if (newQuiz)
        return res.send(newQuiz);
    return res.send({ message: "error" });
}
exports.update = update;
/**
 * Deletes a quiz with a specific ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */
async function deleteq(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Invalid input" });
    // Find a quiz with the specified ID and delete it
    await Models_1.Quizs.findByIdAndDelete(req.params.id);
    return res.send("Item removed successfully");
}
exports.deleteq = deleteq;
