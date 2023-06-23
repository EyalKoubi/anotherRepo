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
exports.user_router = void 0;
const express_1 = require("express");
const contUser = __importStar(require("../controllers/usersController"));
// Create a new Express router
exports.user_router = (0, express_1.Router)();
/**
 * Endpoint: POST /user/create
 * Description: Creates a new user.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<void>} - This function does not have a return value.
 */
exports.user_router.post("/create", async (req, res) => {
    await contUser.create(req, res);
});
/**
 * Endpoint: POST /user/isAdmin
 * Description: Checks if the user making the request is an admin.
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {Promise<void>} - This function does not have a return value.
 */
exports.user_router.post("/isAdmin", async (req, res) => {
    await contUser.isAdmin(req, res);
});
