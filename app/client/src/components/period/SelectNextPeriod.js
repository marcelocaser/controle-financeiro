import React from "react";

export default function SelectNextPeriod({
  habilitar,
  anosMeses,
  anoMesSelected,
  onButtonClick,
}) {
  const handleChangeButton = () => {
    const index = anosMeses.indexOf(anoMesSelected) + 1;
    console.log(index)
    onButtonClick(anosMeses[index]);
  };
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
        &#62;
      </button>
    </div>
  );
}
