// App.js// Import necessary components and modules
import Deck from './Deck';
import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyles';

// Functional component for the main App
const App = () => {
  // Styles for header and page
  const headerStyle = {
    backgroundColor: 'pink',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '24px',
    marginTop: '50px',
  };

  const pageStyle = {
    backgroundColor: 'pink',
  };

  // State for storing cards and handling errors
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(''); // Initialize the error state

  // useEffect to fetch members when the component mounts
  useEffect(() => {
    fetchMembers();
  }, []);

  // Async function to fetch members from the backend API
  const fetchMembers = async () => {
    try {
      // Make a GET request to the backend API
      const response = await fetch('http://localhost:5000/candidates');

      // Check if the request was successful (status code 200)
      if (response.ok) {
        // Parse the JSON response
        const result = await response.json();

        // Map the fetched members to cards
        const newCards = result.map((member) => ({
          id: member.id,
          name: member.name, 
          party: member.party,
          imageSrc: member.imageUrl, 
        }));

        // Update the state with the new cards and clear any previous errors
        setCards(newCards);
        setError('');
      } else {
        // If the request was not successful, parse the JSON error response
        const result = await response.json();
        // Clear the cards and set the error
        setCards([]);
        setError(result.error);
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error fetching members:', error);
      // Clear the cards and set a generic error message
      setCards([]);
      setError('Error fetching members');
    }
  };

  // Render the App component
  return (
    <div className="app" style={pageStyle}>
      <h1 style={headerStyle}>Do You Know Your Politician?</h1>
      {/* Render the Deck component with the fetched cards */}
      <Deck cards={cards} />
      {/* Apply global styles */}
      <GlobalStyle />
    </div>
  );
};

// Export the App component as the default export
export default App;
