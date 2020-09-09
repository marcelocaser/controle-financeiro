//import mongoose from "mongoose";
import { isValidPeriod } from "../helpers/validatePeriod.js";
import TransactionModel from "../models/TransactionModel.js";
//const ObjectId = mongoose.Types.ObjectId;

const getYearWithMonth = async (req, res, next) => {
  try {
    let yearMonth = req.query.period;
    isValidPeriod(yearMonth);
    yearMonth = await TransactionModel.find({ yearMonth });
    const yearMonthWithTotal = {
      totalTransaction: yearMonth.length,
      transaction: yearMonth,
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
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);
    const dataWithId = [];
    for (let index = 1; index <= allYearsMonths.length; index++) {
      const { _id, total } = allYearsMonths[index - 1];
      dataWithId.push({
        id: index,
        yearMonth: _id,
        total,
      });
    }
    for (let index = 0; index < dataWithId.length; index++) {
      const element = dataWithId[index];
      console.log(element);
    }
    res.send(dataWithId);
  } catch (error) {
    next(error);
  }
};

export default { getAllYearsWithMonths, getYearWithMonth };
