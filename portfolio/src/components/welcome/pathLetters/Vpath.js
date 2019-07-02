import React from 'react';

export default function Vpath (props){
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                <path d={`M${x},${y} L${x + 20 / s},${y + 100 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 20 / s},${y + 100 / s} L${x + 35 / s},${y + 100 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 35 / s},${y + 100 / s} L${x + 55 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 55 / s},${y} L${x + 40 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y} L${x + 15 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 15 / s},${y} L${x + 27.5 / s},${y + 70 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y} L${x + 27.5 / s},${y + 70 / s}`} className='line diag-right' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                <path d={`M${x},${y} L${x + 20 * b},${y + 100 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 20 * b},${y + 100 * b} L${x + 35 * b},${y + 100 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 35 * b},${y + 100 * b} L${x + 55 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 55 * b},${y} L${x + 40 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y} L${x + 15 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 15 * b},${y} L${x + 27.5 * b},${y + 70 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y} L${x + 27.5 * b},${y + 70 * b}`} className='line diag-right' strokeLinecap='square'></path>
            </>
        )
    }

}