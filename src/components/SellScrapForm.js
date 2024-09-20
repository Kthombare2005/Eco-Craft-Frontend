import React, { useState } from "react";

const SellScrapForm = ({ onSubmit }) => {
  const [scrapType, setScrapType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the logic to send this data to the backend
    console.log("Scrap Data:", { scrapType, quantity, condition, location });
    onSubmit(); // Close modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Scrap Type</label>
        <input
          type="text"
          className="form-control"
          value={scrapType}
          onChange={(e) => setScrapType(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Quantity (in kg)</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Condition</label>
        <input
          type="text"
          className="form-control"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Scrap
      </button>
    </form>
  );
};

export default SellScrapForm;
