import './productintro.css'

import React from "react";
import { Typography, Carousel, Image, Rate, Table } from "antd";
import { ColumnsType } from "antd/es/table";



class Productintro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bbb: ''

        }
    }
    a = (e) => {

    }
    render() {

        return (
            <div className="intro-container">
                <Typography.Title level={4}>{this.props.title}</Typography.Title>
                <Typography.Text>{this.props.shortDescription}</Typography.Text>
                <div className="intro-detail-content">
                    <Typography.Text style={{ marginLeft: 20 }}>
                        ¥ <span className="intro-detail-strong-text">{this.props.price}</span>{" "}
                        /人起
                    </Typography.Text>
                    <Typography.Text style={{ marginLeft: 50 }}>
                        <span className="intro-detail-strong-text">{this.props.rating}</span>{" "}
                        分
                    </Typography.Text>
                </div>
                <Carousel autoplay slidesToShow={3}>
                    {this.props.pictures.map((p) => (
                        <Image key={p} height={150} src={p} />
                    ))}
                </Carousel>

            </div>
        );
    }
}


export default Productintro;