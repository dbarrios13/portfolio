import React from 'react';

export default function ProjectDisplay (props) {
    const {aos, img, orderNums} = props.data
    let num
    if(window.screen.width < 800) {
        num = 0
    } else {
        num = orderNums[1]
    }
    return (
        <div className='project display' style={{order: num}} data-aos={aos[1]} data-aos-duration>
            <video autoPlay loop width='100%' controls>
                <source src={img} type='video/mp4' /> 
            </video>
        </div>
    )
}