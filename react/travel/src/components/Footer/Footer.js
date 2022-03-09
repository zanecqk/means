import React from 'react'

import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'




class Footer extends React.Component {
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
            <div  >
                <Layout.Footer>
                    <Typography.Title level={3} style={{ textAlign: 'center' }}>
                        版权所有 @ React 旅游网
                    </Typography.Title>
                </Layout.Footer>
            </div>
        )
    }
}


export default Footer;