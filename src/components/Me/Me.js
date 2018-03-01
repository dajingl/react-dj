import React, { Component } from 'react';
import { NavBar,  List } from 'antd-mobile';
import { Link} from 'react-router-dom';
import './Me.less'

const Item = List.Item;
const Brief = Item.Brief;
export default class Me extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
       console.log(this.props)
    }

    render() {
        const isLogin = this.props.loading
        const user = this.props.payload
        return (
            <div className= 'me'>
                <NavBar
                    mode="light"
                >ME</NavBar>

                <div className="content">
                    <List className="my-list">
                        <Link to = {isLogin ? '' : '/login'}>
                            <Item
                                arrow="horizontal"
                                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                                multipleLine
                            >
                                {user ? user.displayName : '登录吧'} <Brief> 看车号: {user ? user.displayName : '12345'}  </Brief>
                            </Item>
                        </Link>


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
