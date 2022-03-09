import React from "react";
import axios from "axios";
import './detail.css'
import { Header } from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Productintro from '../../components/productintro/productintro'
import { commentMockData } from '../../mockdata/db03'
import { ProductComments } from '../../components/productcomments/productcomments'
import { Row, Col, Divider, Typography, Anchor, Menu } from 'antd'
import store from '../../store/index'

class Detail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bbb: '',
            shuju: {},
            shuju2: []
        }


        // console.log(this.props);
        // console.log(this.props.history);
        // console.log(this.props.location);
        // console.log(this.props.match);
    }
    componentDidMount() {
        console.log('componentDidMount')
        axios({
            url: 'http://localhost:3003/globaltravel',
            method: 'get',
            params: {
                reactid: this.props.match.params.travelid,
            }
        }).then(response => {
            console.log(response)
            this.setState({
                shuju: response.data.data2,
                shuju2: response.data.data2.touristRoutePictures
            })
        }).catch(error => {
            console.log(error)
        })


    }
    a = (e) => {

    }

    render() {


        return (
            <div  >
                <Header></Header>
                <div className='page-content'>
                    {/* 产品简介 */}
                    <div className='product-intro-container'>
                        <Row>
                            <Col span={15}>
                                <Productintro
                                    title={this.state.shuju.title}
                                    shortDescription={this.state.shuju.description}
                                    price={this.state.shuju.originalPrice}
                                    coupons={this.state.shuju.coupons}
                                    points={this.state.shuju.points}
                                    discount={this.state.shuju.price}
                                    rating={this.state.shuju.rating}
                                    pictures={this.state.shuju2.map((p) => p.url)}
                                >

                                </Productintro>
                            </Col>
                            <Col span={9}></Col>
                        </Row>
                    </div>
                    {/* 锚点菜单 */}
                    <div className='product-detail-anchor'>
                        <Anchor className='product-detail-anchor'>
                            <Menu mode="horizontal">
                                <Menu.Item key="1">
                                    <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
                                </Menu.Item>
                            </Menu>
                        </Anchor>
                    </div>
                    {/* 产品特色 */}
                    <div id='feature' className='product-detail-container'>
                        <Divider orientation={"center"}>
                            <Typography.Title level={3}>产品特色</Typography.Title>
                        </Divider>
                        <div
                            dangerouslySetInnerHTML={{ __html: this.state.shuju.features }}
                            style={{ margin: 50 }}
                        ></div>
                    </div>
                    {/* 费用 */}
                    <div id='fees' className='product-detail-container'>
                        <Divider orientation={"center"}>
                            <Typography.Title level={3}>费用</Typography.Title>
                        </Divider>
                        <div
                            dangerouslySetInnerHTML={{ __html: this.state.shuju.fees }}
                            style={{ margin: 50 }}
                        ></div>
                    </div>
                    {/* 预定须知 */}
                    <div id='notes' className='product-detail-container'>
                        <Divider orientation={"center"}>
                            <Typography.Title level={3}>预定须知</Typography.Title>
                        </Divider>
                        <div
                            dangerouslySetInnerHTML={{ __html: this.state.shuju.notes }}
                            style={{ margin: 50 }}
                        ></div>
                    </div>
                    {/* 商品评价 */}
                    <div id='comments' className='product-detail-container'>
                        <Divider orientation={"center"}>
                            <Typography.Title level={3}>用户评价</Typography.Title>
                        </Divider>
                        <div style={{ margin: 40 }}>
                            <ProductComments data={commentMockData} />
                        </div>
                    </div>
                </div>
                <Footer></Footer>

            </div>
        )
    }
}


export default Detail;