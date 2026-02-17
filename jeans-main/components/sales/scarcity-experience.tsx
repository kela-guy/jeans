"use client"

import { ScarcityOverlay } from "./scarcity-overlay"
import {
  ScarcityReturnState,
  useScarcityReturned,
} from "./scarcity-return-state"

export function ScarcityExperience() {
  const { returned, setReturned } = useScarcityReturned()

  return (
    <>
      <ScarcityOverlay onReturn={() => setReturned(true)} returned={returned} />
      <ScarcityReturnState active={returned} />
    </>
  )
}
