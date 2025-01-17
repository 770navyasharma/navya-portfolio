import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react';
import CanvasLoader from '../Components/CanvasLoader'
import {PerspectiveCamera} from '@react-three/drei'
import HackerRoom from '../Components/HackerRoom'
// import  {Leva, useControls } from 'leva'   
import {useMediaQuery} from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../Components/Target';
import PythonLogo from '../Components/PythonLogo';
import Cube from '../Components/Cube';
import Rings from '../Components/Rings';
import HeroCamera from '../Components/HeroCamera';
import Button from '../Components/Button';

const Hero = () => {
    const isSmall = useMediaQuery({query: '(max-width: 440px)'})
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const isTablet = useMediaQuery({query: '(min-width: 768px) and (max-width: 1024px)'});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);


    
  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 top-0">
            <p className="sm:text-3xl text-2xl font-semibold text-white text-center font-generalsans">Hello, I am Navya!
                <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">Exploring data and coding ideas</p>
        </div>
        <div className="w-full h-full absolute inset-0">
            {/* <Leva/> */}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                            // scale={0.08} 
                            // position={[0, 0, 0]} 
                            // rotation={[0, 280, 0]}
                            position={sizes.deskPosition} 
                            rotation={[0.2, -2.8, 0]}
                            scale={sizes.deskScale}
                        />
                    </HeroCamera>
                    
                    <group>
                        <Target position={sizes.targetPosition} scale={1.7}/>
                        <PythonLogo position={sizes.pythonLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>
                    <ambientLight intensity={1}/>
                    <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                </Suspense>
            </Canvas>
        </div>
        <div className='absolute bottom-2 left-0 right-0 w-full z-10 c-space'>
            <a href="#about" className='w-fit'>
                <Button name="Let's take a look" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>
        </div>
    </section>
  )
}

export default Hero