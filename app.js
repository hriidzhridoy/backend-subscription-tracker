import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/users.route.js";
import subscriptionRouter from "./routes/subscription.route.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About Us");
});

app.listen(PORT, () => {
  console.log(`Asif Hridoy ${PORT}`);
});

export default app;
