import React from "react";
import FiltrarLancamentos from "./components/lancamento/FiltrarLancamentos";
import ListaLancamentos from "./components/lancamento/ListaLancamentos";
import NovoLancamento from "./components/lancamento/NovoLancamento";
import SelectPeriod from "./components/period/SelectPeriod";
import transactionService from "./services/transactionService";

export default function App() {
  const [allYearsWithMonths, setAllYearsWithMonths] = React.useState([]);
  const [yearWithMonth, setYearWithMonth] = React.useState({});
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    const retrieveAllYearsWithMonths = async () => {
      const res = await transactionService.getAllYearsWithMonths();
      setAllYearsWithMonths(res.data);
    };
    retrieveAllYearsWithMonths();
  }, []);

  const handlePeriodSelected = (mesAnoSelecionado) => {
    setYearWithMonth(mesAnoSelecionado);
    console.log("handlePeriodSelected: " + JSON.stringify(mesAnoSelecionado));
  };

  const handleOnFiltro = (filtro) => {
    const filterTextLowerCase = filtro.toLowerCase();
    setFilter(filterTextLowerCase);
    console.log("handleOnFiltro: " + filterTextLowerCase);
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
          <SelectPeriod
            periods={allYearsWithMonths}
            onPeriodSelected={handlePeriodSelected}
            filtro={filter}
          />
        )}
      </div>
      <div className="row">
        <div className="col s2">
          <NovoLancamento />
        </div>
        <div className="col s10">
          <FiltrarLancamentos onFiltro={handleOnFiltro} filtro={filter} />
        </div>
      </div>
      <div>
        {Object.keys(yearWithMonth).length > 0 && (
          <ListaLancamentos lancamento={yearWithMonth} filtro={filter} />
        )}
      </div>
    </>
  );
}
