import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import './Find.less'

const Item = List.Item;
export default class Find extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className= 'find'>
                <NavBar
                    mode="light"
                >Find</NavBar>
                <div className="content">
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >车友圈</Item>
                    </List>
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >扫一扫</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >按喇叭</Item>
                    </List>
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >附近有车</Item>
                    </List>

                </div>
            </div>
        )
    }
}
