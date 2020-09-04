import express from "express";
import transactionService from "../services/transactionService.js";
import { isValidPeriod } from "../helpers/validatePeriod.js";

const transactionRouter = express.Router();

transactionRouter.get("/", (req, res, next) => {
  try {
    let period = "";
    period = req.query.period;
    console.log(isValidPeriod(period));
    res.send(
      "OK" /*{
      message:
        "Utilize /api/transaction?period=anoMes onde 'anoMes' é no formato YYYY-MM",
      info: "onde YYYY deve estar entre [2000-3000] e MM entre [1-12]",
    }*/
    );
  } catch (error) {
    next(error);
  }
});

// funcao tratamento de erro
transactionRouter.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default transactionRouter;
