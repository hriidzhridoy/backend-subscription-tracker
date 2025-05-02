import { MONGODB_URI } from "../config/env";

if (!MONGODB_URI || MONGODB_URI === "") {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
