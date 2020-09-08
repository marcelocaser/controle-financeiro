import React from "react";
/**
 * Importante para o total funcionamento
 * do Materialize, incluindo as funcionalidades
 * que precisam de JavaScript
 */
import M from "materialize-css";

export default function SelectTransaction({ transactions }) {
  //const [allYearsMonths, setAllYearsMonths] = React.useState(transactions);
  const [yearMonthSelected, setYearMonthSelected] = React.useState();

  /*React.useEffect(() => {
    const transactionSelected = transactions.find((transaction) => transaction._id === yearMonthSelected);
    setYearMonthSelected(transactionSelected);
  }, []);*/

  React.useEffect(() => {
    M.AutoInit();
  }, []);

  const handleDataBaseChange = (event) => {
    const newDataBase = event.target.value;
    setYearMonthSelected(newDataBase);
  };

  return (
    <div className="container">
      {
        <select
          value={yearMonthSelected}
          onChange={handleDataBaseChange}
          className="browser-default"
        >
          {transactions.map((allYearMonth) => {
            const { _id } = allYearMonth;
            return (
              <option key={_id} value={_id}>
                {_id}
              </option>
            );
          })}
        </select>
      }

      <p>
    Meu banco de dados preferido é <strong>{yearMonthSelected}</strong>.
      </p>
    </div>
  );
}
