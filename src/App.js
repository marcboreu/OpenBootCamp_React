import logo from './logo.svg';
import './App.css';
import ContactMain from './components/containers/contact_main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactMain></ContactMain>
      </header>
    </div>
  );
}

export default App;
