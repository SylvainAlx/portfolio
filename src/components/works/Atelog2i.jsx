import { SiAngular, SiNestjs, SiDelphi, SiGitlab } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import Techno from "../Techno";

const Atelog2i = ({ langage }) => {
  return (
    <li className="alignedItems">
      {langage === "french" ? (
        <>
          <span>
            <b>2023-2024</b>
            <a
              href="https://www.atelog-software.com/"
              target="_blank"
              rel="noreferrer"
            >
              Atelog MyScore
            </a>
          </span>
          <h5>Développeur logiciel</h5>
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
            <a
              href="https://smart-industry-myscore.fr/"
              target="_blank"
              rel="noreferrer"
            >
              Atelog MyScore
            </a>
          </span>
          <h5>Software engineer</h5>
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
        <Techno rank={3}>
          <SiDelphi className="icon" />
          Delphi
        </Techno>
        <Techno rank={3}>
          <DiMsqlServer className="icon" />
          SQL Server
        </Techno>
        <Techno rank={3}>
          <SiGitlab className="icon" />
          GitLab
        </Techno>
        <Techno rank={1}>
          <SiAngular className="icon" />
          Angular
        </Techno>
        <Techno rank={1}>
          <SiNestjs className="icon" />
          Nest.js
        </Techno>
      </div>
    </li>
  );
};

export default Atelog2i;
