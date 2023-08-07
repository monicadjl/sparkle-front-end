import React, { useState } from 'react';
import SparklesList from './SparklesList';
import SingleSparkle from './SingleSparkle';

const SparklesListModal = ({ onClose }) => {
  const [selectedSparkle, setSelectedSparkle] = useState(null);

  const handleSelectSparkle = (sparkle) => {
    setSelectedSparkle(sparkle);
  };

  const handleBackToSparklesList = () => {
    setSelectedSparkle(null);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {selectedSparkle ? (
          <SingleSparkle sparkle={selectedSparkle} onBack={handleBackToSparklesList} />
        ) : (
          <>
            <SparklesList onSelectSparkle={handleSelectSparkle} />
            <button onClick={onClose}>Exit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SparklesListModal;
