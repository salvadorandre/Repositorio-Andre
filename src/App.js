 
import './App.css';
import Encabezado from './Componentes/Encabezado';
import InformacionUno from './Componentes/InformacionUno';
import InformacionDos from './Componentes/InformacionDos';
import Pie from './Componentes/Pie';
function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <InformacionUno></InformacionUno>
      <InformacionDos></InformacionDos>
      <Pie></Pie>
    </div>
  );
}

export default App;
