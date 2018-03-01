import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon,  List, Tag} from 'antd-mobile';
import { get_trial_car } from '../../store/trialcar/action';
import './TrialCar.less';
import { IsCarousel } from '../../components/Carousel/Carousel';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

import {Flow} from './flow'


class TrialCars extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.get_trial_car(this.props.match.params.id)
    }

    todo(isLogin) {
        console.log(this)
        if(isLogin) {

        }
        this.props.history.push('/login')
    }



    render() {
        const isLogin = this.props.currentUser.loading
        const trialCar =this.props.trialCar;
        const data = trialCar.payload;
        if (trialCar.loading) {
            return (
                <div className="trial-car">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.goBack()}
                        rightContent={[
                            <Icon key="1" type="ellipsis" />
                        ]}
                    >试驾</NavBar>

                    <div className="content">
                        <div>
                            <div className="title">
                                <span>{data.displayName}</span>
                                <p className="font-style">{data.subTitle}</p>
                            </div>

                            <IsCarousel data = {data.images}/>

                            <div className="prompt">
                                <span>¥{data.price}</span>
                                <Tag small>{data.couponName}</Tag>
                                <p className="font-style">预约有效期至:{data.expiredDate}</p>
                                <p className="font-style">指导价: {data.guide}</p>
                            </div>
                        </div>

                        <div>
                            <h4>经销商信息</h4>
                            <p className="font-style">{data.carShopName}</p>
                            <p className="font-style">{data.address}</p>
                        </div>

                        <div>
                            <Flow/>
                        </div>

                        <div className="Car-shop">
                            <h4>经销商信息</h4>
                        </div>

                        <Button type="primary" onClick = {() => this.todo(isLogin)} >抢订试驾</Button>
                    </div>
                </div>

            );
        } else {
            return (
                <div className="trial-car">
                    <NavBar
                        mode="light"
                    >试驾</NavBar>

                </div>
            );
        }


    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    trialCar: state.trialCar
});

const mapDispatchToProps = {
    get_trial_car
};

export default connect(mapStateToProps, mapDispatchToProps)(TrialCars);
