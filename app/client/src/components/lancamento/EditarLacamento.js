import React from "react";

export default function EditarLacamento({ lancamento, onSave }) {
  console.log("EditarLacamento PROPS: " + JSON.stringify(lancamento));

  let { _id, value } = lancamento;

  const [editLancamento, setEditLancamento] = React.useState({});

  const [valor, setValor] = React.useState(value);

  React.useEffect(() => {
    setValor(lancamento.value);
    setEditLancamento(lancamento);
  }, [lancamento]);

  /**
   * Função para lidar com o envio
   * de dados do formulário. Devemos
   * prevenir o envio e tratar manualmente
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      _id,
      newValue: valor,
    };

    onSave(formData);
  };

  const handleValueChange = (event) => {
    console.log("handleValueChange: " + event.target.value)
    setValor(event.target.value);
  };

  /*const handleDescriptionChange = (event) => {
    console.log("handleValueChange: " + event.target.value)
    setDescricao(event.target.value);
  };*/

  return (
    <div id="editarLancamento" className="modal">
      {Object.keys(lancamento).length > 0 && (
        <div className="modal-content">
          <div style={styles.flexRow}>
            <span style={styles.title}>Editar Lançamento</span>
            <button
              className="modal-close waves-effect waves-lights btn red dark-4"
            >
              &#88;
          </button>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="row" style={{ marginBottom: "30px", }}>
              <div className="col s6">
                <label>
                  <input className="with-gap" name="group1" type="radio" checked={editLancamento.type === "+"} readOnly />
                  <span style={{ color: "#16a085", fontWeight: "bold" }}>Receita</span>
                </label>
              </div>
              <div className="col s6">
                <label>
                  <input className="with-gap" name="group1" type="radio" checked={editLancamento.type === "-"} readOnly />
                  <span style={{ color: "#c0392b", fontWeight: "bold" }}>Despesas</span>
                </label>
              </div>
            </div>
            <div className="input-field">
              <input id="inputName" type="text" value={editLancamento.description} readOnly />
              <label className="active" htmlFor="inputName">Descrição:</label>
            </div>

            <div className="input-field">
              <input id="inputSubject" type="text" value={editLancamento.category} readOnly />
              <label className="active" htmlFor="inputSubject">
                Categoria:
            </label>
            </div>

            <div className="row">
              <div className="col s8">
                <div className="input-field">
                  <input
                    id="valor"
                    type="number"
                    step="1"
                    autoFocus
                    value={valor}
                    onChange={handleValueChange}
                  />
                  <label className="active" htmlFor="valor">
                    Valor:
                </label>
                </div>
              </div>
              <div className="col s4">
                <div className="input-field">
                  <input id="dataLancamento" type="text" value={editLancamento.yearMonthDay} className="datepicker" readOnly />
                  <label className="active" htmlFor="dataLancamento">
                    Data:
                </label>
                </div>
              </div>
            </div>

            <div style={styles.flexRow}>
              <button
                className="waves-effect waves-light btn"
              // disabled={errorMessage.trim() !== ''}
              >
                Salvar
            </button>
              {/* <span style={styles.errorMessage}>{errorMessage}</span> */}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },

  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },

  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
};

