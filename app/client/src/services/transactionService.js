import http from "../http-common";

const getAllYearsWithMonths = () => {
  return http.get("/allYearsWithMonths");
};

export default { getAllYearsWithMonths };
