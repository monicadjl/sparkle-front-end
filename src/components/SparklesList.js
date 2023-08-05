import React, { useState, useEffect } from 'react';
import SparklesListModal from './SparkleListModal'; // Import the SparklesListModal component
import { db, auth } from '../index'

// const SparklesList = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedSparkle, setSelectedSparkle] = useState(null); // Track the selected sparkle
//   const [hoveredSparkle, setHoveredSparkle] = useState(null); // Track the hovered sparkle

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleSparkleClick = (sparkle) => {
//     setSelectedSparkle(sparkle); // Set the selected sparkle when clicked
//     handleOpenModal();
//   };

//   return (
//     <div>
//       <h2>Your Logged Sparkles</h2>

//       {modalOpen && (
//         <>
//           <ul>
//             {sparklesData.map((sparkle) => (
//               <li
//                 key={sparkle.id}
//                 onClick={() => handleSparkleClick(sparkle)}
//                 onMouseEnter={() => setHoveredSparkle(sparkle)} // Set the hovered sparkle
//                 onMouseLeave={() => setHoveredSparkle(null)}
//                 style={{
//                   color: hoveredSparkle && hoveredSparkle.id === sparkle.id ? 'pink' : 'black', // Use hoveredSparkle state
//                   cursor: 'pointer',
//                 }}
//               >
//                 {sparkle.content}
//               </li>
//             ))}
//           </ul>
//           {selectedSparkle && (
//             <SparklesListModal sparkle={selectedSparkle} onClose={handleCloseModal} />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default SparklesList;

const SparklesList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSparkle, setSelectedSparkle] = useState(null);
  const [hoveredSparkle, setHoveredSparkle] = useState(null);
  const [sparklesData, setSparklesData] = useState([]); // State to hold the sparkles data

  useEffect(() => {

    const fetchSparklesData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error('User not authenticated.');
          return;
        }
  
        const sparklesRef = db.collection('sparkles');
  
        // Add query condition to fetch sparkles for the current user
        const snapshot = await sparklesRef
          .where('userId', '==', currentUser.uid) // Assuming the user ID is stored as 'userId'
          .get();
  
        // Map the snapshot data to an array of sparkles
        const sparklesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        setSparklesData(sparklesArray);
      } catch (error) {
        console.error('Error fetching sparkles data:', error);
      }
    };
  
    fetchSparklesData();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSparkleClick = (sparkle) => {
    setSelectedSparkle(sparkle);
    handleOpenModal();
  };

  return (
    <div>
      <h2>Your Logged Sparkles</h2>

      {modalOpen && (
        <>
          <ul>
            {sparklesData.map((sparkle) => (
              <li
                key={sparkle.id}
                onClick={() => handleSparkleClick(sparkle)}
                onMouseEnter={() => setHoveredSparkle(sparkle)}
                onMouseLeave={() => setHoveredSparkle(null)}
                style={{
                  color: hoveredSparkle && hoveredSparkle.id === sparkle.id ? 'pink' : 'black',
                  cursor: 'pointer',
                }}
              >
                {sparkle.content}
              </li>
            ))}
          </ul>
          {selectedSparkle && (
            <SparklesListModal sparkle={selectedSparkle} onClose={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
};

export default SparklesList;