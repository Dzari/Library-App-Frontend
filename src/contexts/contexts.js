import React from 'react';

const screenWidthContext = React.createContext({
  screenWidth: 0,
  handleScreenWidthChange: () => {},
});

export { screenWidthContext };
