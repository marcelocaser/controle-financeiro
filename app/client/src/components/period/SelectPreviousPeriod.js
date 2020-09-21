import React from "react";

export default function SelectPreviousPeriod({ habilitar, anosMeses, anoMesSelected, onButtonClick }) {
  const handleChangeButton = () => {
    const index = anosMeses.indexOf(anoMesSelected) - 1;
    onButtonClick(anosMeses[index]);
  }
  return (
    <div>
      <button
        className={
          habilitar
            ? "waves-effect waves-light btn blue lighten-1"
            : "waves-effect waves-light btn blue lighten-1 disabled"
        }
        onClick={handleChangeButton}
      >
        &#60;
      </button>
    </div>
  );
}
