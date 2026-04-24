"use client"

import { useEffect, useState } from "react"

export type TerminalBlock = {
  prompt: string
  command: string
  outputs: string[]
}

const CHAR_SPEED = 45
const OUTPUT_PAUSE_TICKS = 6
const BLOCK_PAUSE_TICKS = 4

export function TypingTerminal({
  blocks,
  className = "",
}: {
  blocks: readonly TerminalBlock[]
  className?: string
}) {
  const totalTicksPerBlock = blocks.map(
    (b) => b.command.length + OUTPUT_PAUSE_TICKS + BLOCK_PAUSE_TICKS,
  )
  const totalTicks = totalTicksPerBlock.reduce((a, b) => a + b, 0)

  const [tick, setTick] = useState(0)

  useEffect(() => {
    setTick(0)
  }, [blocks])

  useEffect(() => {
    if (tick >= totalTicks) return
    const id = setTimeout(() => setTick((n) => n + 1), CHAR_SPEED)
    return () => clearTimeout(id)
  }, [tick, totalTicks])

  let consumed = 0
  const finished = tick >= totalTicks

  return (
    <div className={`font-mono text-sm text-left space-y-2 ${className}`}>
      {blocks.map((b, i) => {
        const budget = tick - consumed
        const cmdTyped = Math.min(Math.max(budget, 0), b.command.length)
        const outputVisible = budget >= b.command.length + OUTPUT_PAUSE_TICKS
        const isTypingHere =
          budget >= 0 &&
          !outputVisible &&
          !(finished && i < blocks.length - 1)
        consumed += b.command.length + OUTPUT_PAUSE_TICKS + BLOCK_PAUSE_TICKS

        if (budget < 0) return null

        return (
          <div key={i}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-primary">{b.prompt}</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">
                {b.command.slice(0, cmdTyped)}
                {isTypingHere && (
                  <span className="inline-block w-[0.55rem] h-[1em] bg-primary align-[-0.15em] ml-1 animate-pulse" />
                )}
              </span>
            </div>
            {outputVisible &&
              b.outputs.map((o, j) => (
                <div key={j} className="pl-4 text-muted-foreground">
                  <span className="text-primary mr-2">{">"}</span>
                  {o}
                </div>
              ))}
          </div>
        )
      })}
      {finished && (
        <div className="flex items-center gap-2">
          <span className="text-primary">~/portfolio</span>
          <span className="text-muted-foreground">$</span>
          <span className="inline-block w-[0.55rem] h-[1em] bg-primary align-[-0.15em] animate-pulse" />
        </div>
      )}
    </div>
  )
}
