import { message, Button } from 'antd';

import React, { Component } from 'react'
import store from '../../store/index'

import './login.css';
import axios from "axios";
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            password: ""
        }
        // this.storeChange = this.storeChange.bind(this)
    }
    change(e) {
        console.log(e.target.value);
        //设置数据的值，用this.setState({})
        this.setState({
            mobile: e.target.value
        })
    }
    change2(e) {
        console.log(e.target.value);
        //设置数据的值，用this.setState({})
        this.setState({
            password: e.target.value
        })
    }
    // storeChang() {
    //     this.setState(store.getState())
    // }

    login() {
        const { history } = this.props
        console.log('进入login')
        axios({
            url: 'http://127.0.0.1:3003/login',
            method: 'post',
            data: {
                mobile: this.state.mobile,
                password: this.state.password,
            }
        }).then(response => {
            console.log(response)
            console.log(response.data.mobile)
            message.info('登录成功准备跳转');
            localStorage.setItem('_token', response.data.data._token)
            localStorage.setItem('username', response.data.mobile)
            let _token = localStorage.getItem('_token')
            console.log('我在main里面最开头去拿 token数据', _token)
            if (_token) {
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:3003/userinfo',
                    params: {
                        token: _token
                    }
                }).then((res) => {
                    console.log('持久化redux用户数据')
                    console.log(res)
                    if (res.data.code == '1000') {
                        localStorage.setItem('username', res.data.info2.mobile)
                        const action = {
                            type: 'info',
                            info: res.data.info2.mobile
                        }
                        store.dispatch(action)
                    } else {
                        localStorage.removeItem('_token')
                        localStorage.removeItem('username')
                        alert('失败')
                    }
                })
            }
            history.push('/')
        }).catch(error => {
            message.error('login失败');
        })
        this.setState(store.getState())
    }
    //   生命周期


    render() {

        return (
            <div>

                <div className='registerWrap'>
                    <div className='tuerqi'>
                        <img src="https://ftp.bmp.ovh/imgs/2021/04/2b8fc4626b2ba902.jpg" />
                    </div>

                    <div className='registerWrap2'>
                        <h1>手机号</h1>
                        <div>
                            <input type="text" value={this.state.mobile} onChange={this.change.bind(this)} />
                        </div>
                        <h1>密码</h1>
                        <div>
                            <input type="text" value={this.state.password} onChange={this.change2.bind(this)} />
                        </div>
                        <button onClick={this.login.bind(this)} className='button1'>
                            登录
                        </button>
                    </div>


                </div>




            </div>
        )
    }
}



export default LoginPage