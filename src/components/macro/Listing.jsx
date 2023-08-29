import React from 'react';
import '../CSS/Listing.css'

const Listing = ({ listData }) => {
  const { name, address, phone, category, description, website } = listData;

  return (
    <div className="listing-card">
      <h2 className="name">{name}</h2>
      <div className="website-category">
        <p className="website">{website}</p>
        <p className="category">{category}</p>
      </div>
      <p className="description">{description}</p>
      <div className="address-phone">
        <p className="address">{address}</p>
        <p className="phone">{phone}</p>
      </div>
    </div>
  );
};

export default Listing;
