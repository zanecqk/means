import './error.css';
import React from 'react'
class Error extends React.Component {
    constructor() {
        super()
        this.state = {
            bbb: ''

        }
    }
    a = (e) => {

    }
    render() {
        const aa = require('./images/logo.svg').default
        return (
            <div className="bg-purple">
                <div className="stars">
                    <div className="custom-navbar">
                        <div className="brand-logo">
                            <img src={aa} width="80px" />
                        </div>
                        <div className="navbar-links">
                            <ul className='a'>
                                <li><a href="/" target="_blank">主页</a></li>
                                <li><a href="#" target="_blank">选项一</a></li>
                                <li><a href="#" target="_blank">选项二</a></li>
                                <li><a href="#" className="btn-request" target="_blank">选项三</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="central-body">
                        <img className="image-404" src={require('./images/404.svg').default} width="300px" />
                        <a href="/" className="btn-go-home" target="_blank">返回主页</a>
                    </div>
                    <div className="objects">
                        <img className="object_rocket" src={require('./images/rocket.svg').default} width="40px" />
                        <div className="earth-moon">

                            <img className="object_moon" src={require('./images/moon.svg').default} width="80px" />
                        </div>
                        <div className="box_astronaut">
                            <img className="object_astronaut" src={require('./images/astronaut.svg').default} width="140px" />
                        </div>
                    </div>
                    <div className="glowing_stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Error;