import React from 'react';

export default function Ipath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                <path d={`M${x},${y} L${x},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y} L${x + 15 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 15 / s},${y} L${x + 15 / s},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 / s} L${x + 15 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y} L${x + 15 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 15 * b},${y} L${x + 15 * b},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 * b} L${x + 15 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
            </>
        )
    }
}