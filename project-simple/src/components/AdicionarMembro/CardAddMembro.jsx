import React from "react";
import semFoto from "../../assets/sem-foto-homem.jpg";

function CardAddMembro() {
  return (
    <div className="card card-membro">
      <img className="img-fluid" src={semFoto} alt="foto membro" />

      <div className="col d-flex flex-column justify-content-evenly">
        <p className="">Nome</p>
        <p className="">Cargo</p>
        <p className="">Data de ingresso</p>
      </div>
      <hr />
      <div className="text-center">
        <a href="#" className="btn btn-success">
          Adicionar Membro
        </a>
      </div>
    </div>
  );
}

export default CardAddMembro;
