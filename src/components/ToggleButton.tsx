import { useToggle } from "./Toggle";

function ToggleButton() {
  const { on, toggle } = useToggle();
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
}

export default ToggleButton