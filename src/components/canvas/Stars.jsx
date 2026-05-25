"use client"

import { useState, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.2 })) // Increased star density for rich volumetric look

  useFrame((state, delta) => {
    // Slow continuous background spin
    ref.current.rotation.x -= delta / 25
    ref.current.rotation.y -= delta / 30

    // Dynamic 3D parallax tilt responsive to mouse cursor location
    const targetX = state.pointer.y * 0.2
    const targetY = state.pointer.x * 0.2

    // Smooth spring-like lerp to avoid abrupt jumps
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#234C6A"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas