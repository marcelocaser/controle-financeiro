import React from "react";

/**
 * Importante para o total funcionamento
 * do Materialize, incluindo as funcionalidades
 * que precisam de JavaScript
 */
import M from "materialize-css";

export default function SelectDate({
  anosMeses,
  anoMesSelected,
  onAnoMesSelected,
}) {
  //let { id, lancamentos, despesas, receitas, saldo } = anoMesSelected;
  console.log("SelectDate PROPS: " + JSON.stringify(anoMesSelected));

  const [idYearMonthSelected, setIdYearMonthSelected] = React.useState(
    anoMesSelected.id
  );
  const [yearMonthSelected, setYearMonthSelected] = React.useState(
    anoMesSelected
  );

  //const [yearsMonths, setYearsMonths] = React.useState([]);

  /*React.useEffect(() => {
    M.AutoInit();
    const yearMonthObject = anosMeses.find(
      (yearMonth) => yearMonth.id === idYearMonthSelected
    );
    //setYearMonthSelected(yearMonthObject);
    //Retorna o valor selecionado para ser exibido em DetailsPeriod
    onAnoMesSelected(yearMonthObject);
    //console.log("SelectDate NEW: " + JSON.stringify(yearMonthSelected));
  }, [idYearMonthSelected, anosMeses, onAnoMesSelected]);*/

  React.useEffect(() => {
    M.AutoInit();
  }, [anosMeses, idYearMonthSelected]);

  React.useEffect(() => {
    const yearMonthObject = anosMeses.find(
      (yearMonth) => yearMonth.id === idYearMonthSelected
    );
    console.log("idYearMonthSelected : " + JSON.stringify(yearMonthObject));
    setYearMonthSelected(yearMonthObject);
  }, [anosMeses, idYearMonthSelected, yearMonthSelected]);

  /*React.useEffect(() => {
    setYearsMonths(anosMeses);
  }, [anosMeses]);*/

  const handlePeriodChange = (event) => {
    const newIdPeriod = parseInt(event.target.value, 10);
    console.log("newIdPeriod: " + newIdPeriod)
    setIdYearMonthSelected(event.target.value);
    const yearMonthObject = anosMeses.find(
      (yearMonth) => yearMonth.id === newIdPeriod
    );
    //setYearMonthSelected(yearMonthObject);
    onAnoMesSelected(yearMonthObject);
  };

  return (
    <>
      <div style={{ width: "150px", margin: "10px" }}>
        {
          <select value={idYearMonthSelected} onChange={handlePeriodChange}>
            {anosMeses.map((allYearMonth) => {
              const { id, yearMonth } = allYearMonth;
              return (
                <option key={id} value={id}>
                  {yearMonth}
                </option>
              );
            })}
          </select>
        }
      </div>
    </>
  );
}
