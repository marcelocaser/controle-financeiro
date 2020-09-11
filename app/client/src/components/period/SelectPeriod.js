import React from "react";
import SelectDate from "./SelectDate";
import DetailsPeriod from "./DetailsPeriod";
import SelectPreviousPeriod from "./SelectPreviousPeriod";
import SelectNextPeriod from "./SelectNextPeriod";

export default function SelectPeriod({ periods, onPeriodSelected }) {
  const [anoMesAtual, setAnoMesAtual] = React.useState(periods[0]);
  console.log("SelectPeriod PROPS: " + JSON.stringify(anoMesAtual));

  /* Recebe o valor de SelectDate, atualizando DetailsPeriod*/
  const handleAnoMesSelected = (mesAnoSelecionado) => {
    setAnoMesAtual(mesAnoSelecionado);
    //console.log("handleAnoMesSelected: " + JSON.stringify(mesAtual));
  };

  React.useEffect(() => {
    onPeriodSelected(anoMesAtual);
  }, [anoMesAtual, onPeriodSelected]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SelectPreviousPeriod />
        <SelectDate
          anosMeses={periods}
          anoMesSelected={anoMesAtual}
          onAnoMesSelected={handleAnoMesSelected}
        />
        <SelectNextPeriod />
      </div>
      <div style={{ paddingRight: "20px" }}>
        <DetailsPeriod detail={anoMesAtual} />
      </div>
    </>
  );
}
