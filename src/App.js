import logo from './logo.svg';
import './App.css';
import GeneralInfo from './components/generalinfo/GeneralInfo';
import Contacts from './components/contacts/Contacts';
import ResumeContainer from './components/detail_resume_info/ResumeContainer';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <Contacts />
      <ResumeContainer />
    </div>
  );
}

export default App;
