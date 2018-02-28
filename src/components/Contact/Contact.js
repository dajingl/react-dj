import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import './Contact.less'

const Item = List.Item;
export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className= 'contact'>
                <NavBar
                    mode="light"
                >Contact</NavBar>
                <div className="content">
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >我的收藏</Item>
                    </List>
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >好车友</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >应用号</Item>
                    </List>
                </div>
            </div>
        )
    }
}
