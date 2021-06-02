import logo from './logo.svg';
import Logo from './comp/Logo.jsx';
import Headertext from './comp/Headertext.jsx';
import Inconsection from './comp/Iconsection.jsx';
import './App.css';


function App() {
  return (
        <div> 
                <div className="Color-b"> 
                    <div className="Container">
                       <header className="Page-header">
                         <Logo/>
                         <Headertext/>
                       </header>
                    </div>
                 </div>
  
                 <div className="Container">
                    <Inconsection/>
                 </div>

        </div>     

  );
}

export default App;
