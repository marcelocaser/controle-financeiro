import React from "react";

export default function FiltrarLancamentos() {
  return (
    <div className="input-field" style={{ marginTop: "-10px" }}>
      <input id="filter" type="text" value={""} readOnly />
      <label className="active" htmlFor="filter">
        Filtro
      </label>
    </div>
  );
}
