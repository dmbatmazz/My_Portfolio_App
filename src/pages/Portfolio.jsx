import React, { useState } from "react";
import "./Portfolio.css";
import avatar from "../assets/avatar.png"; 
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react';


const projects = [
  { name: "TCP Server-Client", desc: "View More" },
  { name: "Secure Dashboard", desc: "View More" },
  { name: "Mini CRM Dashboard", desc: "View More" },
  { name: "Contacts App", desc: "View More" },
  { name: "Travel Agency", desc: "View More" },
  { name: "Admin Dashboard", desc: "View More" },
  { name: "Portfolio App", desc: "View More" },
  { name: "Spotify API", desc: "View More" },
  { name: "DiscoverEase", desc: "View More" },
];

// Image lists (string paths). We’ll require() them right before rendering.
const travelImages = [
  "./Portfolio_photos/travel-agency1.png",
  "./Portfolio_photos/travel-agency2.png",
];

const adminImages = [
  "./Portfolio_photos/admin1.png",
  "./Portfolio_photos/admin2.png",
  "./Portfolio_photos/admin3.png",
  "./Portfolio_photos/admin4.png",
  "./Portfolio_photos/admin5.png",
  "./Portfolio_photos/admin6.png",
  "./Portfolio_photos/admin7.png",
  "./Portfolio_photos/admin8.png",
  "./Portfolio_photos/admin9.png",
  "./Portfolio_photos/admin10.png",
  "./Portfolio_photos/admin11.png",
];

const spotifyImages = [
  "./Portfolio_photos/spotify-api1.png",
  "./Portfolio_photos/spotify-api2.png",
  "./Portfolio_photos/spotify-api3.png",
  "./Portfolio_photos/spotify-api4.png",
  "./Portfolio_photos/spotify-api5.png",
];

const crmImages = [
  "./Portfolio_photos/crm1.png",
  "./Portfolio_photos/crm2.png",
];

const secureDashImages = [
  "./Portfolio_photos/secure-dash1.png",
  "./Portfolio_photos/secure-dash2.png",
  "./Portfolio_photos/secure-dash3.png",
];

const discoverEaseImages = [
  "./Portfolio_photos/discoverease1.png",
  "./Portfolio_photos/discoverease2.png",
  "./Portfolio_photos/discoverease3.png",
  "./Portfolio_photos/discoverease4.png",
];

const tcpServerClientImages = [
  "./Portfolio_photos/tcp1.png",
  "./Portfolio_photos/tcp2.png",
];
const contactsAppImages = [
  "./Portfolio_photos/contacts1.png",
  "./Portfolio_photos/contacts2.png",
];

// Helpers
const getImagesByProject = (name) => {
  switch (name) {
    case "Travel Agency":
      return travelImages;
    case "Admin Dashboard":
      return adminImages;
    case "Spotify API":
      return spotifyImages;
    case "Mini CRM Dashboard":
      return crmImages;
    case "Secure Dashboard":
      return secureDashImages;
    case "DiscoverEase":
      return discoverEaseImages;
    case "TCP Server-Client":
      return tcpServerClientImages;
    case "Contacts App":
      return contactsAppImages;
    default:
      return [];
  }
};

const getDescriptionByProject = (name) => {
  switch (name) {
    case "Travel Agency":
      return "This project showcases the design of a modern travel agency website with a focus on clear information architecture and engaging visuals.";
    case "Admin Dashboard":
      return "This project demonstrates an admin dashboard interface designed for managing users, analytics, and content with an emphasis on usability and clarity.";
    case "Spotify API":
      return "This project utilizes the Spotify API to create playlists and add tracks directly to your Spotify account through an external web application.";
    case "Mini CRM Dashboard":
      return "This project is a sample design website for a Customer Relationship Management (CRM) application, focusing on a clean, intuitive, and user-friendly interface.";
    case "Secure Dashboard":
      return "This project provides an example of a secure dashboard that restricts unauthorized access, implementing authentication measures before allowing entry.";
    case "DiscoverEase":
      return "DiscoverEase is a mobile app for travel planning application that helps users find and organize trips with ease. It features destination discovery, itinerary creation, and booking management.";
    case "TCP Server-Client":
      return "This project implements a simple TCP server-client architecture using C++ and QT5. The server listens for incoming connections, while the client can send messages to the server and receive responses.";
    case "Contacts App":
      return "This project is a contact management application built with React. It allows users to add, view, and manage their contacts in a user-friendly interface.";
    default:
      return "Project details will be available here soon.";
  }
};

