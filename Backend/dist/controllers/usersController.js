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
exports.create = exports.isAdmin = void 0;
const checks = __importStar(require("../types_checks"));
const Models_1 = require("../Models");
/**
 * Checks if the user making the request is an admin.
 *
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {void} - This function does not have a return value. It sends a response to the client.
 */
async function isAdmin(req, res) {
    const body = req.body;
    // Validate the user input using the userInputsSchema defined in the types_checks module
    if (!checks.userInputsSchema.validate(body))
        return res.status(400).json({ message: "Inappropriate input" });
    // Search for a user in the database with the provided user_name and password
    const user = await Models_1.Users.findOne({
        user_name: body.user_name,
        password: body.password,
    });
    // If no user is found, send a response with the string "0"
    if (!user)
        return res.send("0");
    // If the found user is an admin, send a response with the string "1"
    if (user.isAdmin)
        return res.send("1");
    // If the found user is not an admin, send a response with the string "2"
    return res.send("2");
}
exports.isAdmin = isAdmin;
/**
 * Creates a new admin user.
 *
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {void} - This function does not have a return value. It sends a response to the client.
 */
async function create(req, res) {
    const body = req.body;
    // Insert the provided user object (body) into the Users collection
    await Models_1.Users.insertMany([body]);
    // Send a response indicating that the admin user was added successfully
    return res.send("The admin: " + body.full_name + " added successfully!");
}
exports.create = create;
