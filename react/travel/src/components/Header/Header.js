import logo from '../../assets/logo.svg';
import './Header.css';
import React from 'react'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { withRouter } from "react-router-dom";
import store from '../../store/index'



const Header2 = ({ history, location, match }) => {
    const zhuce = () => {
        console.log('进入zhuce里面了')
        history.push('register')
    }


    const denglu = () => {
        console.log('进入zhuce里面了')
        history.push('login')
    }
    const tuichu = (e) => {
        console.log('tuichu')
        localStorage.removeItem('_token')
        localStorage.removeItem('username')
        history.push('login')
    }

    let _token = localStorage.getItem('_token')
    let username = localStorage.getItem('username')

    return (
        <div>
            <div className='app-header'>
                {/* top-header */}
                <div className='top-header'>
                    <div className='inner'>
                        <Typography.Text>让旅游更幸福</Typography.Text>
                        <Dropdown.Button
                            style={{ marginLeft: 15 }}
                            overlay={
                                <Menu>
                                    <Menu.Item>中文</Menu.Item>
                                    <Menu.Item>englist</Menu.Item>
                                </Menu>
                            }
                            icon={<GlobalOutlined></GlobalOutlined>}
                        >
                            languange
                        </Dropdown.Button>

                        {
                            !_token ? (
                                <Button.Group className='button-group'>
                                    <Button onClick={zhuce}>注册</Button>
                                    <Button onClick={denglu}>登录</Button>
                                </Button.Group>
                            ) : (
                                <Button.Group className='button-group'>
                                    用户:{username}
                                    <Button onClick={tuichu}>退出</Button>
                                </Button.Group>
                            )
                        }
                    </div>

                </div>


                <Layout.Header className='main-header'>
                    <span onClick={() => history.push('/')}>
                        <img className='App-logo' src={logo} />
                        <Typography.Title className='title' level={3}>react旅游网</Typography.Title>
                    </span>

                    <Input.Search
                        placeholder={'请输入旅游目的地 主题 以及关键字'}
                        className='search-input'
                    >

                    </Input.Search>
                </Layout.Header>


                <Menu mode={"horizontal"} className="main-menu">
                    <Menu.Item key={1}>旅游首页</Menu.Item>
                    <Menu.Item key={2}>周末游</Menu.Item>
                    <Menu.Item key={3}>跟团游</Menu.Item>
                    <Menu.Item key="4"> 自由行 </Menu.Item>
                    <Menu.Item key="5"> 私家团 </Menu.Item>
                    <Menu.Item key="6"> 邮轮 </Menu.Item>
                    <Menu.Item key="7"> 酒店+景点 </Menu.Item>
                    <Menu.Item key="8"> 当地玩乐 </Menu.Item>
                    <Menu.Item key="9"> 主题游 </Menu.Item>
                    <Menu.Item key="10"> 定制游 </Menu.Item>
                    <Menu.Item key="11"> 游学 </Menu.Item>
                    <Menu.Item key="12"> 签证 </Menu.Item>
                    <Menu.Item key="13"> 企业游 </Menu.Item>
                    <Menu.Item key="14"> 高端游 </Menu.Item>
                    <Menu.Item key="15"> 爱玩户外 </Menu.Item>
                    <Menu.Item key="16"> 保险 </Menu.Item>
                </Menu>

            </div>
        </div>











        // this.state.bbb === 1 ? <div className="App">
        //     <div className='app-header'>
        //         {/* top-header */}
        //         <div className='top-header'>
        //             <div className='inner'>
        //                 <Typography.Text>
        //                     让旅游更幸福
        //                 </Typography.Text>
        //                 <Dropdown.Button
        //                     style={{ marginLeft: 15 }}
        //                     overlay={
        //                         <Menu>
        //                             <Menu.Item onClick={this.a}>中文</Menu.Item>
        //                             <Menu.Item onClick={this.b}>english</Menu.Item>
        //                         </Menu>
        //                     }
        //                     icon={<GlobalOutlined></GlobalOutlined>}
        //                 >
        //                     语言
        //                 </Dropdown.Button>
        //                 <Button.Group className='button-group'>
        //                     <Button>注册</Button>
        //                     <Button>登录</Button>
        //                 </Button.Group>
        //             </div>


        //         </div>

        //         <Layout.Header className='main-header'>
        //             <img src={logo} className='App-logo' />
        //             <Typography.Title level={3} className='title'>
        //                 上海2022
        //             </Typography.Title>
        //             <Input.Search
        //                 placeholder={'请输入旅游目的地 主题 等关键字'}
        //                 className='search-input'
        //             >

        //             </Input.Search>
        //         </Layout.Header>

        //         <Menu mode={"horizontal"} className="main-menu">
        //             <Menu.Item key={1}>旅游首页</Menu.Item>
        //             <Menu.Item key={2}>周末游</Menu.Item>
        //             <Menu.Item key={3}>跟团游</Menu.Item>
        //             <Menu.Item key="4"> 自由行 </Menu.Item>
        //             <Menu.Item key="5"> 私家团 </Menu.Item>
        //             <Menu.Item key="6"> 邮轮 </Menu.Item>
        //             <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        //             <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        //             <Menu.Item key="9"> 主题游 </Menu.Item>
        //             <Menu.Item key="10"> 定制游 </Menu.Item>
        //             <Menu.Item key="11"> 游学 </Menu.Item>
        //             <Menu.Item key="12"> 签证 </Menu.Item>
        //             <Menu.Item key="13"> 企业游 </Menu.Item>
        //             <Menu.Item key="14"> 高端游 </Menu.Item>
        //             <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        //             <Menu.Item key="16"> 保险 </Menu.Item>
        //         </Menu>
        //     </div>



        // </div> : (
        //     <div className="App">
        //         <div className='app-header'>
        //             {/* top-header */}
        //             <div className='top-header'>
        //                 <div className='inner'>
        //                     <Typography.Text>
        //                         Make travel happier
        //                     </Typography.Text>
        //                     <Dropdown.Button
        //                         style={{ marginLeft: 15 }}
        //                         overlay={
        //                             <Menu>
        //                                 <Menu.Item onClick={this.a}>中文</Menu.Item>
        //                                 <Menu.Item onClick={this.b}>english</Menu.Item>
        //                             </Menu>
        //                         }
        //                         icon={<GlobalOutlined></GlobalOutlined>}
        //                     >
        //                         Language switching
        //                     </Dropdown.Button>
        //                     <Button.Group className='button-group'>
        //                         <Button>registered</Button>
        //                         <Button>login</Button>
        //                     </Button.Group>
        //                 </div>


        //             </div>

        //             <Layout.Header className='main-header'>
        //                 <img src={logo} className='App-logo' />
        //                 <Typography.Title level={3} className='title'>
        //                     ShangHai2022
        //                 </Typography.Title>
        //                 <Input.Search
        //                     placeholder={'Please enter keywords such as destination theme'}
        //                     className='search-input'
        //                 >

        //                 </Input.Search>
        //             </Layout.Header>

        //             <Menu mode={"horizontal"} className="main-menu">
        //                 <Menu.Item key={1}>Travel home page</Menu.Item>
        //                 <Menu.Item key={2}> The weekend</Menu.Item>
        //                 <Menu.Item key={3}>package</Menu.Item>
        //                 <Menu.Item key="4"> independent </Menu.Item>
        //                 <Menu.Item key="5">  private group </Menu.Item>
        //                 <Menu.Item key="6"> cruise </Menu.Item>
        //                 <Menu.Item key="7"> hotel </Menu.Item>
        //                 <Menu.Item key="8"> Local play </Menu.Item>
        //                 <Menu.Item key="9"> Subject to swim </Menu.Item>
        //                 <Menu.Item key="10"> The private group </Menu.Item>
        //                 <Menu.Item key="11"> study </Menu.Item>
        //                 <Menu.Item key="12"> haiguan </Menu.Item>
        //                 <Menu.Item key="13"> company </Menu.Item>
        //                 <Menu.Item key="14"> super travel </Menu.Item>
        //                 <Menu.Item key="15"> play  </Menu.Item>
        //                 <Menu.Item key="16"> insurance </Menu.Item>
        //             </Menu>
        //         </div>

        //     </div>
        // )
    )
}




export const Header = withRouter(Header2);