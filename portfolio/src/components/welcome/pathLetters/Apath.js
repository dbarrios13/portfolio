import React from 'react';

export default function Apath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                {/* outline of A */}
                <path d={`M${x},${y + 100 / s} L${x + 20 / s},${y}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 20 / s},${y} L${x + 30 / s},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 30 / s},${y} L${x + 50 / s},${y + 100 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 100 / s} L${x + 35 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 / s} L${x + 15 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 35 / s},${y + 100 / s} L${x + 30 / s},${y + 70 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 15 / s},${y + 100 / s} L${x + 20 / s},${y + 70 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 20 / s},${y + 70 / s} L${x + 30 / s},${y + 70 / s}`} className='line hori' strokeLinecap='square'></path>
                {/* outline of inner A */}
                <path d={`M${x + 22 / s},${y + 57 / s} L${x + 28 / s},${y + 57 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 22 / s},${y + 57 / s} L${x + 25 / s},${y + 35 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 28 / s},${y + 57 / s} L${x + 25 / s},${y + 35 / s}`} className='line diag-left' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                {/* outline of A */}
                <path d={`M${x},${y + 100 * b} L${x + 20 * b},${y}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 20 * b},${y} L${x + 30 * b},${y}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 30 * b},${y} L${x + 50 * b},${y + 100 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 100 * b} L${x + 35 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 * b} L${x + 15 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 35 * b},${y + 100 * b} L${x + 30 * b},${y + 70 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 15 * b},${y + 100 * b} L${x + 20 * b},${y + 70 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 20 * b},${y + 70 * b} L${x + 30 * b},${y + 70 * b}`} className='line hori' strokeLinecap='square'></path>
                {/* outline of inner A */}
                <path d={`M${x + 22 * b},${y + 57 * b} L${x + 28 * b},${y + 57 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 22 * b},${y + 57 * b} L${x + 25 * b},${y + 35 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 28 * b},${y + 57 * b} L${x + 25 * b},${y + 35 * b}`} className='line diag-left' strokeLinecap='square'></path>
            </>
        )
    }
}