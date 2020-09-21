import React from "react";
import transactionService from "../../services/transactionService";
import DetailsPeriod from "./DetailsPeriod";
import SelectDate from "./SelectDate";
import SelectNextPeriod from "./SelectNextPeriod";
import SelectPreviousPeriod from "./SelectPreviousPeriod";

export default function SelectPeriod({ periods, onPeriodSelected, filtro }) {
  const [anoMesAtual, setAnoMesAtual] = React.useState(periods[0]);
  const [enableNextButton, setEnableNextButton] = React.useState(true);
  const [enablePreviousButton, setEnablePreviousButton] = React.useState(true);

  console.log(
    "SelectPeriod PROPS: " + JSON.stringify(anoMesAtual) + " Filter? " + filtro
  );

  React.useEffect(() => {
    if (filtro !== "") {
      const retrieveWithFilters = async () => {
        let res = await transactionService.getAllWithFilter(filtro, anoMesAtual.yearMonth);
        res = res.data.transactions[0];
        console.log("SelectPeriod FILTER: " + JSON.stringify(res));
        setAnoMesAtual(res);
      };
      retrieveWithFilters();
    }
  }, [anoMesAtual.yearMonth, filtro]);

  React.useEffect(() => {
    /* ativa e desativa os botoes de acordo com a selecao*/
    if (Object.keys(anoMesAtual).length > 0) {
      const validatePreviusButton = periods[0];
      const validateNextButton = periods[periods.length - 1];
      if (anoMesAtual.id === validatePreviusButton.id) {
        setEnablePreviousButton(false);
        setEnableNextButton(true);
      } else {
        if (anoMesAtual.id === validateNextButton.id) {
          setEnableNextButton(false);
        } else {
          setEnableNextButton(true);
        }
        setEnablePreviousButton(true);
      }
    }
    onPeriodSelected(anoMesAtual);
  }, [anoMesAtual, periods, onPeriodSelected]);

  /* Recebe o valor de SelectDate, atualizando DetailsPeriod*/
  const handleAnoMesSelected = (anoMesSelected, index) => {
    console.log("handleAnoMesSelected: " + JSON.stringify(anoMesSelected));
    setAnoMesAtual(anoMesSelected);
    onPeriodSelected(anoMesSelected);
  };

  const handleButtonClick = (anoMesSelected) => {
    console.log("handleButtonClick: " + JSON.stringify(anoMesSelected));
    setAnoMesAtual(anoMesSelected);
    onPeriodSelected(anoMesSelected);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SelectPreviousPeriod
          habilitar={enablePreviousButton}
          anosMeses={periods}
          anoMesSelected={anoMesAtual}
          onButtonClick={handleButtonClick}
        />
        <SelectDate
          anosMeses={periods}
          anoMesSelected={anoMesAtual}
          onAnoMesSelected={handleAnoMesSelected}
        />
        <SelectNextPeriod
          habilitar={enableNextButton}
          anosMeses={periods}
          anoMesSelected={anoMesAtual}
          onButtonClick={handleButtonClick}
        />
      </div>
      <div style={{ paddingRight: "20px" }}>
        <DetailsPeriod
          anoMesSelected={anoMesAtual}
          onButtonClick={handleButtonClick}
        />
      </div>
    </>
  );
}
