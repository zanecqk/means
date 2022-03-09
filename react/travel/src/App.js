import './App.css';
import React from 'react'
import Home from './pages/home/home'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import Error from './pages/errorpage/error'
import Detail from './pages/detail/detail'
import store from './store/index'
import axios from 'axios'
// import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bbb: 1
    }
    console.log('app的全局', store.getState())
    // this.state = store.getState();
    // store.dispatch(this.state)
    this.storeChange = this.storeChange.bind(this)
  }
  storeChange() {
    this.setState(store.getState())
  }
  componentDidMount() {
    //   当store数据发生改变的时候 这个storeChange要执行一次 
    store.subscribe(this.storeChange)
    // let _token = localStorage.getItem('_token')
    // console.log('我在main里面最开头去拿 token数据', _token)
    // if (_token) {
    //   axios({
    //     method: 'get',
    //     url: 'http://127.0.0.1:3003/userinfo',
    //     params: {
    //       token: _token
    //     }
    //   }).then((res) => {
    //     console.log('持久化redux用户数据')
    //     console.log(res)
    //     if (res.data.code == '1000') {
    //       localStorage.setItem('username', res.data.info2.mobile)
    //       const action = {
    //         type: 'info',
    //         info: res.data.info2.mobile
    //       }
    //       store.dispatch(action)
    //     } else {
    //       localStorage.removeItem('_token')
    //       localStorage.removeItem('username')
    //       alert('失败')
    //     }
    //   })
    // }
  }

  render() {
    let _token = localStorage.getItem('_token')
    return (<div>
      {
        _token ? (
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/login' component={LoginPage}></Route>
              <Route path='/register' component={RegisterPage}></Route>
              <Route path="/detail/:touristRouteId" component={Detail} />
              <Route component={Error}></Route>
            </Switch>
          </BrowserRouter>
        ) : (

          <BrowserRouter>
            <Switch>

              <Route exact path='/' component={Home}></Route>
              <Route path='/login' component={LoginPage}></Route>
              <Route path='/Register' component={RegisterPage}></Route>
              <Route component={LoginPage}></Route>
            </Switch>


          </BrowserRouter>

        )

      }

    </div>









      // <BrowserRouter>
      //   <Switch>
      //     <Route exact path='/' component={Home}></Route>
      //     <Route path='/login' component={LoginPage}></Route>
      //     <Route path='/register' component={RegisterPage}></Route>
      //     <Route path="/detail/:touristRouteId" component={Detail} />
      //     <Route component={Error}></Route>
      //   </Switch>
      // </BrowserRouter>
    )
  }
}
export default App;

