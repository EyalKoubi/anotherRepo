// config file for the server port
import env from "env-var";
export const PORT = env.get("SERVER_PORT").default(8000).asPortNumber();
