import React from 'react'
import checkImg from '../../assets/check.png'
import apoioFamiliaImg from '../../assets/apoioFamilia.png'
import coracaoImg from '../../assets/coracao.png'
import './exameRotina.scss'

const ExameRotina = () => {
  return (
    <section className="secao-exames-rotina">
      <div className="texto-central">
        <h2 className="titulo-gradiente">A Importância dos Exames de Rotina</h2>
        <p>
          Os exames preventivos são fundamentais para detectar doenças em estágios iniciais, 
          quando o tratamento é mais eficaz e menos invasivo. Manter uma rotina de check-ups 
          regulares pode salvar vidas e garantir uma melhor qualidade de vida para você e sua família.
        </p>
      </div>

      <div className="flex-container-cards">
      
        <div className="bloco-informativo">
          <img src={checkImg} alt="" className="simbolo-verde"/>
          <h3>Detecção Precoce</h3>
          <p>Identifique problemas antes que se tornem graves</p>
        </div>

   
        <div className="bloco-informativo">
          <img src={apoioFamiliaImg} alt="" className="simbolo-verde"/>
          <h3>Cuidado Familiar</h3>
          <p>Proteja toda a família com exames regulares</p>
        </div>


        <div className="bloco-informativo">
          <img src={coracaoImg} alt="" className="simbolo-verde"/>
          <h3>Qualidade de Vida</h3>
          <p>Viva mais e melhor com prevenção adequada</p>
        </div>
      </div>
    </section>
  )
}

export default ExameRotina
