import './styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AddEc from './screens/AddEc';
import InitialScreen from './screens/Initial';
import Estabelecimentos from './screens/Estabelecimentos';
import ComissoesPagas from './screens/ComissoesPagas';
import Estornos from './screens/Estornos';
import Executivos from './screens/Executivos';
import EditarCadastro from './screens/EditarCadastro';
import NaoPagas from './screens/NaoPagas';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen />} exact />
        <Route path="/cadastro" element={<AddEc />} exact />
        <Route path="/estabelecimentos" element={<Estabelecimentos />} exact />
        <Route path="/comissoes-pagas" element={<ComissoesPagas />} exact />
        <Route path="/estornos" element={<Estornos />} exact />
        <Route path="/executivos" element={<Executivos />} exact />
        <Route path="/estabelecimentos/editar/:id" element={<EditarCadastro />} exact />
        <Route path="/nao-pagas" element={<NaoPagas />} exact />
      </Routes>
    </Router>
  );
}

export default App;
