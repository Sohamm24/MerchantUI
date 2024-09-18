import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Group36 from "../assets/Group36.png";
import IndiaPost from "../assets/IndiaPost.png";
import './Body.css';

export default function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSellProducts = () => {
    closeModal(); // Close the modal
    navigate('/sell-products'); // Navigate to SellProducts page
  };

  const handleOfferService = () => {
    closeModal(); // Close the modal
    navigate('/offer-service'); // Navigate to OfferService page
  };

  return (
    <div>
      <div className="img_container">
        <div className="img_left">
          <img src={Group36} alt="Image" />
        </div>
        <div className="text_right">
          <h2>Expand your reach by selling products and services to NRIs through our platform, designed to enhance visibility and drive growth</h2>
          <div className="button_container">
            <button className="left_button" onClick={openModal}>Start</button>
            <button className="right_button">Guidance</button>
          </div>
        </div>
      </div>

      <div className="status_container">
        <div className="status_heading">
          <h2>Check and Track status of your Products and Services</h2>
        </div>
        <div className="status_buttons">
          <button>Analyse Buyers</button>
          <button>Offer Discount</button>
          <button>Messages</button>
        </div>
      </div>

      <div className="info_section">
        <div className="info_image">
          <img src={IndiaPost} alt="Image" />
        </div>
        <div className="info_text">
          <p>
          Inventory shows what merchants or service providers have listed. Use "Promotion" to boost visibility, and "Charges" for the current subscription plans of portal
          </p>
        </div>
        <div className="info_buttons">
          <button className="vertical_button">Inventory</button>
          <button className="vertical_button">Promotion Help</button>
          <button className="vertical_button">Charges</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={e => e.stopPropagation()}>
            <button className="close_button" onClick={closeModal}>X</button>
            <h2>Proceed ahead</h2>
            <button className="m1" onClick={handleSellProducts}>Sell products</button>
            <button className="m2" onClick={handleOfferService}>Offer Service</button>
          </div>
        </div>
      )}
    </div>
  );
}
