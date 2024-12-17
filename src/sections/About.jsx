import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
      
   const handleCopy = () => {
          navigator.clipboard.writeText('s.premraj3008@gmail.com');
          setHasCopied(true);
      
          setTimeout(() => {
            setHasCopied(false);
          }, 2000);
    };

  return (
    <section className='c-space my-20' id="about">
        <p className='head-text mb-10'>
            About Me
        </p>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2
            grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1"
                        className='w-full sm:h-[276px] h-fit object-contain'
                    />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Prem Raj S</p>
                        <p className='grid-subtext'>I am a Computer Science Engineering student specializing in web development, data analytics, and problem-solving, driven to create innovative solutions.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/Stack.png" alt="grid-2"
                     className='w-full sm:w-[600px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p> 
                        <p className='grid-subtext'>
My tech stack includes HTML5, CSS3, JavaScript, React, Python, C, and C++, with experience in data analytics and mobile development using React Native. I also work with Git, APIs, and focus on creating responsive and innovative web solutions.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor= 'rgba(0, 0, 0, 0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData = {[{
                                text:"I'm from India",
                                lat: 20.5937,
                                lng: 78.9629,
                                color:'white',
                                size: 20,
                            }]}
                            autoRotate={true}
                            autoRotateSpeed={0.5}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>
                        From India, Exploring the World
                        </p>
                        <p className='grid-subtext'>
                        Proudly from India, where diverse cultures and technology come together to inspire innovation.
                        </p>
                        <a href='#contact' className='w-fit'>
                        <Button 
                            name = "Contact Me"
                            isBeam
                            containerClass="w-full mt-10"
                        />
                        </a>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                   <img src="/assets/grid3.png" alt="grid-3"
                    className='w-full sm:h-[276px] h-fit object-contain'
                   />         
                   <div>
                    <p className='grid-headtext'>
                        My Passion for Coding
                    </p>
                    <p className='grid-subtext'>
                    I love solving problems and building things through code. Programming isn't just my
                    profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills. 
                    </p>
                   </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">s.premraj3008@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default About
