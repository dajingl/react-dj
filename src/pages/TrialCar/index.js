import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon,  List} from 'antd-mobile';
import { get_trial_car } from '../../store/trialcar/action';
import './TrialCar.less';


class TrialCars extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.get_trial_car(this.props.match.params.id)
    }



    render() {
        const trialCar =this.props.trialCar

        if (trialCar && trialCar.payload) {
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
