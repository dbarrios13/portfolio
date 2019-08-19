import React from 'react';
import smoothscroll from 'smoothscroll-polyfill'

export default class Contact extends React.Component {

    scrollTop = () => {
        smoothscroll.polyfill()
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    render() {
        return (
            <div id='contact' className='contact'>
                <div className='form' data-aos='fade-up' data-aos-duration>
                    <form name='contact' action='https://getform.io/f/e51ce0d0-5e18-4740-acb2-44158d85e3f9' method='POST'>
                        <input name='name' type='text' placeholder='Name' required />
                        <input name='email' type='email' placeholder='Email' required />
                        <textarea name='message' placeholder='Message' required ></textarea>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
                <div className='form-message' data-aos='fade-up' data-aos-duration>
                    <h3>Contact</h3>
                    <p>Feel free to send me a message about any questions you may have or just to get in contact with me. Thank you for visiting my portfolio and I look forward to speaking with you soon.</p>
                </div>
                <div className='btn'>
                    <button onClick={this.scrollTop} className='btn-top'>Back to Top</button>
                </div>
            </div>
        )
    }
}