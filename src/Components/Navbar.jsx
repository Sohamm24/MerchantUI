import React from 'react';

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">LOGO</div>
        <div className="search-bar">
          <input type="text"    placeholder='Tap To Search' />
        </div>
        <div className="account-button">Account</div>
      </header>
    </div>
  );
}
