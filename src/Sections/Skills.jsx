import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { skills } from '../constants';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Components/CanvasLoader';
import Developer from '../Components/Developer';

const Skills = () => {
    const [animationName, setAnimationName] = useState('idle');
  return (
    <section className='c-space my-20' >
        <div className='w-full text-white-600'>
            <h3 className='head-text'>My Skills</h3>
            <div className='skill-container'>
                <div className='skill-canvas'>
                    <Canvas>
                        <ambientLight intensity={7}/>
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                        <Suspense fallback={<CanvasLoader/>}>
                            <Developer position-y={-3} scale={3} animationName={animationName}/>
                        </Suspense>
                    </Canvas>
                </div>
                <div className='skill-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {
                            skills.map(({id,name,pos,duration,title,animation,icon}, index)=>(
                                <div key={id} className='skill-content_container group' onClick={()=>
                                    setAnimationName(animation.toLowerCase())} onPointerCancel={()=>setAnimationName(animation.toLowerCase())} toPointerOut={()=>setAnimationName('idle')}>
                                    <div className='flex flex-col h-full justify-start items-center py-2 '>
                                        <div className='skill-content_logo'>
                                            <img src={icon} alt="logo" className='w-full h-full'/>
                                        </div>
                                        <div className='skill-content_bar'/>
                                    </div>
                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white-800'>{name}</p>
                                        <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                        <p className='group-hover:text-white transition ease-in-out duration-300'>{title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills