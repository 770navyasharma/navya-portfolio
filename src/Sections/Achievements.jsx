import React from 'react'
import { achievements } from '../constants'

const Achievements = () => {
  return (
    <section className='c-space my-20'>
        <h3 className='head-text'>Achievements</h3>
        <div className='achievement-container grid grid-cols-2 md:grid-cols-2 gap-5 mt-10'>
            {achievements.map(({id,name,company,link})=>(
                <div key={id} className='achievement-card border border-black-300 backdrop-blur-3xl rounded-2xl group relative p-4 overflow-hidden transition-shadow hover:shadow-neon'>
                    <div className='m-10 flex flex-col gap-5'>
                        <div className='certification-company'>
                            <div className='flex gap-3'>
                                <img src="assets/achieve.png" alt="name" className='w-10 h-10 rounded-full'/>
                                <div className='flex flex-col'>
                                    <p className='font-semibold text-white-800'>{name}</p>
                                    <p className='text-white  font-extralight md:text-base text-sm'>{company}</p>
                                </div>
                            </div>  
                        </div>
                        <a className='flex items-center gap-2 cursor-pointer text-white-600 font-light' href={link} target='_blank' rel='noreferrer'>
                            <p>Link to Post</p>
                        </a>
                    </div>         
                </div>
            ))}
        </div>
    </section>
  )
}

export default Achievements