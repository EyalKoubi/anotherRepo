import * as checks from "../types_checks";
import { Users } from "../Models";

/**
 * Checks if the user making the request is an admin.
 *
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {void} - This function does not have a return value. It sends a response to the client.
 */
export async function isAdmin(req: any, res: any) {
  const body = req.body;

  // Validate the user input using the userInputsSchema defined in the types_checks module
  if (!checks.userInputsSchema.validate(body))
    return res.status(400).json({ message: "Inappropriate input" });

  // Search for a user in the database with the provided user_name and password
  const user = await Users.findOne({
    user_name: body.user_name,
    password: body.password,
  });

  // If no user is found, send a response with the string "0"
  if (!user) return res.send("0");

  // If the found user is an admin, send a response with the string "1"
  if (user.isAdmin) return res.send("1");

  // If the found user is not an admin, send a response with the string "2"
  return res.send("2");
}

/**
 * Creates a new admin user.
 *
 * @param {any} req - The request object.
 * @param {any} res - The response object.
 * @returns {void} - This function does not have a return value. It sends a response to the client.
 */
export async function create(req: any, res: any) {
  const body = req.body;

  // Insert the provided user object (body) into the Users collection
  await Users.insertMany([body]);

  // Send a response indicating that the admin user was added successfully
  return res.send("The admin: " + body.full_name + " added successfully!");
}
