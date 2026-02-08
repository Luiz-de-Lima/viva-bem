import React from 'react'
import vacinaImg from '../../assets/imagemVacina.png'
import exameDeSangueImg from '../../assets/imagemExameDeSangue.png'
import exameExameHpvImg from '../../assets/imagemExameHPV.png'
import exameCardioVascularImg from '../../assets/imagemExameCardiovascular.png'
import mamografiaImg from '../../assets/imagemMamografia.png'
import ColonoscopiaImg from '../../assets/imagemColonoscopia.png'
import './prevencaoF.scss'


const PrevencaoFeminina = () => {
  return (
   <section className="secao-feminina">
      <h2 className="titulo-feminina">Prevenção Feminina</h2>
      
      <div className="grade-cards">
        
      
        <div className="card-feminino">
          <div className="moldura-foto">
            <img src={vacinaImg} alt="Saúde 15 anos" />
          </div>
          <h3>A partir dos 15 anos</h3>
          <ul>
            <li>Vacinação em dia (HPV, tétano, hepatite B, influenza, covid)</li>
            <li>Consulta ginecológica inicial (orientação sobre saúde menstrual e ISTs)</li>
          </ul>
        </div>

        
        <div className="card-feminino">
          <div className="moldura-foto">
            <img src={exameDeSangueImg} alt="Saúde 20 anos" />
          </div>
          <h3>A partir dos 20 anos</h3>
          <ul>
            <li>Exames de sangue e urina anuais (hemograma, glicose, colesterol)</li>
            <li>Check-up odontológico e oftalmológico</li>
            <li>Exame dermatológico</li>
          </ul>
        </div>

   
        <div className="card-feminino">
          <div className="moldura-foto">
            <img src={exameExameHpvImg} alt="Saúde 25 anos" />
          </div>
          <h3>A partir dos 25 anos</h3>
          <ul>
            <li>Papanicolau (preventivo) – a cada 3 anos se não houver alterações</li>
            <li>Rastreio do HPV se indicado</li>
          </ul>
        </div>

       
        <div className="card-feminino">
          <div className="moldura-foto">
            <img src={exameCardioVascularImg} alt="Saúde 30 anos" />
          </div>
          <h3>A partir dos 30 anos</h3>
          <ul>
            <li>Check-up anual com clínico geral</li>
            <li>Exames de sangue mais completos</li>
            <li>Aferição da pressão arterial e glicemia</li>
          </ul>
        </div>

        
        <div className="card-feminino">
          <div className="moldura-foto">
            <img src={mamografiaImg} alt="Saúde 40 anos" />
          </div>
          <h3>A partir dos 40 anos</h3>
          <ul>
            <li>Mamografia anual ou bianual</li>
            <li>Exames cardiovasculares mais detalhados (eletrocardiograma)</li>
          </ul>
        </div>

        {/* Card 50 anos */}
        <div className="card-feminino">
          <div className="moldura-foto">
            <img src={ColonoscopiaImg} alt="Saúde 50 anos" />
          </div>
          <h3>A partir dos 50 anos</h3>
          <ul>
            <li>Colonoscopia (a cada 5 anos)</li>
            <li>Continuidade dos exames laboratoriais</li>
            <li>Monitoramento para osteoporose</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default PrevencaoFeminina
