import React, { useState, useEffect } from 'react';
import { auth, db } from '../index';
import { collection, query, where, getDocs } from 'firebase/firestore';

const SparklesList = ({onSelectSparkle}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSparkle, setSelectedSparkle] = useState(null);
  const [hoveredSparkle, setHoveredSparkle] = useState(null);
  const [sparklesData, setSparklesData] = useState([]);

  useEffect(() => {
    const fetchSparklesData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          console.error('User not authenticated.');
          return;
        }

        // Create a CollectionReference to the user's 'sparkles' collection
        const sparklesCollectionRef = collection(db, 'users', currentUser.uid, 'sparkles');

        // Get the snapshot of the matching documents
        const snapshot = await getDocs(sparklesCollectionRef);

        // Map the snapshot data to an array of sparkles
        const sparklesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(sparklesArray);

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
    <ul>
      {sparklesData.map((sparkle) => (
        <li
          key={sparkle.id}
          onClick={() => onSelectSparkle(sparkle)} // Pass the selected sparkle to the parent component
          onMouseEnter={() => setHoveredSparkle(sparkle)}
          onMouseLeave={() => setHoveredSparkle(null)}
          style={{
            color: hoveredSparkle && hoveredSparkle.id === sparkle.id ? 'pink' : 'black',
            cursor: 'pointer',
          }}
        >
          {sparkle.title}
        </li>
      ))}
    </ul>
  );
};

export default SparklesList;
