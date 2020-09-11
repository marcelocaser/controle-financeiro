import React from "react";
import transactionService from "../../services/transactionService";
import EditarLacamento from "./EditarLacamento";

export default function ListaLancamentos({ lancamento, onPeriodSelected }) {
  console.log("ListaLancamentos PROPS: " + JSON.stringify(lancamento));

  const [transactionsOfYearMonth, setTransactionsOfYearMonth] = React.useState(
    []
  );

  React.useEffect(() => {
    console.log("lancamento: " + JSON.stringify(lancamento));
    const retrieveAllTransactions = async () => {
      const res = await transactionService.getYearWithMonth(
        lancamento.yearMonth
      );
      setTransactionsOfYearMonth(res.data.transactions);
    };
    retrieveAllTransactions();
  }, [lancamento]);

  const handleEditClick = (editLancamento) => {

  };

  return (
    <div className="container center">
      {/* {transactionsOfYearMonth.length > 0 && <p>Aqui!!</p>} */}
      {transactionsOfYearMonth !== null &&
        transactionsOfYearMonth.map(
          ({ _id, day, category, description, type, value }, index) => {
            return (
              <table style={styles.table} className="striped center" key={_id}>
                <tbody>
                  <tr key={_id}>
                    <td>{day}</td>
                    <td>{category}</td>
                    <td>{description}</td>
                    <td>{type}</td>
                    <td>{value}</td>
                    <td>
                      <div>
                        <a
                          className="modal-trigger material-icons"
                          href="#editarLancamento"
                        >
                          edit
                        </a>
                        <span
                          className="material-icons"
                          style={{ cursor: "pointer" }}
                        >
                          delete
                        </span>
                        {/* {!isDeleted && (
                          <Action
                            onActionClick={handleActionClick}
                            //id={id}
                            grade={grades[index]}
                            type="delete"
                          />
                        )} */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          }
        )}
      {transactionsOfYearMonth !== null && (
        <EditarLacamento
          onEditClick={handleEditClick}
          lancamento={transactionsOfYearMonth}
        />
      )}
    </div>
  );
}

/*const styles = {
  goodGrade: {
    fontWeight: "bold",
    color: "green",
  },
  badGrade: {
    fontWeight: "bold",
    color: "red",
  },
  table: {
    margin: "20px",
    padding: "10px",
  },
};*/
