import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from  'react-icons/fa';




const About = () => {
    return (
     
            <div className = 'story'>
                <div className = 'title'>
                    <h1>About Me</h1>
                </div>
                <p className = 'para'>Prakash is a New York City based web designer/developer. Most of his work is focused on creating and managing website content for small businesses. His interest in art and design sparked at very young age. He spent a lot of time sketching and painting still objects and portraits. His interest in technical aspect of design began during his high school years, when he got introduced to AutoCAD, which is a drafting software for architectural designs. In addition to that, he was also exposed to graphics editors such as Adobe Photoshop, Illustrator, After Effect, GIMP etc. He is currently attending CUNY York College and has worked on multiple web related projects. Most of his web projects are written in programming language such as HTML5, CSS3, and JavaScript. Beside art and design, Prakash also enjoys playing soccer, hiking, traveling, and food of different cultures.</p>
                <ul className = 'languages'>
                <FaHtml5/>
                <FaCss3Alt/>
                <FaReact/>
                </ul>
            </div>

    )
}

export default About