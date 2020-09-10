import React from "react";
import SelectDate from "./SelectDate";
import DetailsPeriod from "./DetailsPeriod";
import SelectPreviousPeriod from "./SelectPreviousPeriod";
import SelectNextPeriod from "./SelectNextPeriod";

export default function SelectPeriod({ periods }) {
  const [mesAtual, setMesAtual] = React.useState(periods[0]);
  console.log("SelectPeriod PROPS: " + JSON.stringify(mesAtual));

  /* Recebe o valor de SelectDate, atualizando DetailsPeriod*/
  const handleAnoMesSelected = (mesAnoSelecionado) => {
    setMesAtual(mesAnoSelecionado);
    //console.log("handleAnoMesSelected: " + JSON.stringify(mesAtual));
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
        <SelectPreviousPeriod />
        <SelectDate
          anosMeses={periods}
          anoMesSelected={mesAtual}
          onAnoMesSelected={handleAnoMesSelected}
        />
        <SelectNextPeriod />
      </div>
      <div style={{ paddingRight: "20px" }}>
        <DetailsPeriod detail={mesAtual} />
      </div>
    </>
  );
}
