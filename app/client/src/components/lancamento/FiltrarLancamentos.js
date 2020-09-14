import React from "react";

export default function FiltrarLancamentos({ onFiltro }) {
  const [filtro, setFiltro] = React.useState("");

  const handleFilter = (event) => {
    setFiltro(event.target.value);
    onFiltro(filtro);
  }

  return (
    <div className="input-field" style={{ marginTop: "-10px" }}>
      <input id="filter" type="text" value={filtro} onChange={handleFilter} />
      <label className="active" htmlFor="filter">
        Filtro
      </label>
    </div>
  );
}
