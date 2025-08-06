// No more useEffect or useState needed for particles!
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Import your components
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

// Import your assets
import profilePic from './assets/images/profile.png';
import project1Pic from './assets/images/project1.png';
import project2Pic from './assets/images/project2.png';

function App() {
  
  // This is the new, simplified way to load the engine
  const handleInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: { color: { value: "#1a202c" } },
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 0.1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 120 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const portfolioData = {
    name: "Devamruth A",
    navLinks: [
      { title: 'About', href: '#about' },
      { title: 'Skills', href: '#skills' },
      { title: 'Projects', href: '#projects' },
      { title: 'Contact', href: '#contact' },
    ],
    hero: {
      title: "Hi, I'm Devamruth",
      subtitle: "A Creative Developer from Pullur, Kerala",
    },
    about: {
      image: profilePic,
      description: "I'm a passionate developer based in Kanhangad, Kerala, with a love for creating beautiful, animated, and functional web applications. My journey in tech is driven by curiosity and a desire to solve real-world problems with elegant code."
    },
    skills: ['React', 'JavaScript', 'Node.js', 'postgreSQL', 'python', 'Figma', 'Vite', 'MongoDB'],
    projects: [
      {
        title: 'Project One',
        description: 'Built a simple course selling application.',
        imgSrc: project1Pic,
        tech: ['React', 'Vite'],
        liveUrl: '#',
        githubUrl: '#',
      },
      {
        title: 'Project Two',
        description: 'Built a plant disease prediction app which utilizes ML to find diseases in plants.',
        imgSrc: project2Pic,
        tech: ['Node.js', 'Express'],
        liveUrl: '#',
        githubUrl: '#',
      },
    ]
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={handleInit} // The init prop is the new way to load presets
        options={particlesOptions}
        className="particles-background"
      />
      <NavBar navLinks={portfolioData.navLinks} name={portfolioData.name}/>
      <main>
        <HeroSection heroData={portfolioData.hero} />
        <AboutSection aboutData={portfolioData.about} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection />
      </main>
      <Footer name={portfolioData.name} />
    </>
  );
}

export default App;