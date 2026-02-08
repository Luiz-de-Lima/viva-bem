import "./header.scss";
import LogoImg from "../../assets/LogoVivaBem.png";

const Header = () => {
  return (
    <header className="cabecalho-viva-bem">
      <div className="conteudo-flex">
      
        <div className="menu-capsula">
          <div className="logotipo">
            <span className="coracao">
              <img src={LogoImg} alt="logo viva bem" />
            </span>
          </div>
          <nav className="navegacao">
            <a href="#">Prevenção Masculina</a>
            <a href="#">Prevenção Feminina</a>
          </nav>
        </div>
        <section className="secao-hero-texto">
          <div className="bloco-conteudo">
            <h1 className="titulo-principal">
              Cuidar da saúde é um ato <br />
              <span className="texto-gradiente">de amor</span>
            </h1>

            <p className="descricao-hero">
              Confira os principais exames de prevenção por faixa etária.
            </p>

            <div className="botoes-container">
              <button className="botao-azul">Ver Agenda por Idade</button>
              <button className="botao-vazado">Saiba Mais</button>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};
export default Header;
