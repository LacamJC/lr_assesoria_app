import Header from './components/layout/Header'
import Landing from './components/landing_page/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>  
      <Router>
          <Header/>
          <Routes>
              <Route exact path="/" element={<Landing/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App;
