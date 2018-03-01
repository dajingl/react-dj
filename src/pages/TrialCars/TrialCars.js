import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon,  List} from 'antd-mobile';
import { Link} from 'react-router-dom';
import { get_trial_cars_list } from '../../store/trialcars/action';
import './TrialCars.less';


const Item = List.Item;
const Brief = Item.Brief;
class TrialCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }

    componentWillMount() {
      this.props.get_trial_cars_list()
    }



    render() {
        const trialCars = this.props.trialCars
        let list;
        if (trialCars.loading) {
            list = trialCars.payload.map((item, i) => (
                <Link key={i} to={
                    {pathname: 'trial_cars/'+item.id , query:{foo: 'bar', boo:'boz'}, state:{item} }
                }>
                    <Item key={i} extra={item.latestMsgAt} align="top" thumb={"http://qiniu-cdn.carhot.cn/"+item.carImage} multipleLine>
                        {item.displayName} <Brief>{item.price+'元享试驾 '+ item.subTitle}</Brief>
                    </Item>
                </Link>
            ))
            return (
                <div className="trial-cars">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.goBack()}
                        rightContent={[
                            <Icon key="1" type="ellipsis" />
                        ]}
                    >试驾</NavBar>
                    <div className="content">
                        <List>
                            {list}
                        </List>
                    </div>

                </div>
            );
        } else {
            return (
                <div className="trial-cars">
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
    trialCars: state.trialCars
});

const mapDispatchToProps = {
     get_trial_cars_list
};

export default connect(mapStateToProps, mapDispatchToProps)(TrialCars);
