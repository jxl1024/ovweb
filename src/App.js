// import './App.css';
import './App.less';
// 引入注册路径
import { Route,Routes } from 'react-router-dom';
// 引入路由组件
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import { Component } from 'react';

export default class App extends Component{
  render(){
    return(
      <div className='app'>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    )
  }
}
