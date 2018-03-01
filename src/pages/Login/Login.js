import React,{ Component } from 'react'
import { log_in } from '../../store/login/action';
import { connect } from 'react-redux';
import  './Login.less'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: ""
        }
    }
    //监听input中的数据，保存到state中
    changeUsername(e){
        let uname = e.target.value;
        this.setState({
            userName: uname
        });
        console.log(this.state.userName);
    }
    changePassword(e){
        let upwd = e.target.value;
        this.setState({
            userPassword: upwd
        })
    }

    //点击登录按钮，触发后台接口提供的验证，对数据的处理等方法
    handleClick(){
        if(this.state.userName === ""||this.state.userName === null){
            this.setState({
                unameHelp: "* 用户名不能为空"
            })
        }else if(this.state.userPassword === ""||this.state.userPassword === null){
            this.setState({
                unameHelp: "",
                upwdHelp: "* 密码不能为空"
            })
        }else{
            this.setState({ //清除help-block提示文字
                unameHelp: "",
                upwdHelp: ""
            });

            this.props.login(this.state.userName,this.state.userPassword);
            console.log(this.state);
        }
    }
    render(){
        return (
            <div className="login-box">
                ​
                <div className="login-title">登   录</div>
                <form action="" className="form-horizontal">
                    <div className="form-group input-text">
                        <label htmlFor="uname">电话</label>
                        <input type="text" className="form-control" name="username" id="uname" ref="uname" placeholder="手机号/用户名"
                               onChange={this.changeUsername.bind(this)}/>
                        <span className="help-block">{this.state.unameHelp}</span>
                    </div>
                    ​
                    <div className="form-group input-text">
                        <label htmlFor="upwd">验证码</label>
                        <input type="password" className="form-control" name="password" id="upwd" ref="upwd" placeholder="密码"
                               onChange={this.changePassword.bind(this)}/>
                        <span className="help-block">{this.state.upwdHelp}</span>
                    </div>
                    ​
                    ​
                    <div className="form-group">
                        <button type="button" onClick={this.handleClick.bind(this,this.state.userName,this.state.userPassword)} className="btn btn-primary login-btn">登录</button>
                    </div>
                </form>
                ​
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
});

const mapDispatchToProps = {
    log_in
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

