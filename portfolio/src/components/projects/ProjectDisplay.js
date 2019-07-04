import React from 'react';

export default function ProjectDisplay (props) {
    const {aos, img, orderNums} = props.data
    return (
        <div className='project display' style={{order: orderNums[1]}} data-aos={aos[1]} data-aos-duration>
            <img src={img} />
        </div>
    )
}