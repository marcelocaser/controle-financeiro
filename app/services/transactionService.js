//import mongoose from "mongoose";
import { isValidPeriod } from "../helpers/validatePeriod.js";
import TransactionModel from "../models/TransactionModel.js";
import { formatShortMonth } from "../helpers/formatHelpers.js";
//const ObjectId = mongoose.Types.ObjectId;

const getYearWithMonth = async (req, res, next) => {
  try {
    let yearMonth = req.query.period;
    isValidPeriod(yearMonth);
    yearMonth = await TransactionModel.find({ yearMonth });
    const yearMonthWithTotal = {
      totalTransactions: yearMonth.length,
      transactions: yearMonth,
    };
    res.send(yearMonthWithTotal);
  } catch (error) {
    next(error);
  }
};

const getAllYearsWithMonths = async (req, res, next) => {
  try {
    let allYearsMonths = await TransactionModel.aggregate([
      {
        $group: {
          _id: "$yearMonth",
          total: {
            $sum: 1,
          },
          despesas: {
            $sum: {
              $cond: {
                if: {
                  $eq: ["$type", "+"],
                },
                then: {
                  $sum: "$value",
                },
                else: 0,
              },
            },
          },
          receitas: {
            $sum: {
              $cond: {
                if: {
                  $eq: ["$type", "-"],
                },
                then: {
                  $sum: "$value",
                },
                else: 0,
              },
            },
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);
    const allYearsMonthsComplete = [];
    for (let index = 1; index < allYearsMonths.length; index++) {
      const { _id, total, despesas, receitas } = allYearsMonths[index - 1];
      const yearMonth = _id;
      const yearMonthShort = formatShortMonth(
        yearMonth.split("-")[0],
        yearMonth.split("-")[1],
        1
      );
      allYearsMonthsComplete.push({
        id: index,
        yearMonth,
        yearMonthShort,
        despesas,
        receitas,
        saldo: despesas - receitas,
        lancamentos: total,
      });
    }
    res.json(allYearsMonthsComplete);
  } catch (error) {
    next(error);
  }
};

export default { getAllYearsWithMonths, getYearWithMonth };
