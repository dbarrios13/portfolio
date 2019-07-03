import React from 'react';

export default function Spath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                <path d={`M${x},${y + 15 / s} L${x},${y + 45 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 15 / s} L${x + 10 / s},${y}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 10 / s},${y} L${x + 40 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y} L${x + 50 / s},${y + 15 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 15 / s} L${x + 15 / s},${y + 15 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 15 / s},${y + 15 / s} L${x + 15 / s},${y + 45 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 15 / s},${y + 45 / s} L${x + 40 / s},${y + 45 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 45 / s} L${x + 50 / s},${y + 60 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 60 / s} L${x + 50 / s},${y + 85 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 85 / s} L${x + 40 / s},${y + 100 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 10 / s},${y + 100 / s} L${x + 40 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 10 / s},${y + 100 / s} L${x},${y + 85 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 35 / s},${y + 85 / s} L${x},${y + 85 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 35 / s},${y + 85 / s} L${x + 35 / s},${y + 60 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 10 / s},${y + 60 / s} L${x + 35 / s},${y + 60 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 10 / s},${y + 60 / s} L${x},${y + 45 / s}`} className='line diag-left' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                <path d={`M${x},${y + 15 * b} L${x},${y + 45 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 15 * b} L${x + 10 * b},${y}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 10 * b},${y} L${x + 40 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y} L${x + 50 * b},${y + 15 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 15 * b} L${x + 15 * b},${y + 15 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 15 * b},${y + 15 * b} L${x + 15 * b},${y + 45 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 15 * b},${y + 45 * b} L${x + 40 * b},${y + 45 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y + 45 * b} L${x + 50 * b},${y + 60 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 60 * b} L${x + 50 * b},${y + 85 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 85 * b} L${x + 40 * b},${y + 100 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 10 * b},${y + 100 * b} L${x + 40 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 10 * b},${y + 100 * b} L${x},${y + 85 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 35 * b},${y + 85 * b} L${x},${y + 85 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 35 * b},${y + 85 * b} L${x + 35 * b},${y + 60 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 10 * b},${y + 60 * b} L${x + 35 * b},${y + 60 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 10 * b},${y + 60 * b} L${x},${y + 45 * b}`} className='line diag-left' strokeLinecap='square'></path>
            </>
        )
    }
}