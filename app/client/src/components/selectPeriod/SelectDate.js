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

  const [idYearMonthSelected, setIdYearMonthSelected] = React.useState(1);
  const [yearMonthSelected, setYearMonthSelected] = React.useState(
    anoMesSelected
  );

  React.useEffect(() => {
    const yearMonthObject = anosMeses.find(
      (yearMonth) => yearMonth.id === idYearMonthSelected
    );
    setYearMonthSelected(yearMonthObject);
    /* Retorna o valor selecionado para ser exibido em DetailsPeriod*/
    onAnoMesSelected(yearMonthSelected);
    console.log("SelectDate NEW: " + JSON.stringify(yearMonthSelected));
  }, [yearMonthSelected, idYearMonthSelected, anosMeses, onAnoMesSelected]);

  React.useEffect(() => {
    M.AutoInit();
  }, [anosMeses]);

  const handlePeriodChange = (event) => {
    const newPeriod = parseInt(event.target.value, 10);
    setIdYearMonthSelected(newPeriod);
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
