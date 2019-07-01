import React from 'react';

export default function Dpath(props) {
    const {x, y} = props
    return (
        <>
            {/* outline of the letter D */}
            {/* <path d='M138,100 L138,200' className='line vert' strokeLinecap='square'></path>
            <path d='M138,100 L170,100' className='line hori' strokeLinecap='square'></path>
            <path d='M138,200 L170,200' className='line hori' strokeLinecap='square'></path>
            <path d='M170,100 L185,120' className='line diag-right' strokeLinecap='square'></path>
            <path d='M170,200 L185,180' className='line diag-left' strokeLinecap='square'></path>
            <path d='M185,120 L185,180' className='line vert' strokeLinecap='square'></path> */}
            {/* inline of the letter D */}
            {/* <path d='M150,120 L150,180' className='line vert' strokeLinecap='square'></path>
            <path d='M150,120 L165,120' className='line hori' strokeLinecap='square'></path>
            <path d='M150,180 L165,180' className='line hori' strokeLinecap='square'></path>
            <path d='M165,120 L173,130' className='line diag-right' strokeLinecap='square'></path>
            <path d='M165,180 L173,170' className='line diag-left' strokeLinecap='square'></path>
            <path d='M173,130 L173,170' className='line vert' strokeLinecap='square'></path> */}


            <path d={`M${x},${y}, L${x},${y + 100}`} className='line vert' strokeLinecap='square'></path>
            <path d={`M${x},${y}, L${x + 32},${y}`} className='line hori' strokeLinecap='square'></path>
            <path d={`M${x},${y + 100}, L${x + 32},${y + 100}`} className='line hori' strokeLinecap='square'></path>
            <path d={`M${x + 32},${y}, L${x + 47},${y + 20}`} className='line diag-right' strokeLinecap='square'></path>
            <path d={`M${x + 32},${y + 100}, L${x + 47},${y + 80}`} className='line diag-left' strokeLinecap='square'></path>
            <path d={`M${x + 47},${y + 20}, L${x + 47},${y + 80}`} className='line vert' strokeLinecap='square'></path>
            {/* inline of the letter D */}
            <path d={`M${x + 12},${y + 20}, L${x + 12},${y + 80}`} className='line vert' strokeLinecap='square'></path>
            <path d={`M${x + 12},${y + 20}, L${x + 27},${y + 20}`} className='line hori' strokeLinecap='square'></path>
            <path d={`M${x + 12},${y + 80}, L${x + 27},${y + 80}`} className='line hori' strokeLinecap='square'></path>
            <path d={`M${x + 27},${y + 20}, L${x + 35},${y + 30}`} className='line diag-right' strokeLinecap='square'></path>
            <path d={`M${x + 27},${y + 80}, L${x + 35},${y + 70}`} className='line diag-left' strokeLinecap='square'></path>
            <path d={`M${x + 35},${y + 30}, L${x + 35},${y + 70}`} className='line vert' strokeLinecap='square'></path>
        </>
    )
}

