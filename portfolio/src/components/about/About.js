import React from 'react';
import meImg from '../../data/images/david.jpg'

export default function About() {
    return (
        <div id='about' className='about'>
            <div className='left' data-aos='zoom-out-up' data-aos-duration>
                <h3>About</h3>
                <p>As a Software Engineer, I have a passion for, and I am very intrigued with all aspects of web development. I am self taught and I am also a student at Lambda School. In every project, I have pushed my skills to their limits and in doing so I have gain experience to create and contribute to the software industry.</p>
                <h4>Skills</h4>
                <p>HTML5, CSS, Sass/Scss, Less, JavaScript, React.js, Redux.js, Node.js, Express.js, SQLite, MySQL, Responsive Design and Git</p>
            </div>
            <div className='right' data-aos='zoom-out-up' data-aos-duration>
                <img alt='David Barrios' src={meImg} />
            </div>
        </div>
    )
}