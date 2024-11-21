import React from 'react';

const searchResultsContext = React.createContext({
  searchResults: [],
  handleSetBooks: () => {},
});

export { searchResultsContext };
