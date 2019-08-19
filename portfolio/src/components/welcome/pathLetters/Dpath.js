import React from 'react';

export default function Dpath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                <path d={`M${x},${y}, L${x},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y}, L${x + 32 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 / s}, L${x + 32 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 32 / s},${y}, L${x + 50 / s},${y + 20 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 32 / s},${y + 100 / s}, L${x + 47 / s},${y + 80 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 20 / s}, L${x + 50 / s},${y + 80 / s}`} className='line vert' strokeLinecap='square'></path>
                {/* inline of the letter D */}
                <path d={`M${x + 12 / s},${y + 20 / s}, L${x + 12 / s},${y + 80 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 20 / s}, L${x + 27 / s},${y + 20 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 80 / s}, L${x + 27 / s},${y + 80 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 27 / s},${y + 20 / s}, L${x + 35 / s},${y + 30 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 27 / s},${y + 80 / s}, L${x + 35 / s},${y + 70 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 35 / s},${y + 30 / s}, L${x + 35 / s},${y + 70 / s}`} className='line vert' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                <path d={`M${x},${y}, L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y}, L${x + 32 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 * b}, L${x + 32 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 32 * b},${y}, L${x + 50 * b},${y + 20 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 32 * b},${y + 100 * b}, L${x + 50 * b},${y + 80 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 20 * b}, L${x + 50 * b},${y + 80 * b}`} className='line vert' strokeLinecap='square'></path>
                {/* inline of the letter D  */}
                <path d={`M${x + 12 * b},${y + 20 * b}, L${x + 12 * b},${y + 80 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 20 * b}, L${x + 27 * b},${y + 20 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 80 * b}, L${x + 27 * b},${y + 80 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 27 * b},${y + 20 * b}, L${x + 35 * b},${y + 30 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 27 * b},${y + 80 * b}, L${x + 35 * b},${y + 70 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 35 * b},${y + 30 * b}, L${x + 35 * b},${y + 70 * b}`} className='line vert' strokeLinecap='square'></path>
            </>
        )
    }
}