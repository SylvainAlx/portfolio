import { SiAngular, SiNestjs, SiDelphi, SiGitlab } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const Atelog2i = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <span>
            <b>2023-2024</b>
            <a href="https://smart-industry-myscore.fr/" target="_blank">
              Atelog MyScore
            </a>
          </span>
          <strong>Développeur logiciel</strong>
          <p>
            Création d’un logiciel pour récupérer et traiter des données IOT et
            OPC
          </p>
          <p>
            Maintenance d’un logiciel WMS & collaboration sur une application
            web de MES
          </p>
          <p>Requête en base de données</p>
          <p>
            Écriture de tests unitaires, de documentations et de cahier des
            charges
          </p>
        </>
      ) : (
        <>
          <span>
            <b>2023-2024</b>
            <a href="https://smart-industry-myscore.fr/" target="_blank">
              Atelog MyScore
            </a>
          </span>
          <strong>Software engineer</strong>
          <p>
            Development of a software to retrieve and process IOT and OPC data
          </p>
          <p>
            Maintenance of a WMS software & collaboration on a MES web
            application
          </p>
          <p>Database querying</p>
          <p>Writing unit tests, documentation, and specifications</p>
        </>
      )}
      <div className="technos animated">
        <div className="techno">
          <SiDelphi className="icon" />
          Delphi
        </div>
        <div className="techno">
          <DiMsqlServer className="icon" />
          SQL Server
        </div>
        <div className="techno">
          <SiGitlab className="icon" />
          GitLab
        </div>
        <div className="techno">
          <SiAngular className="icon" />
          Angular
        </div>
        <div className="techno">
          <SiNestjs className="icon" />
          Nest.js
        </div>
      </div>
    </li>
  );
};

export default Atelog2i;
