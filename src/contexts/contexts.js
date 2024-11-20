import React from 'react';

const screenWidthContext = React.createContext({
  screenWidth: 0,
});

const searchResultsContext = React.createContext({
  searchResults: [],
  handleSetBooks: () => {},
});

export { screenWidthContext, searchResultsContext };
