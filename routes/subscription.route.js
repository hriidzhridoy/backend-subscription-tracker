import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/subscriptions", (req, res) => {
  res.send({ title: "Subscription List" });
});

subscriptionRouter.get("/subscriptions/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `Subscription ${id}` });
});

export default subscriptionRouter;
