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
        const dataWithId = [];
        for (let index = 1; index <= res.data.length; index++) {
          const {_id, total} = res.data[index - 1];
          dataWithId.push({
            id: index,
            yearMonth: _id,
            total,
          });
        }
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
