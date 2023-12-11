import React, { useState, ReactNode } from 'react';

// Define the props interface for the Tabs component
interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  // State to track the index of the active tab
  const [activeTab, setActiveTab] = useState<number>(0);

  // Function to handle tab clicks and update the active tab
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Tab buttons section */}
      <div>
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {/* Display the label of each tab */}
            {(child as React.ReactElement<{ label: string }>).props.label}
          </button>
        ))}
      </div>
      {/* Content section for active tab */}
      <div>
        {React.Children.map(children, (child, index) => (
          <div style={{ display: activeTab === index ? 'block' : 'none' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;