const getLinkByProject = (name) => {
  switch (name) {
    case "Travel Agency":
      return "https://github.com/dmbatmazz/travel-agency-web";
    case "Admin Dashboard":
      return "https://github.com/dmbatmazz/admin-dashboard-app";
    case "Spotify API":
      return "https://github.com/dmbatmazz/spotify-api-app";
    case "Mini CRM Dashboard":
      return "https://github.com/dmbatmazz/mini-crm-dashboard";
    case "Secure Dashboard":
      return "https://github.com/dmbatmazz/Secure-Dashboard";
    case "DiscoverEase":
      return "https://github.com/dmbatmazz/DiscoverEase";
      case "Contacts App":
      return "https://github.com/dmbatmazz/contacts-app";
    default:
      return "#";
  }
};

const getLinkLabelByProject = (name) => {
  switch (name) {
    case "Travel Agency":
      return "Travel Agency Codes";
    case "Admin Dashboard":
      return "Admin Dashboard Codes";
    case "Spotify API":
      return "Spotify API Codes";
    case "Mini CRM Dashboard":
      return "Mini CRM Dashboard";
    case "Secure Dashboard":
      return "Secure Dashboard";
    case "DiscoverEase":
      return "DiscoverEase Codes";
    case "Contacts App":
      return "Contacts App Codes";
    default:
      return "Project codes will be available here soon.";
  }
};

const socialLinks = [
    { name: 'Instagram', icon: <Instagram />, url: 'https://instagram.com/dmbatmazz' },
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://linkedin.com/in/dmbatmazz' },
    { name: 'GitHub', icon: <Github />, url: 'https://github.com/dmbatmazz' },
    { name: 'X', icon: <Twitter />, url: 'https://twitter.com/dmbatmazz' },
  ];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const maxVisible = 1;

  const activeName = activeIndex !== null ? projects[activeIndex].name : null;
  const imageList = activeName ? getImagesByProject(activeName) : [];
  const total = imageList.length;

  const next = () => {
    if (slideIndex + maxVisible < total) setSlideIndex(slideIndex + maxVisible);
  };

  const prev = () => {
    if (slideIndex - maxVisible >= 0) setSlideIndex(slideIndex - maxVisible);
  };

  return (
    <div className="portfolio-wrapper">

      {/* --- PROFİL KARTI --- */}
      <div className="profile-card">
        <img src={avatar} alt="Defne Melis Batmaz" className="profile-avatar" />
        <h2 className="profile-name">Defne Melis Batmaz</h2>
        <p className="profile-email">defnemelis8@outlook.com</p>
        <p className="profile-location">Ankara, TR</p>

        <div className="profile-buttons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="profile-icon">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      <h2 className="portfolio-title">My Projects</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="portfolio-box"
            onClick={() => {
              setActiveIndex(index);
              setSlideIndex(0);
            }}
          >
            <span className="portfolio-name">{project.name}</span>
            <div className="portfolio-hover">
              <p>{project.desc}</p>
              <span>View Project</span>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="portfolio-overlay"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="portfolio-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeName}</h3>

            {/* If project has images, show slider; else show placeholder text */}
            {imageList.length > 0 ? (
              <div className="project-content">
                <div className="project-images-slider">
                  {imageList
                    .slice(slideIndex, slideIndex + maxVisible)
                    .map((img, i) => (
                      <img
                        key={`${img}-${i}`}
                        src={require(`${img}`)}
                        alt={`${activeName} ${slideIndex + i + 1}`}
                      />
                    ))}

                  <button
                    className="slider-btn prev"
                    onClick={prev}
                    disabled={slideIndex === 0}
                    aria-label="Previous image"
                  >
                    ◀
                  </button>
                  <button
                    className="slider-btn next"
                    onClick={next}
                    disabled={slideIndex + maxVisible >= total}
                    aria-label="Next image"
                  >
                    ▶
                  </button>
                </div>

                <p>{getDescriptionByProject(activeName)}</p>

                <a
                  href={getLinkByProject(activeName)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getLinkLabelByProject(activeName)}
                </a>
              </div>
            ) : (
              <p>Project details will be available here soon.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
