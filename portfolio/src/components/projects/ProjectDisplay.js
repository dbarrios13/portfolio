import React from 'react';

export default function ProjectDisplay (props) {
    const {aos, img, imgAlt, orderNums} = props.data
    let num
    if(window.screen.width < 800) {
        num = 0
    } else {
        num = orderNums[1]
    }
    return (
        <div className='project display' style={{order: num}} data-aos={aos[1]} data-aos-duration>
            <img alt={imgAlt} src={img} />
        </div>
    )
}