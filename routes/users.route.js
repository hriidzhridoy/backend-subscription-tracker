import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "User List" });
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `User ${id}` });
});

export default userRouter;
