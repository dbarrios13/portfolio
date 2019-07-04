import React from 'react';

export default function ProjectContent (props) {
    const {name, p, list, aos, github, orderNums} = props.data
    let num
    if(window.screen.width < 550) {
        num = 0
    } else {
        num = orderNums[0]
    }
    return (
        <div className='project content' data-aos={aos[0]} data-aos-duration style={{order: num}}>
            <h3>{name}</h3>
            <p>{p}</p>
            <ul>
               {list.map(i => {
                  return <li key={i}>{i}</li>
               })}
            </ul>
            <a href={github}><i className="fab fa-github fa-2x"></i></a>
        </div>
    )
}