import NavigationBar from './components/NavBar/NavBar';
import PersonalInfo from './components/Personal_Info/PersonalInfo.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="content">
        <PersonalInfo />
        <AboutMe />
      </div>
      
    </div>
  );
}

export default App;