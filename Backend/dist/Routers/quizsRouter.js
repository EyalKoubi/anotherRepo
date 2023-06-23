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
exports.quiz_router = void 0;
const express_1 = require("express");
const contQuiz = __importStar(require("../controllers/quizsController"));
// Create a new Express router
exports.quiz_router = (0, express_1.Router)();
/**
 * Endpoint: POST /quiz/create
 * Description: Creates a new quiz.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the create function in the quizsController module.
 */
exports.quiz_router.post("/create", async (req, res) => {
    return await contQuiz.create(req, res);
});
/**
 * Endpoint: GET /quiz/isFound
 * Description: Checks if a quiz is found.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the isFound function in the quizsController module.
 */
exports.quiz_router.get("/isFound", async (req, res) => {
    return await contQuiz.isFound(req, res);
});
/**
 * Endpoint: GET /quiz/getSingleQuestion
 * Description: Gets a single question from a quiz.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the getSQ function in the quizsController module.
 */
exports.quiz_router.get("/getSingleQuestion", async (req, res) => {
    return await contQuiz.getSQ(req, res);
});
/**
 * Endpoint: GET /quiz/getQuestions
 * Description: Gets all questions from a quiz.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the getQ function in the quizsController module.
 */
exports.quiz_router.get("/getQuestions", async (req, res) => {
    return await contQuiz.getQ(res);
});
/**
 * Endpoint: PATCH /quiz/update/:id
 * Description: Updates a quiz by ID.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the update function in the quizsController module.
 */
exports.quiz_router.patch("/update/:id", async (req, res) => {
    return await contQuiz.update(req, res);
});
/**
 * Endpoint: DELETE /quiz/delete/:id
 * Description: Deletes a quiz by ID.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<any>} - The result of the deleteq function in the quizsController module.
 */
exports.quiz_router.delete("/delete/:id", async (req, res) => {
    return await contQuiz.deleteq(req, res);
});
