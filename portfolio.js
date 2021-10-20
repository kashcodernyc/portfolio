import React from 'react'
import { useState } from 'react'
import data from './data'


const Portfolio = () => {
    const [projects, setProjects] = useState(data);
    console.log(projects);
    return (
        projects.map(({id, name, image, date, description}) => {
            return(
            <div className = 'content' key = {id}>
                <div className = 'title'>
                    <h1>{name}</h1>
                    <p className = 'date'>{date}</p>
                </div>
                <div className = 'description'>
                    <img className = 'projectimg' src = {image} />
                    <p>{description}</p>
                </div>
            </div>
            )
        })
    )
}

export default Portfolio
