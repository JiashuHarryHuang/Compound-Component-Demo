import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

const TabsExample: React.FC = () => {
  return (
    <Tabs>
      {/* Each Tab component represents a tab with a label and content */}
      <Tab label="Tab 1">
        <p>Content for Tab 1</p>
      </Tab>
      <Tab label="Tab 2">
        <p>Content for Tab 2</p>
      </Tab>
      <Tab label="Tab 3">
        <p>Content for Tab 3</p>
      </Tab>
    </Tabs>
  );
};

export default TabsExample;
