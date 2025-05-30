import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles({ count = 5000 }) {
    const mesh = useRef()
    const [positions] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }
        
        return [positions]
    }, [count])

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.05
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02
        }
    })

    return (
        <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#6366f1"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    )
}

function FloatingShape({ position, scale, color }) {
    const mesh = useRef()

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
            mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
            mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.5
        }
    })

    return (
        <mesh ref={mesh} position={position} scale={scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshBasicMaterial 
                color={color} 
                transparent 
                opacity={0.1}
                wireframe
            />
        </mesh>
    )
}

export const Background3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -2,
            pointerEvents: 'none'
        }}>
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                style={{ background: 'transparent' }}
            >
                <Particles count={3000} />
                <FloatingShape 
                    position={[-3, 2, -2]} 
                    scale={[0.5, 0.5, 0.5]} 
                    color="#8b5cf6" 
                />
                <FloatingShape 
                    position={[4, -1, -3]} 
                    scale={[0.8, 0.8, 0.8]} 
                    color="#6366f1" 
                />
                <FloatingShape 
                    position={[-2, -3, -1]} 
                    scale={[0.3, 0.3, 0.3]} 
                    color="#a855f7" 
                />
            </Canvas>
        </div>
    )
} 