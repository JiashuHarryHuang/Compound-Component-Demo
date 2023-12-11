import React, { ReactNode } from 'react';

// Define the props interface for the Tab component
interface TabProps {
  label: string; // Label for the tab button
  children: ReactNode; // Content of the tab
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;