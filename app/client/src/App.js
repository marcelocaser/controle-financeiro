import React from "react";
import SelectTransaction from "./components/SelectTransaction";
import transactionService from "./services/transactionService";

export default function App() {
  const [allYearsWithMonths, setAllYearsWithMonths] = React.useState([]);

  const retrieveTransaction = () => {
    transactionService
      .getAllYearsWithMonths()
      .then((res) => {
        setAllYearsWithMonths(res.data);
        //console.log(dataWithId);
        //console.log(res.data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  React.useEffect(() => {
    retrieveTransaction();
  }, []);

  return (
    <div>
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      <SelectTransaction transactions={allYearsWithMonths} />
    </div>
  );
}
