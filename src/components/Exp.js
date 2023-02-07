import React from "react";

import styles from "./Tab.module.css";
import { useState } from "react";

const Exp = () => {
  const [tabs, setTabs] = useState(
    <div>
      <h1>Cptec Inpe</h1>

      <p>
        Bolsista de iniciação cientifica, foi desenvolvido um projeto que tinha
        como objetivo, monitorar as principais bacias hidrográficas do Pais,
        utilizando de ferramentas e Linguagens de programação especificas como,
        Fortran, Shellscript e Grads.
      </p>
    </div>
  );

  return (
    <div>
      <div className={styles.tab_container}>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setTabs(
                <div>
                  <h1>Cptec Inpe</h1>
                  <p>
                    Bolsista de iniciação cientifica, foi desenvolvido um
                    projeto que tinha como objetivo, monitorar as principais
                    bacias hidrográficas do Pais, utilizando de ferramentas e
                    Linguagens de programação especificas como, Fortran,
                    Shellscript e Grads.
                  </p>
                </div>
              );
            }}
            className={styles.btn_tab}
          >
            Cptec Inpe
          </button>

          <button
            onClick={() => {
              setTabs(
                <div>
                  <h1>Precisa Cobranças</h1>
                  <p>
                    Suporte ao usuário, administração de redes e infraestrutura,
                    tratativa de dados, manutenção do CRM da empresa, manutenção
                    de computadores, configuração de acesso remoto, Windows
                    Server, administração e monitoramento de rede Voip,
                    configuração de servidores de e-mail (Pop, Imap)
                  </p>{" "}
                </div>
              );
            }}
            className={styles.btn_tab}
          >
            Precisa Cobranças
          </button>

          <button
            onClick={() => {
              setTabs(
                <div>
                  <h1>MBD Soluções</h1>
                  <p>
                    Mapeamento de estrutura operacional junto ao cliente,
                    treinamento prático junto a funcionários e gestores sobre
                    sistema de automação comercial, processos de implantação de
                    ERP
                  </p>{" "}
                </div>
              );
            }}
            className={styles.btn_tab}
          >
            MBD Soluções
          </button>
        </div>
        <div className={styles.conteudo}>{tabs}</div>
      </div>
    </div>
  );
};

export default Exp;
