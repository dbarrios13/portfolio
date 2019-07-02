import React from 'react';
// import { Link } from 'react-router-dom'
import anime from 'animejs'
import Dpath from './pathLetters/Dpath'
import Apath from './pathLetters/Apath'
import Vpath from './pathLetters/Vpath'
import Ipath from './pathLetters/Ipath'


export default class Welcome extends React.Component {

    // componentDidMount() {
    //     const logoAnimation = anime.timeline({
    //         direction: 'alternate',
    //         loop: false
    //     })

    //     const lines = document.querySelectorAll('.line')

    //     logoAnimation.add(
    //         {
    //             targets: lines,
    //             translateX: target => {
    //                 let x = 1200
    //                 let translate;
    //                 if (target.classList.contains('hori')) {
    //                     translate = anime.random(0, 1) ? x : -x
    //                 }
    //                 if (target.classList.contains('diag-right') || target.classList.contains('diag-left')) {
    //                     translate = x / 3
    //                 }
    //                 return [translate, 0]

    //             },
    //             translateY: target => {
    //                 let y = 1200
    //                 let translate
    //                 if (target.classList.contains('vert')) {
    //                     translate = anime.random(0, 1) ? y : -y
    //                 }
    //                 if (target.classList.contains('diag-right')) {
    //                     translate = -y / 3
    //                 }
    //                 if (target.classList.contains('diag-left')) {
    //                     translate = y / 3
    //                 }
    //                 return [translate, 0]
    //             },
    //             scale: {
    //                 value: [6, 1],
    //                 duration: 500 * 2
    //             },
    //             stroke: '#fecea8',
    //             opacity: {
    //                 value: [0, 1],
    //                 duration: 100 * 4
    //             },
    //             delay: (t, i) => (i * 100),
    //             duration: 500 * 4,
    //             easing: 'easeOutQuart',
    //             offset: 0
    //         }
    //     )
    // }

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
                    </g>
                </svg>
            </div>
        )
    }
}