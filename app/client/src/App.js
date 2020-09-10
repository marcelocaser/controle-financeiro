import React from "react";
import FiltrarLancamentos from "./components/lancamento/FiltrarLancamentos";
import ListaLancamentos from "./components/lancamento/ListaLancamentos";
import NovoLancamento from "./components/lancamento/NovoLancamento";
import SelectPeriod from "./components/selectPeriod/SelectPeriod";
import transactionService from "./services/transactionService";

export default function App() {
  const [allYearsWithMonths, setAllYearsWithMonths] = React.useState([]);
  const [mesAtual, setMesAtual] = React.useState({});

  React.useEffect(() => {
    const retrieveAllYearsWithMonths = async () => {
      const res = await transactionService.getAllYearsWithMonths();
      setAllYearsWithMonths(res.data);
    };
    retrieveAllYearsWithMonths();
  }, []);

  const handleLancamentoSelected = (mesAnoSelecionado) => {
    setMesAtual(mesAnoSelecionado);
  };

  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold" }}>
          Bootcamp Full Stack - Desafio Final
        </h1>
        <h5>Controle Financeiro Pessoal</h5>
      </div>
      <div>
        {allYearsWithMonths.length > 0 && (
          <SelectPeriod periods={allYearsWithMonths} onLancamentoSelected={handleLancamentoSelected} />
        )}
      </div>
      <div className="row">
        <div className="col s2">
          <NovoLancamento />
        </div>
        <div className="col s10">
          <FiltrarLancamentos />
        </div>
      </div>
      <div>
        <ListaLancamentos lancamento={mesAtual} />
      </div>
    </>
  );
}
