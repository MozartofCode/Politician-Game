// Import React and useState hook
import React, { useState } from 'react';
// Import Card component
import Card from './Card';

// Functional component representing the deck of cards
const Deck = ({ cards }) => {

  // Styles for the deck
  const deckStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '24px',
    marginTop: '50px'
  };

  // State for managing the current index of the deck
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the swipe left action
  const handleSwipeLeft = ({ name, party }) => {
    // Increment the current index
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // Check if the party is Democratic
    if (party === "Democratic") {
      alert("Correct Answer!");
    } else {
      // Split the name into first and last names
      const firstName = name.split(", ")[1];
      const lastName = name.split(", ")[0];
      alert("No! " + firstName + " " + lastName + " is part of the " + party + " party...");
    }
  };

  // Function to handle the swipe right action
  const handleSwipeRight = ({ name, party }) => {
    // Increment the current index
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // Check if the party is Republican
    if (party === "Republican") {
      alert("Correct Answer!");
    } else {
      // Split the name into first and last names
      const firstName = name.split(", ")[1];
      const lastName = name.split(", ")[0];
      alert("No! " + firstName + " " + lastName + " is part of the " + party + " party...");
    }
  };

  // Render the Deck component
  return (
    <div className="deck" style={deckStyle}>
      {currentIndex < cards.length && cards.length > 0 ? (
        // Render the Card component with the current card and swipe handlers
        <Card
          name={cards[currentIndex].name}
          party={cards[currentIndex].party}
          imageSrc={cards[currentIndex].imageSrc}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      ) : (
        // Display a message when there are no more cards
        <p>No more cards</p>
      )}
    </div>
  );
};

// Export the Deck component as the default export
export default Deck;
