import React from 'react'
const InterestsContext = React.createContext();

export default InterestsContext;

export const InterestsContextProvider = props => {
    const [interests, setInterests] = React.useState([]);
  
    const value = {
      interests,
      setInterests
    };
  
    return (
      <InterestsContext.Provider value={value}>
        {props.children}
      </InterestsContext.Provider>
    );
  };