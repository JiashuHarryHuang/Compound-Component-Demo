import { ReactNode } from "react";
import { useToggle } from "./Toggle";

function ToggleOff({ children }: { children: ReactNode }) {
  const { on } = useToggle();
  return on ? null : <>{children}</>;
}

export default ToggleOff;