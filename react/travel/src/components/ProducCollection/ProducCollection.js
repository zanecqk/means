import React from 'react'
import "./ProducCollection.css";
import { ProductionImg } from './ProductionImg'
import { Row, Col, Typography, Divider } from "antd";
class ProducCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bbb: ''
        }
    }
    a = (e) => {

    }
    render() {
        const products = this.props.products
        return (
            < div className="content" >
                <Divider orientation="left" className='a'>{this.props.title}</Divider>
                <Row>
                    <Col span={4}>
                        <img src={this.props.sideImage} className='side-image' />
                    </Col>
                    <Col span={20}>
                        <Row>
                            <Col span={12}>
                                <ProductionImg
                                    id={products[0].id}
                                    size={"large"}
                                    title={products[0].title}
                                    imageSrc={products[0].touristRoutePictures[0].url}
                                    price={products[0].price}
                                />
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={12}>
                                        <ProductionImg
                                            id={products[1].id}
                                            size="small"
                                            title={products[1].title}
                                            imageSrc={products[1].touristRoutePictures[0].url}
                                            price={products[1].price}
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <ProductionImg
                                            id={products[2].id}
                                            size="small"
                                            title={products[2].title}
                                            imageSrc={products[2].touristRoutePictures[0].url}
                                            price={products[2].price}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <ProductionImg
                                            id={products[3].id}
                                            size="small"
                                            title={products[3].title}
                                            imageSrc={products[3].touristRoutePictures[0].url}
                                            price={products[3].price}
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <ProductionImg
                                            id={products[4].id}
                                            size="small"
                                            title={products[4].title}
                                            imageSrc={products[4].touristRoutePictures[0].url}
                                            price={products[4].price}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6}>
                                <ProductionImg
                                    id={products[5].id}
                                    size="small"
                                    title={products[5].title}
                                    imageSrc={products[5].touristRoutePictures[0].url}
                                    price={products[5].price}
                                />
                            </Col>
                            <Col span={6}>
                                <ProductionImg
                                    id={products[6].id}
                                    size="small"
                                    title={products[6].title}
                                    imageSrc={products[6].touristRoutePictures[0].url}
                                    price={products[6].price}
                                />
                            </Col>
                            <Col span={6}>
                                <ProductionImg
                                    id={products[7].id}
                                    size="small"
                                    title={products[7].title}
                                    imageSrc={products[7].touristRoutePictures[0].url}
                                    price={products[7].price}
                                />
                            </Col>
                            <Col span={6}>
                                <ProductionImg
                                    id={products[8].id}
                                    size="small"
                                    title={products[8].title}
                                    imageSrc={products[8].touristRoutePictures[0].url}
                                    price={products[8].price}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default ProducCollection;