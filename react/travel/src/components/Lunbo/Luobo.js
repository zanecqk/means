import './Luobo.css';
import React from 'react'
import { Image, Carousel } from 'antd';

var a3 = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0113d566-d450-4ea0-839d-c4972a6140fd/c4364d33-fe89-4500-8970-1ce8d8aecb7b.png'

var a4 = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0113d566-d450-4ea0-839d-c4972a6140fd/5a5338b2-d86d-47ab-956d-efb6af53a602.png'
var a2 = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0113d566-d450-4ea0-839d-c4972a6140fd/2aeb36d6-8ed0-4ea8-a420-ca787ff62700.png'

var a1 = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0113d566-d450-4ea0-839d-c4972a6140fd/260ab620-8ca8-4828-96c4-17545ae0f70b.png'




class Lunbo extends React.Component {
    constructor() {
        super()
        this.state = {
            bbb: ''

        }
    }
    a = (e) => {

    }
    render() {

        return (
            <Carousel autoplay className='slider'>
                <Image src={a1} />
                <Image src={a2} />
                <Image src={a3} />
                <Image src={a4} />

            </Carousel>
        )
    }
}


export default Lunbo;