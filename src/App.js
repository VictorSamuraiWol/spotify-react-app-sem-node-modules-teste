import './Reset.css';
import './Vars.css';
import './App.css';
import HeaderMain from './componentes/HeaderMain/HeaderMain';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <HeaderMain />
      <Footer/>
    </div>
  );
}

export default App;
