import './header.scss';

const Header = () => {
  return (
    <header className="cabecalho-principal">
      <div className="container-navegacao">
        <div className="logotipo">
          {/* Aqui podes colocar a imagem do ícone do coração se tiveres */}
          <span className="icone-coracao">♥</span>
          <h1>Viva Bem</h1>
        </div>
        
        <nav className="menu-links">
          <a href="#masculina" className="link-item">Prevenção Masculina</a>
          <a href="#feminina" className="link-item">Prevenção Feminina</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;