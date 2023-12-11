import React, { ReactNode } from 'react'
import { useToggle } from './Toggle';

// Child components
function ToggleOn({ children }: { children: ReactNode }) {
  const { on } = useToggle();
  return on ? <>{children}</> : null;
}

export default ToggleOn