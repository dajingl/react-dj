// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { log_in, log_out } from '../../store/login/action';
// import { Form, Icon, Input, Button, Checkbox } from 'antd-mobile';
// import './Login.less'
//
// const FormItem = Form.Item;
//
// class Login extends Component {
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 this.props.log_in(values)
//                 console.log('Received values of form: ', values);
//             }
//         });
//     };
//
//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <Form onSubmit={this.handleSubmit} className="login-form">
//                 <FormItem>
//                     {getFieldDecorator('userName', {
//                         rules: [{ required: true, message: 'Please input your username!' }],
//                     })(
//                         <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     {getFieldDecorator('password', {
//                         rules: [{ required: true, message: 'Please input your Password!' }],
//                     })(
//                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     {getFieldDecorator('remember', {
//                         valuePropName: 'checked',
//                         initialValue: true,
//                     })(
//                         <Checkbox>Remember me</Checkbox>
//                     )}
//                     <a className="login-form-forgot" href="">Forgot password</a>
//                     <Button type="primary" htmlType="submit" className="login-form-button">
//                         Log in
//                     </Button>
//                     Or <a href="">register now!</a>
//                 </FormItem>
//             </Form>
//         );
//     }
// }
//
// const mapStateToProps = (state) => ({
//     currentUser: state.currentUser
// });
//
// const mapDispatchToProps = {
//     log_in,
//     log_out
// };
//
// const Logining = Form.create()(Login);
//
// export default connect(mapStateToProps, mapDispatchToProps)(Logining);
