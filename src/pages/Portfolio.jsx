import React, { useState } from "react";
import "./Portfolio.css";
import { Instagram, Linkedin, Github, Twitter, X, ChevronLeft, ChevronRight } from "lucide-react";

// --- Profil Avatar ---
import avatar from "../pages/Portfolio_photos/avatar.png";

// --- Portfolio App ---
import portfolioImg from "../pages/Portfolio_photos/avatar.png";

// --- Mini CRM Dashboard ---
import crm1 from "../pages/Portfolio_photos/crm1.png";
import crm2 from "../pages/Portfolio_photos/crm2.png";

// --- Admin Dashboard ---
import admin1 from "../pages/Portfolio_photos/admin1.png";
import admin2 from "../pages/Portfolio_photos/admin2.png";
import admin3 from "../pages/Portfolio_photos/admin3.png";
import admin4 from "../pages/Portfolio_photos/admin4.png";
import admin5 from "../pages/Portfolio_photos/admin5.png";
import admin6 from "../pages/Portfolio_photos/admin6.png";
import admin7 from "../pages/Portfolio_photos/admin7.png";
import admin8 from "../pages/Portfolio_photos/admin8.png";
import admin9 from "../pages/Portfolio_photos/admin9.png";
import admin10 from "../pages/Portfolio_photos/admin10.png";
import admin11 from "../pages/Portfolio_photos/admin11.png";

// --- DiscoverEase ---
import discover1 from "../pages/Portfolio_photos/discoverease1.png";
import discover2 from "../pages/Portfolio_photos/discoverease2.png";
import discover3 from "../pages/Portfolio_photos/discoverease3.png";
import discover4 from "../pages/Portfolio_photos/discoverease4.png";

// --- Spotify API ---
import spotify1 from "../pages/Portfolio_photos/spotify-api1.png";
import spotify2 from "../pages/Portfolio_photos/spotify-api2.png";
import spotify3 from "../pages/Portfolio_photos/spotify-api3.png";
import spotify4 from "../pages/Portfolio_photos/spotify-api4.png";
import spotify5 from "../pages/Portfolio_photos/spotify-api5.png";

// --- Travel Agency ---
import travel1 from "../pages/Portfolio_photos/travel-agency1.png";
import travel2 from "../pages/Portfolio_photos/travel-agency2.png";

// --- TCP Server-Client ---
import tcp1 from "../pages/Portfolio_photos/tcp1.png";
import tcp2 from "../pages/Portfolio_photos/tcp2.png";

// --- Secure Dashboard ---
import secure1 from "../pages/Portfolio_photos/secure-dash1.png";
import secure2 from "../pages/Portfolio_photos/secure-dash2.png";
import secure3 from "../pages/Portfolio_photos/secure-dash3.png";

// --- Contacts App ---
import contacts1 from "../pages/Portfolio_photos/contacts1.png";
import contacts2 from "../pages/Portfolio_photos/contacts2.png";

// --- Diziler ---
const portfolioApp = [portfolioImg];
const crm = [crm1, crm2];
const admin = [admin1, admin2, admin3, admin4, admin5, admin6, admin7, admin8, admin9, admin10, admin11];
const discoverEase = [discover1, discover2, discover3, discover4];
const spotify = [spotify1, spotify2, spotify3, spotify4, spotify5];
const travelAgency = [travel1, travel2];
const tcp = [tcp1, tcp2];
const secureDashboard = [secure1, secure2, secure3];
const contacts = [contacts1, contacts2];

// --- Proje Listesi ---
const projects = [
  { name: "Mini CRM Dashboard", desc: "Sample CRM dashboard design.", imgs: crm, link: "https://github.com/dmbatmazz/mini-crm-dashboard" },
  { name: "Admin Dashboard", desc: "Dashboard for managing users, analytics and content.", imgs: admin, link: "https://github.com/dmbatmazz/admin-dashboard-app" },
  { name: "Portfolio App", desc: "This portfolio website itself.", imgs: portfolioApp, link: "https://github.com/dmbatmazz/My_Portfolio_App" },
  { name: "DiscoverEase", desc: "Mobile travel planning app with itinerary creation.", imgs: discoverEase, link: "https://github.com/dmbatmazz/DiscoverEase" },
  { name: "Spotify API", desc: "Spotify API integration to create playlists.", imgs: spotify, link: "https://github.com/dmbatmazz/spotify-api-app" },
  { name: "Travel Agency", desc: "Modern travel agency website design.", imgs: travelAgency, link: "https://github.com/dmbatmazz/travel-agency-web" },
  { name: "TCP Server-Client", desc: "Simple TCP server-client architecture.", imgs: tcp, link: "https://github.com/dmbatmazz/tcp-server-client" },
  { name: "Secure Dashboard", desc: "Secure dashboard with authentication.", imgs: secureDashboard, link: "https://github.com/dmbatmazz/Secure-Dashboard" },
  { name: "Contacts App", desc: "Contact management app built with React.", imgs: contacts, link: "https://github.com/dmbatmazz/contacts-app" },
];

// --- Sosyal Linkler ---
const socialLinks = [
  { name: "Instagram", icon: <Instagram size={18} />, url: "https://instagram.com/dmbatmazz" },
  { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://linkedin.com/in/defne-melis-batmaz" },
  { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/dmbatmazz" },
  { name: "X", icon: <Twitter size={18} />, url: "https://twitter.com/dmbatmazz" },
];

// --- Portfolio Component ---
export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);


const handleNext = () => {
  if (!selectedProject) return;
  // Son resimdeysek bir şey yapma
  if (currentImgIndex < selectedProject.imgs.length - 1) {
    setCurrentImgIndex((prev) => prev + 1);
  }
};

const handlePrev = () => {
  if (!selectedProject) return;
  // İlk resimdeysek bir şey yapma
  if (currentImgIndex > 0) {
    setCurrentImgIndex((prev) => prev - 1);
  }
};
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  return (
    <div className="portfolio-wrapper">
      {/* --- Profil Kartı --- */}
      <div className="profile-card">
        <div className="profile-avatar-wrapper">
          <img src={avatar} alt="Defne Melis Batmaz" className="profile-avatar" />
        </div>
        <h2 className="profile-name">Defne Melis Batmaz</h2>
        <p className="profile-email">defnemelis8@outlook.com</p>
        <p className="profile-location">Ankara, TR</p>
        <div className="profile-buttons">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="profile-btn">
              <span className="profile-icon">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      <h2 className="portfolio-title">My Projects</h2>

      <div className="projects-list">
        {visibleProjects.map((project, idx) => (
          <div key={idx} className="project-card" onClick={() => openProject(project)}>
            <img src={project.imgs[0]} alt={project.name} className="project-img" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                <Github size={16} /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-btn">
        <button onClick={() => setShowAll(!showAll)}>{showAll ? "View Less" : "View More"}</button>
      </div>

      {/* --- Modal Slider --- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            <h3>{selectedProject.name}</h3>

            <div className="modal-slider-wrapper">
  <button
    className="slider-btn prev"
    onClick={handlePrev}
    disabled={currentImgIndex === 0}
  >
    <ChevronLeft size={24} />
  </button>
  <div className="modal-slider">
    <img
      src={selectedProject.imgs[currentImgIndex]}
      alt={`${selectedProject.name}-${currentImgIndex}`}
      className="slider-img"
    />
  </div>
  <button
    className="slider-btn next"
    onClick={handleNext}
    disabled={currentImgIndex === selectedProject.imgs.length - 1}
  >
    <ChevronRight size={24} />
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  );
}