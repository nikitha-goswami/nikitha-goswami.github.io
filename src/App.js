
import './App.css';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import GithubCal from './Components/GithubCal';
import Simple from './Components/Navbar';
import Profile from './Components/Profile';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import ProjectTimeline from './Components/ProjectTimeline';

function App() {
  return (
    <>
      <Simple />
      <Profile />
      <Skills />
      <ProjectTimeline />
      <GithubCal />
      <Resume />
      <Contactus />
      <Footer />

    </>
  );
}

export default App;
