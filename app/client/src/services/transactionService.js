import http from "../http-common";

const getAllYearsWithMonths = () => {
  return http.get("/allYearsWithMonths");
};

const getYearWithMonth = (yearMonth) => {
  return http.get(`?period=${yearMonth}`);
};

export default { getAllYearsWithMonths, getYearWithMonth };
