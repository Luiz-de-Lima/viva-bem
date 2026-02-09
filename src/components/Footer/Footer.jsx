import React from "react";
import LogoImg from "../../assets/LogoVivaBem.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="rodape-principal">
      
        <div className="coluna-info">
          <div className="logo-footer">
            <span className="coracao-footer">
              <img src={LogoImg} alt="logo da empresa viver bem" />
            </span>
          </div>
          <p className="slogan">"Prevenção é cuidado com você"</p>
          <p className="descricao">
            Conectando pessoas através da sustentabilidade e tecnologia.
          </p>
        </div>

        <div className="coluna-links">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a
                href="https://www.gov.br/saude"
                target="_blank"
                rel="noreferrer"
              >
                Ministério da Saúde
              </a>
            </li>
            <li>
              <a
                href="https://www.inca.gov.br"
                target="_blank"
                rel="noreferrer"
              >
                INCA - Instituto Nacional do Câncer
              </a>
            </li>
            <li>
              <a
                href="https://www.saude.gov.br/sus"
                target="_blank"
                rel="noreferrer">
                SUS - Sistema Único de Saúde
              </a>
            </li>
          </ul>
        </div>

        <div className="coluna-contato">
          <h3>Contato e Apoio</h3>
          <p>Disque Saúde: 136</p>
          <p>sac@saude.gov.br</p>
          <div className="emergencia">
            <p>
              Em caso de emergência, procure imediatamente uma unidade de saúde
              ou ligue para o SAMU: 192
            </p>
          </div>
        </div>
        <div className="barra-final">
          <p>
            © 2026 Agenda de Saúde Preventiva. Informações baseadas em
            diretrizes médicas nacionais e internacionais.
          </p>
        </div>
    
    </footer>
  );
};

export default Footer;
