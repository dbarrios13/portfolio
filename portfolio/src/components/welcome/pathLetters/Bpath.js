import React from 'react';

export default function Bpath(props) {
    const { x, y, smaller, bigger } = props
    let s = smaller
    let b = bigger
    if (s === undefined) s = 1
    if (b === undefined) b = 1
    // if (s > 1) {
        return (
            <>
                {/* outline of the B */}
                <path d={`M${x},${y} L${x},${y + 100 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x},${y + 100 / s} L${x + 30 / s},${y + 100 / s}`} className='line hori' strokeLinecap='square'></path>
                <path d={`M${x + 30 / s},${y + 100 / s} L${x + 40 / s},${y + 85 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 85 / s} L${x + 40 / s},${y + 60 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 60 / s} L${x + 20 / s},${y + 50 / s}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 20 / s},${y + 50 / s} L${x + 40 / s},${y + 40 / s}`} className='line diag-right' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 40 / s} L${x + 40 / s},${y + 15 / s}`} className='line vert' strokeLinecap='square'></path>
                <path d={`M${x + 40 / s},${y + 15 / s} L${x + 30 / s},${y}`} className='line diag-left' strokeLinecap='square'></path>
                <path d={`M${x + 30 / s},${y} L${x},${y}`} className='line hori' strokeLinecap='square'></path>
                {/* outline of the inner B */}
                <path d={`M${x},${y} L${x},${y}`} className='line ' strokeLinecap='square'></path>
            </>
        )
    // } else {
    //     return (
    //         <>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
    //             <path d={`M${x},${y + 100 * b} L${x + 30 * b},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line diag-left' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line diag-right' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line diag-left' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line vert' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line diag-right' strokeLinecap='square'></path>
    //             <path d={`M${x},${y} L${x},${y + 100 * b}`} className='line hori' strokeLinecap='square'></path>
    //         </>
    //     )
    // }
}