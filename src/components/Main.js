import React, { Component } from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/computer1.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/iphone.png'

export default class Main extends Component {
  constructor(props) {
    super()
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            {
              "Welcome! DreamLANs Consulting was built with a simple goal in mind and that is to take \
            the hassle out of every aspect of technology that people commonly face. Whether it's \
            basic PC support, or Corporate IT services and even Custom Audio/Video or Automation \
            solutions. We want to take the stress off of your shoulders. Check out some of our work"
            }{' '}
            <a
              href="javascript:;"
              onClick={() => {
                return new Promise(resolve => {
                  this.props.onCloseArticle()
                })
              }}>
              here
            </a>
            .
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>{'// IT Consulting'}</p>
          <p>
            Whether you have an established IT infrastructure, or you are looking for guidance on
            where to go, let DreamLANs work with you to find the most practical solution to fit your
            needs.
          </p>
          <br />
          <p>{'// Audio/Video/Control Solutions'}</p>
          <p>
            {
              "It's Saturday afternoon during football season. Do you know what your TV's are doing? \
            Great video can make or break a gathering and we want to make sure than no matter which \
            TV in the house you're piled around, you've got the best seat in the house every time!"
            }
          </p>
          <p>
            {
              "It's dinner time; the kids are playing, the spouse is out in the shop or the yard and \
            you're ready for some tunes. With a Whole-Home distributed audio system, you can get the \
            jams you want in whatever room you want! This sounds awesome, right!? We have a solution \
            just for you! Give us a call today to discuss your options!"
            }
          </p>
          <br />
          <p>{'// Hardware Installation'}</p>
          <p>
            {
              "Desktops? Servers? Routers? Custom or proprietary hardware? Retail? TV's and speakers? \
            We do it all. From the smallest gadgets to the largest projectors, TVs and sound \
            systems... We've got you covered."
            }
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            {
              "DreamLANs was birthed from the idea that we love tech, and we love helping people. We \
            have over 8 years of professional knowledge in the IT and Audio/Video Industries, and \
            we're ready to put it to work for you!"
            }{' '}
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/DreamlansIT" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Dreamlans-Consulting-LLC-1378914142244853/"
                className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}
