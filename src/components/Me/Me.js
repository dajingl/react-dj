import React, { Component } from 'react';
import { NavBar,  List } from 'antd-mobile';
import './Me.less'

const Item = List.Item;
const Brief = Item.Brief;
export default class Me extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className= 'me'>
                <NavBar
                    mode="light"
                >ME</NavBar>

                <div className="content">
                    <List className="my-list">
                        <Item
                            arrow="horizontal"
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            multipleLine
                            onClick={() => {}}
                        >
                            Title <Brief>subtitle</Brief>
                        </Item>
                    </List>
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >我的车</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >钱包</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => {}}
                            arrow="horizontal"
                        >卡劵</Item>
                    </List>
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >订单</Item>
                    </List>
                    <List>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => {}}
                        >设置</Item>
                    </List>
                </div>
            </div>
        )
    }
}
