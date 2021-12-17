import { useEffect, useState } from "react";
import "./App.css";
import AceitarTarefa from "./components/AceitarTarefa/AceitarTarefa";
import AdicionarMembro from "./components/AdicionarMembro/AdicionarMembro";
import AtribuirTarefa from "./components/AtribuirTarefa/AtribuirTarefa";
import Eventos from "./components/Eventos/Eventos";
import GerenciarEquipe from "./components/GerenciarEquipe/GerenciarEquipe";
import GerenciarEventos from "./components/GerenciarEventos/GerenciarEventos";
import GerenteTarefa from "./components/GerenteTarefa/GerenteTarefa";
import HomeGerente from "./components/HomeGerente/HomeGerente";
import HomeMembro from "./components/HomeMembro/HomeMembro";
import MembroTarefa from "./components/MembroTarefa/MembroTarefa";
import MinhasEquipes from "./components/MinhasEquipes/MinhasEquipes";
import NovaEquipe from "./components/NovaEquipe/NovaEquipe";
import NovaTarefa from "./components/NovaTarefa/NovaTarefa";
import NovoEvento from "./components/NovoEvento/NovoEvento";
import userSheet from "./data/dataUser.json"
import teamsSheet from "./data/dataTeams.json"

function App() {

  const dataUser  = userSheet;
  const dataTeams = teamsSheet;

  const [login, setLogin] = useState({id:1061});
  const [equipes, setEquipes] = useState ([]);
  const [tarefas, setTarefas] = useState ([]);
  const [eventos, setEventos] = useState ([]);

  useEffect (() => {
    setEquipes (teamsSheet.filter((equipe) => {
      return equipe.gerente == login.id;
    }));
  }, [login]);

  const criarEvento = newEvent => {
    console.log("Chamei a funcao")
    setEventos([...eventos, newEvent]);
  }

  console.log(eventos);

  return (
    <div>
      {/*<AdicionarMembro dataUser = {dataUser} />
      <MinhasEquipes equipesGerenciadas = {equipes} />*/}
      <NovoEvento criarEvento = {criarEvento} />
    </div>
  );
}

export default App;
