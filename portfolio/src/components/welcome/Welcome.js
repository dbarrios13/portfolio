import React from 'react';
import anime from 'animejs'

import {
    Apath,
    Bpath,
    Dpath,
    Ipath,
    Opath,
    Rpath,
    Spath,
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
                    let x = 2200
                    let translate;
                    if (target.classList.contains('hori')) {
                        translate = anime.random(0, 1) ? x : -x
                    }
                    if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) {
                        translate = x / 3
                    }
                    return [translate, 0]

                },
                translateY: target => {
                    let y = 2200
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
                    return [translate, 0]
                },
                scale: {
                    value: [6, 1],
                    duration: 500 * 2
                },
                stroke: '#66fcf1',
                opacity: {
                    value: [0, 1],
                    duration: 100 * 4
                },
                delay: (t, i) => (i * 20),
                duration: 500,
                easing: 'easeOutQuart',
                offset: 0
            }
        )
    }

    toProjects = () => {
        const logoAnimation = anime.timeline({
            direction: 'alternave',
            loop: false
        })

        const lines = document.querySelectorAll('.line')
        const letters = document.querySelectorAll('.letters')

        logoAnimation.add(
            {
                targets: [lines, letters],
                translateX: target => {
                    let x = 2200
                    let translate;
                    if (target.classList.contains('hori')) {
                        translate = anime.random(0, 1) ? x : -x
                    }
                    if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) {
                        translate = x / 3
                    }
                    return [0, translate]

                },
                translateY: target => {
                    let y = 2200
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
                    return [0, translate]
                },
                scale: {
                    value: [1, 6],
                    duration: 500 * 2
                },
                stroke: '#66fcf1',
                opacity: {
                    value: [1, 0],
                    duration: 100 * 4
                },
                delay: anime.stagger(20, { direction: 'reverse' }),
                duration: 500,
                easing: 'easeInQuart',
                offset: 0
            }
        )
        setTimeout(() => {
            this.props.history.push('/projects')
        }, 4000)
    }

    render() {
        return (
            <div className='welcome' >
                <svg className='logo' height='100%' width='100%' viewBox='0 0 1024 448'>
                    <g stroke='#66fcf1' strokeWidth='2' fill='none' fillRule='evenodd'>
                        <Dpath x={180} y={100} />
                        <Apath x={230} y={100} />
                        <Vpath x={270} y={100} />
                        <Ipath x={335} y={100} />
                        <Dpath x={360} y={100} />
                        <Bpath x={480} y={100} />
                        <Apath x={535} y={100} />
                        <Rpath x={595} y={100} />
                        <Rpath x={655} y={100} />
                        <Ipath x={715} y={100} />
                        <Opath x={740} y={100} />
                        <Spath x={800} y={100} />
                        </g>
                        <g stroke='#66fcf1' strokeWidth='2' fill='none' fillRule="evenodd">
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
                        <g>
                        <a href={this.toProjects} onClick={this.toProjects}>
                            <text x='450' y='350' strokeWidth='1' className='letters hori link'>P</text>
                            <text x='470' y='350' strokeWidth='1' className='letters vert link'>r</text>
                            <text x='483' y='350' strokeWidth='1' className='letters diag-left link'>o</text>
                            <text x='500' y='350' strokeWidth='1' className='letters diag-right link'>j</text>
                            <text x='508' y='350' strokeWidth='1' className='letters vert link'>e</text>
                            <text x='525' y='350' strokeWidth='1' className='letters diag-right link'>c</text>
                            <text x='542' y='350' strokeWidth='1' className='letters diag-left link'>t</text>
                            <text x='555' y='350' strokeWidth='1' className='letters hori link'>s</text>
                        </a>
                    </g>
                </svg>
            </div>
        )
    }
}