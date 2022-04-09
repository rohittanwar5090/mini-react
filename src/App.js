import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const App = () => {
    const [values, setValues] = useState([])
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(data => {
                setValues(data)
                console.log(data)

            })
    }, [])
    return (
        <div className='container'>
            {values.map(films => {
                return (                                        
                    <Link to={`/films/${films.id}`}>
                    <div key ={films.id} className='animelist'>
                        {console.log(films.id)}
                        <div
                            className='background-image'
                            style={{
                                backgroundImage: `url(${films.image})`
                            }}
                        />
                        <div className='content'>
                            <h1 className='title'>{films.title.toUpperCase()}</h1>
                            
                        </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default App