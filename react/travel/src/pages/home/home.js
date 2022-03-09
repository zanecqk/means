import './home.css';
import React from 'react'
import { Header } from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SideMenu from '../../components/SideMenu/SideMenu'
import Lunbo from '../../components/Lunbo/Luobo'
import ProducCollection from '../../components/ProducCollection/ProducCollection'
import { Partner } from '../../components/Partner/Partner'
import { Row, Col } from 'antd'
import { productList1, productList2, productList3 } from '../../mockdata/db02'


var img1 = 'https://ftp.bmp.ovh/imgs/2021/04/ff8824bf623acce2.png'
var img2 = 'https://ftp.bmp.ovh/imgs/2021/04/2b3f6895ff145210.png'
var img3 = 'https://ftp.bmp.ovh/imgs/2021/04/edcaf123cc99befb.png'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            bbb: 1
        }
    }

    render() {
        return (
            <div className='App'>
                <Header></Header>
                {/* 页面content */}
                <div className='page-content'>
                    <Row style={{ marginTop: 20 }}>
                        <Col span={6}>
                            <div >
                                <SideMenu></SideMenu>
                            </div>
                        </Col>
                        <Col span={18}>
                            <div >
                                <Lunbo></Lunbo>
                            </div>
                        </Col>
                    </Row>
                    <ProducCollection
                        title='热门推荐'
                        sideImage={img1}
                        products={productList1}
                    >
                    </ProducCollection>
                    <ProducCollection
                        title='新品上市'
                        sideImage={img2}
                        products={productList2}
                    >
                    </ProducCollection>
                    <ProducCollection
                        title='国内游推荐'
                        sideImage={img3}
                        products={productList3}
                    >
                    </ProducCollection>

                    <Partner></Partner>
                </div>
                {/* 页面content 上*/}
                <Footer></Footer>
            </div >
        )
    }
}
export default Home;

