import React from 'react'
import './SideMenu.css'
import { sideMenuList } from '../../mockdata/db'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'
class SideMenu extends React.Component {
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
            <Menu mode="vertical" className="side-menu">
                {sideMenuList.map((m, index) => (
                    <Menu.SubMenu
                        key={Math.random() * 100}
                        title={
                            <span>
                                <GifOutlined />
                                {m.title}
                            </span>
                        }
                    >
                        {m.subMenu.map((sm, smindex) => (
                            <Menu.SubMenu
                                key={Math.random() * 100}
                                title={
                                    <span>
                                        <GifOutlined />
                                        {sm.title}
                                    </span>
                                }
                            >
                                {sm.subMenu.map((sms, smsindex) => (
                                    <Menu.Item key={Math.random() * 100}>
                                        <span>
                                            <GifOutlined />
                                            {sms}
                                        </span>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ))}
                    </Menu.SubMenu>
                ))}
            </Menu>
        )
    }
}


export default SideMenu;