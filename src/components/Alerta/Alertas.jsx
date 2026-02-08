import React from 'react'
import iconVacina from '../../../public/iconVacina.png'
import iconCoracao from '../../../public/iconCoracao.png'
import iconEscudo from '../../../public/iconEscudo.png'
import IconCerebro from '../../../public/iconCerebro.png'
import './alerta.scss'
const Alertas = () => {
  return (
    <section className="secao-alertas">
      <h2 className="titulo-alertas">Alertas Importantes</h2>

      <div className="container-flex-alertas">
        
     
        <div className="card-alerta mamas">
          
          <img src={iconCoracao} alt="" className="icone"/>
          <div className="texto">
            <h3>Autoexame das Mamas</h3>
            <p>Realize mensalmente entre o 7º e 10º dia após o início da menstruação.</p>
          </div>
        </div>

    
        <div className="card-alerta testiculos">
        <img src={iconEscudo} alt="" />
          <div className="texto">
            <h3>Autoexame dos Testículos</h3>
            <p>Homens devem realizar o autoexame mensalmente, preferencialmente após o banho.</p>
          </div>
        </div>


        <div className="card-alerta vacinas">
        
          <img src={iconVacina} alt="" className="icone" />
          <div className="texto">
            <h3>Vacinas em Dia</h3>
            <p>Mantenha sua carteira atualizada. Algumas vacinas precisam de reforço na idade adulta.</p>
          </div>
        </div>

   
        <div className="card-alerta mental">
      
          <img src={IconCerebro} alt="" className="icone"/>
          <div className="texto">
            <h3>Saúde Mental</h3>
            <p>Cuidar da mente é tão importante quanto do corpo. Reserve momentos para relaxar.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Alertas
