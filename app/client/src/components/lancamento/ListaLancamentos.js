import React from "react";
import transactionService from "../../services/transactionService";
import EditarLacamento from "./EditarLacamento";
import Opcoes from "./Opcoes";

export default function ListaLancamentos({ lancamento, filtro }) {
  console.log("ListaLancamentos PROPS: " + JSON.stringify(lancamento));

  const [transactionsOfYearMonth, setTransactionsOfYearMonth] = React.useState(
    []
  );
  const [transactionOfYearMonth, setTransactionOfYearMonth] = React.useState(
    null
  );

  React.useEffect(() => {
    const retrieveAllTransactions = async () => {
      let res = await transactionService.getYearWithMonth(lancamento.yearMonth);
      if (filtro !== "") {
        const filters = res.data.transactions.filter((filter) => {
          return filter.description.includes(filtro);
        });
        setTransactionsOfYearMonth(filters);
      } else {
        setTransactionsOfYearMonth(res.data.transactions);
      } 
    };
    retrieveAllTransactions();
  }, [lancamento, filtro]);

  const handleOptionClick = (id, type) => {
    const transactionSelected = transactionsOfYearMonth.find(
      (transaction) => transaction._id === id
    );
    setTransactionOfYearMonth(transactionSelected);
  };

  const handlePersistData = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="container center">
        {/* {transactionsOfYearMonth.length > 0 && <p>Aqui!!</p>} */}
        {transactionsOfYearMonth !== null &&
          transactionsOfYearMonth.map(
            ({ _id, day, category, description, type, value }, index) => {
              return (
                <table
                  style={styles.table}
                  className="striped center"
                  key={_id}
                >
                  <tbody>
                    <tr key={_id}>
                      <td>{day}</td>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>{type}</td>
                      <td>{value}</td>
                      <td>
                        <div>
                          <Opcoes
                            id={_id}
                            type={"edit"}
                            isModal={true}
                            modalName={"#editarLancamento"}
                            onOptionClick={handleOptionClick}
                          />
                          <Opcoes id={_id} type={"delete"} isModal={false} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            }
          )}
      </div>
      <div>
        {/* {transactionOfYearMonth !== null && ( */}
        <EditarLacamento
          lancamento={transactionOfYearMonth}
          onSave={handlePersistData}
        />
        {/* )} */}
      </div>
    </>
  );
}

const styles = {
  /*goodGrade: {
    fontWeight: "bold",
    color: "green",
  },
  badGrade: {
    fontWeight: "bold",
    color: "red",
  },*/
  table: {
    margin: "20px",
    padding: "10px",
  },
};
