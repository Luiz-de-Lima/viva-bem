import React from 'react'
import cardAdolescenteImg from '../../assets/cardAdolescente.png'
import cardexameOftamologicoImg from '../../assets/exameOftamologico.png'
import cardExameCardiovasculasHomemImg from '../../assets/exameCardiovasculasHomem.png'
import cardExameDeSangueHomemImg from '../../assets/exameDeSangueHomem.png'
import cardConsultaDeHomemDe50Anos  from '../../assets/consultaDeHomemDe50Anos.png'
import './prevencaoM.scss'
const PrevencaoMasculina = () => {
  return (
    <section className="secao-masculina">
      <h2 className="titulo-masculino">Prevenção Masculina</h2>
      
      <div className="grade-cards-masculina">
        
      
        <div className="card-masculino">
          <div className="moldura-foto">
            <img src={cardAdolescenteImg} alt="Saúde Masculina 15 anos" />
          </div>
          <h3>A partir dos 15 anos</h3>
          <ul>
            <li>Autoexame testicular (mensal, após o banho)</li>
            <li>Atenção a alterações: tamanho, dor, nódulos</li>
            <li>Vacinação em dia (Hepatite B, tétano, HPV, influenza, covid)</li>
          </ul>
        </div>

   
        <div className="card-masculino">
          <div className="moldura-foto">
            <img src={cardexameOftamologicoImg} alt="Saúde Masculina 20 anos" />
          </div>
          <h3>A partir dos 20 anos</h3>
          <ul>
            <li>Exames de sangue e urina</li>
            <li>Avaliação odontológica e oftalmológica</li>
          </ul>
        </div>

   
        <div className="card-masculino">
          <div className="moldura-foto">
            <img src={cardExameCardiovasculasHomemImg} alt="Saúde Masculina 30 anos" />
          </div>
          <h3>A partir dos 30 anos</h3>
          <ul>
            <li>Check-up anual com clínico geral</li>
            <li>Exames de sangue mais completos</li>
            <li>Aferição da pressão arterial e glicemia de jejum</li>
            <li>Avaliação dermatológica e cardiovascular inicial</li>
          </ul>
        </div>

    
        <div className="card-masculino">
          <div className="moldura-foto">
            <img src={cardExameDeSangueHomemImg} alt="Saúde Masculina 40 anos" />
          </div>
          <h3>A partir dos 40 anos</h3>
          <ul>
            <li>Exames cardiovasculares</li>
            <li>Exames de sangue e urina anuais continuam</li>
            <li>Rastreamento antecipado de câncer de cólon ou próstata (se houver histórico)</li>
          </ul>
        </div>

     
        <div className="card-masculino">
          <div className="moldura-foto">
            <img src={cardConsultaDeHomemDe50Anos} alt="Saúde Masculina 50 anos" />
          </div>
          <h3>A partir dos 50 anos</h3>
          <ul>
            <li>Colonoscopia (a cada 5 anos)</li>
            <li>Exame de próstata (PSA + toque retal)</li>
            <li>Continuidade dos exames laboratoriais e cardiovasculares</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default PrevencaoMasculina
