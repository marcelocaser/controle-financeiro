import React from "react";

export default function DetailsPeriod({ anoMesSelected }) {
  let { id, lancamentos, despesas, receitas, saldo } = anoMesSelected;
  console.log("DetailsPeriod PROPS: " + JSON.stringify(anoMesSelected));

  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        margin: "10px",
        border: "1px solid lightgray",
        borderRadius: "5px",
        marginBottom: "30px",
      }}
    >
      <div
        key={id}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <label>Lançamentos: {lancamentos} </label>
        <label>
          Receitas: <span style={{ color: "#16a085" }}>{receitas}</span>
        </label>
        <label>Despesas: <span style={{ color: "#c0392b" }}>{despesas}</span></label>
        <label>
          Saldo: <span style={{ color: "#16a085" }}>{saldo}</span>
        </label>
      </div>
    </div>
  );
}
