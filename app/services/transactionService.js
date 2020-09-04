import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const getAllMonthWithYear = async (req, res, next) => {
  try {
    console.log(req.params.yearMonth);
    res.send("OK");
  } catch (error) {
    next(error);
  }
};

export default { getAllMonthWithYear };
