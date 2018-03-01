import React, { Component } from 'react';
import { NavBar, Icon,  List} from 'antd-mobile';
import { Link} from 'react-router-dom';
import './Car.less'

const Item = List.Item;
const Brief = Item.Brief;
export default class Car extends Component {
    constructor(props) {
        super(props);
        const  _this = this;
    }

    pushTo(item) {
        console.log(item)
        switch (item.name)
        {
            case '试驾':
                return 'trial_car';
            case '车商城':
                return '2';
            case '车头条':
                return '3';
            case '我的订单':
                return '4';
            default:
                return 'trial_cars'
        }
    }

    render() {
        const subList = this.props.list
        let list;

        if (subList.loading) {
            list = subList.payload.map((item, i) => (
                <Link key={i} to={this.pushTo(item.name)} >
                    <Item key={i} extra={item.latestMsgAt} align="top" thumb={"http://qiniu-cdn.carhot.cn/"+item.logo} multipleLine>
                        {item.name} <Brief>{item.latestMsg}</Brief>
                    </Item>
                </Link>
            ))

            return (
                <div className= 'car'>
                    <NavBar
                        mode="light"
                    >Car</NavBar>

                    <div className="content">
                        <List>
                            {list}
                        </List>
                    </div>
                </div>
            )
        } else {

            return (
                <div className= 'car'>
                    <NavBar
                        mode="light"
                    >Car</NavBar>

                    <div className="content">

                    </div>
                </div>
            )
        }



    }
}
