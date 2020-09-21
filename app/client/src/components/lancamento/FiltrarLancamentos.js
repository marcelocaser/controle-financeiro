import React from "react";

export default function FiltrarLancamentos({ onFiltro, filtro }) {

  const handleFilter = (event) => {
    onFiltro(event.target.value);
  };

  return (
    <div className="input-field" style={{ marginTop: "-10px" }}>
      <input id="filter" type="text" value={filtro} onChange={handleFilter} />
      <label className="active" htmlFor="filter">
        Filtro
      </label>
    </div>
  );
}
