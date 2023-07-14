import { Canvas, useFrame } from "@react-three/fiber";
import './App.css'
import Experience from './components/Experience3'
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";


function App() {
 
  return (
    <CustomizationProvider>
      <div className="App">
        <div className="wrapper">
          <div className="card">
              <div className="product-canvas">
              <Canvas>
                <color attach="background" args={["#86CEFA"]} />
                <fog attach="fog" args={["#86CEFA", 10, 20]} />
                <Experience />
              </Canvas>
              </div>
          </div>
      </div>
        {/* <Canvas>
          <color attach="background" args={["#6E7B9C"]} />
          <fog attach="fog" args={["#6E7B9C", 10, 20]} />
          <Experience />
        </Canvas> */}
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
