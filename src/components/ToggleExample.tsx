import React from 'react'
import Toggle from './Toggle'
import ToggleOn from './ToggleOn'
import ToggleOff from './ToggleOff'
import ToggleButton from './ToggleButton'

export default function ToggleExample() {
  return (
    <Toggle>
    <ToggleOn>The button is on</ToggleOn>
    <ToggleOff>The button is off</ToggleOff>
    <ToggleButton />
  </Toggle>
  )
}
