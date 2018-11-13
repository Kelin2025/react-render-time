import React from "react"

export default function useRenderTime(name) {
  console.time(name + " rendered")

  React.useEffect(() => {
    console.timeEnd(name + " rendered")
  })
}
