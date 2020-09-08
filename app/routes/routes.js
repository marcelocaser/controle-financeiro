import express from "express";
import transactionService from "../services/transactionService.js";

const transactionRouter = express.Router();

transactionRouter.get("/", transactionService.getYearWithMonth)
transactionRouter.get("/allYearsWithMonths", transactionService.getAllYearsWithMonths);

// funcao tratamento de erro
transactionRouter.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});


export default transactionRouter;
