import React from 'react';

export default function Opath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                {/* outter outline */}
                <path d={`M${x},${y + 20 / s} L${x},${y + 80 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 20 / s} L${x + 10 / s},${y}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 10 / s},${y} L${x + 40 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y} L${x + 50 / s},${y + 20 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 20 / s} L${x + 50 / s},${y + 80 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 80 / s} L${x + 40 / s},${y + 100 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 100 / s} L${x + 10 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y + 80 / s} L${x + 10 / s},${y + 100 / s}`} className='line diag-left' strokeLinecap='square'></path>
                {/* inner outline */}
                <path d={`M${x + 12 / s},${y + 25 / s} L${x + 12 / s},${y + 75 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 25 / s} L${x + 17 / s},${y + 15 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 17 / s},${y + 15 / s} L${x + 33 / s},${y + 15 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 25 / s} L${x + 33 / s},${y + 15 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 25 / s} L${x + 38 / s},${y + 75 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 75 / s} L${x + 33 / s},${y + 85 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 17 / s},${y + 85 / s} L${x + 33 / s},${y + 85 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 17 / s},${y + 85 / s} L${x + 12 / s},${y + 75 / s}`} className='line diag-left' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                {/* outter outline */}
                <path d={`M${x},${y + 20 * b} L${x},${y + 80 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 20 * b} L${x + 10 * b},${y}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 10 * b},${y} L${x + 40 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y} L${x + 50 * b},${y + 20 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 20 * b} L${x + 50 * b},${y + 80 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 80 * b} L${x + 40 * b},${y + 100 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y + 100 * b} L${x + 10 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y + 80 * b} L${x + 10 * b},${y + 100 * b}`} className='line diag-left' strokeLinecap='square'></path>
                {/* inner outline */}
                <path d={`M${x + 12 * b},${y + 25 * b} L${x + 12 * b},${y + 75 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 25 * b} L${x + 17 * b},${y + 15 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 17 * b},${y + 15 * b} L${x + 33 * b},${y + 15 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 25 * b} L${x + 33 * b},${y + 15 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 25 * b} L${x + 38 * b},${y + 75 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 75 * b} L${x + 33 * b},${y + 85 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 17 * b},${y + 85 * b} L${x + 33 * b},${y + 85 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 17 * b},${y + 85 * b} L${x + 12 * b},${y + 75 * b}`} className='line diag-left' strokeLinecap='square'></path>
            </>
        )
    }
}