import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import Skate from "./Skate";

const Experience3 = () => {

    return (
        <PresentationControls 
            speed={1.5} 
            global
            zoom={0.7} 
            polar={[-0.1, Math.PI / 4]} 
            //rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
            <Stage environment={"sunset"} intensity={0.6} contactShadow={false}>
                <Suspense fallback={null}>
                    <Skate />
                </Suspense>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.091, 0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    //blur={[1300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={2}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={2.7}
                    color="#b5e2ff"
                    metalness={1.2}
                />
            </mesh>
        </PresentationControls>
    );
};

export default Experience3;