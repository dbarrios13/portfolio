import React from 'react';

export default function ProjectContent (props) {
    const {name, p, list, aos, github, orderNums} = props.data
    return (
        <div className='project content' data-aos={aos[0]} data-aos-duration style={{order: orderNums[0]}}>
            <h3>{name}</h3>
            <p>{p}</p>
            <ul>
               {list.map(i => {
                  return <li>{i}</li>
               })}
            </ul>
            <a href={github}><i className="fab fa-github fa-2x"></i></a>
        </div>
    )
}