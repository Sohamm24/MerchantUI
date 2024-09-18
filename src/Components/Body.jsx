import React from "react";
import image1 from "../assets/image1.png";
import Community from "../assets/Community.png";

export default function Body() {
  return (
    <div>
      <div className="img_container">
        <img src={image1} className="background_image" alt="Background" />
        <div className="background_overlay"></div>
        <div className="text_overlay">
          <div className="banner">
            <div className="banner-text">
              <h1>
                Stay Connected to the Heart of India, No Matter Where You Are
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                quis veritatis ab, quisquam deserunt recusandae pariatur animi
                cum eos qui?
              </p>
            </div>
          </div>
          <div className="community">
            <img className="Community_image" src={Community} alt="Community" />
            <a className="community_link" href="#">
              Your Community
            </a>
          </div>
        </div>
      </div>

      <div className="button_container">
        <div className="button">
          <a href="#online-services">Online Services</a>
        </div>
        <div className="button">
          <a href="#trending-sensations">Trending Sensations Of India</a>
        </div>
        <div className="button">
          <a href="#about-us">About Us</a>
        </div>
      </div>

      <div className="section_container">
        <div className="section">
          <h2>Trending</h2>
          <div className="section_content">
            <div className="section_item">
              <img src="" alt="Trending" />
              <div className="section_text">
                <p>Discover the latest trends and sensations in India.</p>
              </div>
            </div>
            <div className="section_item">
              <img src="" alt="Trending" />
              <div className="section_text">
                <p>Discover the latest trends and sensations in India.</p>
              </div>
            </div>
            <div className="section_item">
              <img src="" alt="Trending" />
              <div className="section_text">
                <p>Discover the latest trends and sensations in India.</p>
              </div>
            </div>
            <div className="section_item">
              <img src="" alt="Trending" />
              <div className="section_text">
                <p>Discover the latest trends and sensations in India.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Recommendation</h2>
          <div className="section_content">
            <div className="section_item">
              <img src="" alt="Recommendation" />
              <div className="section_text">
                <p>Get personalized recommendations based on your interests.</p>
              </div>
            </div>
            <div className="section_item">
              <img src="" alt="Recommendation" />
              <div className="section_text">
                <p>Get personalized recommendations based on your interests.</p>
              </div>
            </div>
            <div className="section_item">
              <img src="" alt="Recommendation" />
              <div className="section_text">
                <p>Get personalized recommendations based on your interests.</p>
              </div>
            </div>
            <div className="section_item">
              <img src="" alt="Recommendation" />
              <div className="section_text">
                <p>Get personalized recommendations based on your interests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
