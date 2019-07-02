import React from 'react';
// import { Link } from 'react-router-dom'
import anime from 'animejs'


import {
    Apath,
    Bpath,
    Dpath,
    Ipath,
    Vpath
} from './pathLetters'


export default class Welcome extends React.Component {

    componentDidMount() {
        const logoAnimation = anime.timeline({
            direction: 'alternate',
            loop: false
        })

        const lines = document.querySelectorAll('.line')

        logoAnimation.add(
            {
                targets: [lines, '.letters'],
                translateX: target => {
                    let x = 1200
                    let translate;
                    if (target.classList.contains('hori')) {
                        translate = anime.random(0, 1) ? x : -x
                    }
                    if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) {
                        translate = x / 3
                    }
                    // if (target.classList.contains('letters')) {
                    //     translate = anime.random(0, 1) ? x : -x
                    // }
                    return [translate, 0]

                },
                translateY: target => {
                    let y = 1200
                    let translate
                    if (target.classList.contains('vert')) {
                        translate = anime.random(0, 1) ? y : -y
                    }
                    if (target.classList.contains('diag-right')) {
                        translate = -y / 3
                    }
                    if (target.classList.contains('diag-left')) {
                        translate = y / 3
                    }
                    // if (target.classList.contains('letters')) {
                    //     translate = anime.random(0, 1) ? y : -y
                    // }
                    return [translate, 0]
                },
                scale: {
                    value: [6, 1],
                    duration: 500 * 2
                },
                stroke: '#fecea8',
                opacity: {
                    value: [0, 1],
                    duration: 100 * 4
                },
                delay: (t, i) => (i * 50),
                duration: 500 * 4,
                easing: 'easeOutQuart',
                offset: 0
            }
        )
    }

    render() {
        return (
            <div className='welcome' >
                {/* <h1>DAVID BARRIOS</h1>
            <h3>Software Engineer</h3>
            <Link to='/projects'>Projects</Link> */}
                <svg className='logo' height='448' width='100%' viewBox='0 0 1024 448'>
                    <g stroke='#fff' strokeWidth='2' fill='none' fillRule='evenodd'>
                        <Dpath x={138} y={100} />
                        <Apath x={190} y={100} />
                        <Vpath x={235} y={100} />
                        <Ipath x={300} y={100} />
                        <Dpath x={325} y={100} />
                        <Bpath x={410} y={100} /> 
                        <Apath x={455} y={100} />
                        <text x='244' y='275' className='letters hori' >S</text>
                        <text x='279' y='275' className='letters vert' >o</text>
                        <text x='314' y='275' className='letters diag-right' >f</text>
                        <text x='339' y='275' className='letters diag-left' >t</text>
                        <text x='364' y='275' className='letters hori' >w</text>
                        <text x='414' y='275' className='letters vert' >a</text>
                        <text x='444' y='275' className='letters diag-left' >r</text>
                        <text x='469' y='275' className='letters diag-right' >e</text>
                        <text x='524' y='275' className='letters diag-left' >E</text>
                        <text x='559' y='275' className='letters vert' >n</text>
                        <text x='594' y='275' className='letters diag-right' >g</text>
                        <text x='629' y='275' className='letters hori' >i</text>
                        <text x='644' y='275' className='letters vert' >n</text>
                        <text x='679' y='275' className='letters hori' >e</text>
                        <text x='714' y='275' className='letters diag-right' >e</text>
                        <text x='749' y='275' className='letters diag-left' >r</text>
                    </g>
                </svg>
                {/* <div className='subTitle'>
                    <h3>
                      

                    </h3>
                </div> */}
            </div>
        )
    }
}