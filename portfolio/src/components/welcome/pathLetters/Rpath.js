import React from 'react';

export default function Rpath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                <path d={`M${x},${y} L${x},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y} L${x + 40 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y} L${x + 50 / s},${y + 15 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 15 / s} L${x + 50 / s},${y + 35 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 36 / s} L${x + 35 / s},${y + 50 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 35 / s},${y + 50 / s} L${x + 50 / s},${y + 62 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 62 / s} L${x + 50 / s},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 100 / s} L${x + 37 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 37 / s},${y + 100 / s} L${x + 37 / s},${y + 67 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 18 / s},${y + 50 / s} L${x + 37 / s},${y + 67 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 37 / s},${y + 33 / s} L${x + 18 / s},${y + 50 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 37 / s},${y + 20 / s} L${x + 37 / s},${y + 33 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 33 / s},${y + 15 / s} L${x + 37 / s},${y + 20 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 15 / s} L${x + 33 / s},${y + 15 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 15 / s} L${x + 12 / s},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 / s} L${x + 12 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y} L${x + 40 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y} L${x + 50 * b},${y + 15 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 15 * b} L${x + 50 * b},${y + 35 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 36 * b} L${x + 35 * b},${y + 50 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 35 * b},${y + 50 * b} L${x + 50 * b},${y + 62 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 62 * b} L${x + 50 * b},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 100 * b} L${x + 37 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 37 * b},${y + 100 * b} L${x + 37 * b},${y + 67 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 18 * b},${y + 50 * b} L${x + 37 * b},${y + 67 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 37 * b},${y + 33 * b} L${x + 18 * b},${y + 50 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 37 * b},${y + 20 * b} L${x + 37 * b},${y + 33 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 33 * b},${y + 15 * b} L${x + 37 * b},${y + 20 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 15 * b} L${x + 33 * b},${y + 15 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 15 * b} L${x + 12 * b},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 * b} L${x + 12 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
            </>
        )
    }
}