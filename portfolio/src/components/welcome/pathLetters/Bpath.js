import React from 'react';

export default function Bpath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    if (s > 1) {
        return (
            <>
                {/* outline of the B */}
                <path d={`M${x},${y} L${x},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 / s} L${x + 40 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 100 / s} L${x + 50 / s},${y + 85 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 85 / s} L${x + 50 / s},${y + 60 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 60 / s} L${x + 40 / s},${y + 50 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 50 / s} L${x + 50 / s},${y + 40 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 40 / s} L${x + 50 / s},${y + 15 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 / s},${y + 15 / s} L${x + 40 / s},${y}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y} L${x},${y}`} className='line hori' strokeLinecap='square'></path>
                {/* top inner outline */}
                <path d={`M${x + 12 / s},${y + 12 / s} L${x + 12 / s},${y + 43 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 12 / s} L${x + 31 / s},${y + 12 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 31 / s},${y + 12 / s} L${x + 38 / s},${y + 22 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 22 / s} L${x + 38 / s},${y + 35 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 35 / s} L${x + 30 / s},${y + 43 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 43 / s} L${x + 30 / s},${y + 43 / s}`} className='line hori' strokeLinecap='square'></path>
                {/* Bottom inner outline */}
                <path d={`M${x + 12 / s},${y + 57 / s} L${x + 12 / s},${y + 88 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 57 / s} L${x + 30 / s},${y + 57 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 30 / s},${y + 57 / s} L${x + 38 / s},${y + 65 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 65 / s} L${x + 38 / s},${y + 79 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 38 / s},${y + 79 / s} L${x + 32 / s},${y + 88 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 12 / s},${y + 88 / s} L${x + 32 / s},${y + 88 / s}`} className='line hori' strokeLinecap='square'></path>
            </>
        )
    } else {
        return (
            <>
                {/* outline of the B */}
                <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 * b} L${x + 40 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y + 100 * b} L${x + 50 * b},${y + 85 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 85 * b} L${x + 50 * b},${y + 60 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 60 * b} L${x + 40 * b},${y + 50 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y + 50 * b} L${x + 50 * b},${y + 40 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 40 * b} L${x + 50 * b},${y + 15 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 50 * b},${y + 15 * b} L${x + 40 * b},${y}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 40 * b},${y} L${x},${y}`} className='line hori' strokeLinecap='square'></path>
                {/* top inner outline */}
                <path d={`M${x + 12 * b},${y + 12 * b} L${x + 12 * b},${y + 43 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 12 * b} L${x + 31 * b},${y + 12 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 31 * b},${y + 12 * b} L${x + 38 * b},${y + 22 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 22 * b} L${x + 38 * b},${y + 35 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 35 * b} L${x + 30 * b},${y + 43 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 43 * b} L${x + 30 * b},${y + 43 * b}`} className='line hori' strokeLinecap='square'></path>
                {/* Bottom inner outline */}
                <path d={`M${x + 12 * b},${y + 57 * b} L${x + 12 * b},${y + 88 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 57 * b} L${x + 30 * b},${y + 57 * b}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 30 * b},${y + 57 * b} L${x + 38 * b},${y + 65 * b}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 65 * b} L${x + 38 * b},${y + 79 * b}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 38 * b},${y + 79 * b} L${x + 32 * b},${y + 88 * b}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 12 * b},${y + 88 * b} L${x + 32 * b},${y + 88 * b}`} className='line hori' strokeLinecap='square'></path>
            </>
        )
    }
}