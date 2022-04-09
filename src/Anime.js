import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Anime.css'
import Particles from "react-tsparticles";

const Anime = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    const[ incomingValues ,  setIncomingValues] = useState([])
    const filmsId = useParams();
    useEffect(()=>{
        fetch(`https://ghibliapi.herokuapp.com/films/${filmsId.anime_id}`)
        .then(respnose => respnose.json())
        .then(data =>{
            console.log(data)
            console.log(incomingValues);

            setIncomingValues([...incomingValues , data])

        })
    },[])


  return (
    <div>
         <Particles
      className="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 50,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
           zindex: -1,
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "b",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        {incomingValues.map(moviesDetails =>{
            return(
                <div className='desc'>
                    <div className='title'>
                        <h1>{moviesDetails.title}</h1>
                    </div>
                    <div className='imagetag'>
                        <img src={moviesDetails.image} alt="" />
                    </div>
                    <div className='description'>
                        <span>DESCRIPITION: </span>
                        <h2>{moviesDetails.description}</h2>
                    </div>
                    <div className='director'>
                        <span>DIRECTOR:</span>
                        <h3>{moviesDetails.director}</h3>
                    </div>
                    <div className='time'>
                        <span>RUNNING TIME:</span>
                        <h4>{moviesDetails.running_time +  + 'minutes'}</h4> 
                    </div>                    
                </div>
            )
        })}
    </div>
  )
}

export default Anime