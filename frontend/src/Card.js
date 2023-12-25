// Import React module
import React from 'react';

// Functional component representing a Card
const Card = ({ name, party, imageSrc, onSwipeLeft, onSwipeRight }) => {

  // Styles for the buttons
  const buttonStyle = {
    backgroundColor: '#1899D6',
    borderRadius: '16px',
    borderWidth: '0 0 4px',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontFamily: 'din-round, sans-serif',
    fontSize: '15px',
    fontWeight: '700',
    letterSpacing: '.8px',
    lineHeight: '20px',
    margin: '0',
    outline: 'none',
    overflow: 'visible',
    padding: '13px 16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    touchAction: 'manipulation',
    transform: 'translateZ(0)',
    transition: 'filter .2s',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    width: '200px',
    position: 'relative', // Needed for pseudo-element emulation
    marginLeft: '60px',
    marginRight: '60px',
    border: '10px solid white',
  };

  const buttonStyle2 = {
    backgroundColor: 'red',
    borderRadius: '16px',
    borderWidth: '0 0 4px',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    cursor: 'pointer',
    fontFamily: 'din-round, sans-serif',
    fontSize: '15px',
    fontWeight: '700',
    letterSpacing: '.8px',
    lineHeight: '20px',
    margin: '0',
    outline: 'none',
    overflow: 'visible',
    padding: '13px 16px',
    textAlign: 'center',
    textTransform: 'uppercase',
    touchAction: 'manipulation',
    transform: 'translateZ(0)',
    transition: 'filter .2s',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    width: '200px',
    position: 'relative', // Needed for pseudo-element emulation
    marginLeft: '60px',
    marginRight: '60px',
    border: '10px solid white',
  };

  // Styles for the header container
  const headerContainerStyle = {
    backgroundColor: 'pink',
    padding: '20px', // Adjust the padding as needed
    border: '10px solid white',
  };

  // Function to handle the swipe left action
  const handleSwipeLeft = () => {
    // Check if name and party are defined before calling onSwipeLeft
    if (name && party) {
      onSwipeLeft({ name, party });
    } else {
      console.error("Name or party is undefined");
    }
  };

  // Function to handle the swipe right action
  const handleSwipeRight = () => {
    // Check if name and party are defined before calling onSwipeRight
    if (name && party) {
      onSwipeRight({ name, party });
    } else {
      console.error("Name or party is undefined");
    }
  };

  // Render the Card component
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" style={headerContainerStyle} />
      <div className="buttons">
        {/* Button for swiping left */}
        <button className="swipe-left" style={buttonStyle} onClick={() => handleSwipeLeft(name, party)}> Democrat </button>
        {/* Button for swiping right */}
        <button className="swipe-right" style={buttonStyle2} onClick={() => handleSwipeRight(name, party)}> Republican </button>
      </div>
    </div>
  );
};

// Export the Card component as the default export
export default Card;
