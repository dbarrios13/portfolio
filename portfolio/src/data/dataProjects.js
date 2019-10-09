import gohavefun from './images/gohavefun.mp4'
import splittrip from './images/splittrip.mp4'
import saferoutes from './images/saferoutes.mp4'

const data = [
    {
        id: 1,
        name: 'Capstone Project',
        p: 'My team and I, took two weeks of planning and creating feature canvas and four weeks to achieve our goals for the feature canvas. We created a simple way to create and view events near the user using Google Map API and Geolocation. I was able to contribute by implementing the Auth0 to our progressive app as well configuring the Google Map API the way we planned for it to work.',
        list: ['React', 'Redux', 'NodeJs', 'Express', 'Heroku', 'PostgreSQL', 'Sass', 'Google Map API', 'AuthO'],
        img: gohavefun,
        imgAlt: 'gif of the capstone project',
        aos: ['zoom-in', 'zoom-in'],
        github: 'https://github.com/event-planner-lambda-labs',
        orderNums: [0, 1]
    },    
    {
        id: 2,
        name: 'Front End React App',
        p: 'A progressive web app that allows users to keep track of trips and expensives all in one place. I was able to work on the front end of the project and implement all the current features, while my teammate created the back-end database and server.',
        list: ['React', 'Redux', 'Sass', 'Reactstrap'],
        img: splittrip,
        imgAlt: 'gif of the react app',
        aos: ['slide-left', 'slide-right'],
        github: 'https://github.com/tripsplitr-matt/Frontend-David',
        orderNums: [3, 2]
    },
    {
        id: 3,
        name: 'Responsive Marketing Site',
        p: 'A full responsive marketing site build with HTML, Less and Javascript within four days.',
        list: ['HTML', 'Less', 'Javascript'],
        img: saferoutes,
        imgAlt: 'gif of the responsive site',
        aos: ['fade-up-right', 'fade-up-left'],
        github: 'https://github.com/safe-routes/Build-SafeRoutes-Marketing-David-Barrios',
        orderNums: [4, 5]
    },
]

export default data;