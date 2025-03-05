
import Landing from './components/landing_page/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventoDetalhe from './components/landing_page/EventoDetalhe';
import ServicoDetalhe from "./components/landing_page/ServicoDetalhe"
import Hero from './components/landing_page/Hero';
import Servicos from './components/landing_page/Servicos';
import Eventos from './components/landing_page/Eventos';
import Contato from './components/landing_page/Contato';
import Instagram from './components/landing_page/Instagram';
import Layout from './components/layout/Layout';
function App() {
  return (
    <>


      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Hero />} />

            <Route path="/contato" element={<Instagram />} />

            <Route path="/agendar" element={<Contato />} />

            
            
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servico/:id" element={<ServicoDetalhe />} />

            <Route path="/evento" element={<Eventos />} />
            <Route path="/evento/:id" element={<EventoDetalhe />} />

          </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App;
