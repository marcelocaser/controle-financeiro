import http from "../http-common";

const getAllYearsWithMonths = () => {
  return http.get(`${process.env.REACT_APP_URL_API}/allYearsWithMonths`);
};

const getYearWithMonth = (yearMonth) => {
  return http.get(`${process.env.REACT_APP_URL_API}?period=${yearMonth}`);
};

export default { getAllYearsWithMonths, getYearWithMonth };
