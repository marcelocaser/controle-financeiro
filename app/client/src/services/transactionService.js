import http from "../http-common";

const getAllYearsWithMonths = () => {
  return http.get(`${process.env.REACT_APP_URL_API}/allYearsWithMonths`);
};

const getAllWithFilter = (filter, yearMonth) => {
  const json = JSON.stringify({period: `${yearMonth}`, filter: `${filter}`});
  return http.post(`${process.env.REACT_APP_URL_API}/allWithFilter`, json);
};

const getYearWithMonth = (yearMonth) => {
  return http.get(`${process.env.REACT_APP_URL_API}?period=${yearMonth}`);
};

export default { getAllYearsWithMonths, getYearWithMonth, getAllWithFilter };
