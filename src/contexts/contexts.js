import React from 'react';

const SearchResultsContext = React.createContext({
  searchResults: [],
  handleSetBooks: () => {},
});

export { SearchResultsContext };
