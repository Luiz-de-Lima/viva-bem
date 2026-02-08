import './App.scss'
import Alertas from './components/Alerta/Alertas'
import ExameRotina from './components/ExameRotina/ExameRotina'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PrevencaoFeminina from './components/PrevencaoF/PrevencaoFeminina'
import PrevencaoMasculina from './components/PrevencaoM/PrevencaoMasculina'

function App() {
  

  return (
    <main>
    <Header/>
    <ExameRotina/>
    <PrevencaoFeminina/>
    <PrevencaoMasculina/>
    <Alertas/>
    <Footer/>
    </main>
  )
}

export default App
