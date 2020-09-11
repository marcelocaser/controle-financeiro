/**
 * Importante para o total funcionamento
 * do Materialize, incluindo as funcionalidades
 * que precisam de JavaScript
 */
import M from "materialize-css";
import React from "react";

export default function EditarLacamento({ idModal, lancamento }) {
  console.log(lancamento);
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div id="editarLancamento" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p></p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
}
