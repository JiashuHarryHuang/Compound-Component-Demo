import { ReactNode, createContext, useContext, useState } from "react";

// Create a context with a default value
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Define the context type
interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

// Create a custom hook to access the context
export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('Toggle compound components must be rendered within the Toggle component');
  }
  return context;
}

// Compound component
function Toggle({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false);

  // Toggle function to update the state
  const toggle = () => {
    setOn((prevState) => !prevState);
  };

  // Provide the context value to the children components
  const contextValue: ToggleContextType = {
    on,
    toggle,
  };

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
}

export default Toggle