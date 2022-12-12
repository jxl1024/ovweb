import React, { Component } from 'react'
// 引入样式
import './CSS/login.less'
// 引入图片
import logo from '../../assets/images/logo.png'
import { Button, Form, Input } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {createDemo1Action, createDemo2Action} from '../../redux/action_creates/test_action'


 class Login extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  handlerSubmit = () =>{
    alert('登录')
  }
  render() {
    return (
      <div className='login'>
          <header>
              <img src={logo} alt='logo' />
              <h1>Omnivision Web Portal  {this.props.demo}</h1>
          </header>
          <section>
            <h1>用户登录</h1>
            <Form
              name="basic"
              onFinish={this.handlerSubmit}
            >
              <Form.Item
            
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />}  placeholder='username'/>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    min:6,message:'Password must be greater than 6 digits '
                  }
                ]}
              >
                <Input.Password  prefix={<LockOutlined style={{color:'rgba(0,0,0,.25)'}}/>} placeholder='password'/>
              </Form.Item>

              <Form.Item
              >
                <Button type="primary" style={{'width':'100%'}} htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </section>
      </div>
    )
  }


  PasswordValidator = () => {

  }

  // PasswordValidator = async (rule, value) => {
  //   throw new Error('Something wrong!');
  // }
}

export default connect(
  state => ({demo:state.test}),
  {
      demo1:createDemo1Action,
      demo2:createDemo2Action
  }
)(Login)
