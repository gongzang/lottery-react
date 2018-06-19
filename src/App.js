import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoxMenubar from './components/boxMenu/BoxMenubar';

import HomePage from './pages/Home';
import ResultPage from './pages/Result';
import './App.scss';
import { get } from './utils/request';

import reducer from './reducers';
import finalCreateStore from './store/configureStore'  //引入增强后的store
import { Provider  } from 'react-redux';

import homeBackground from './img/home_background3.jpg'

const divStyle = {
  backgroundImage: 'url(' + homeBackground + ')',
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundSize: 'cover',
  top: 0,
  bottom: 0
};


const store = finalCreateStore(reducer);

class App extends Component {
  componentWillMount() {
    var shelf = this;
    get('/lottery/getMenu')
      .then((res) => {
        shelf.props.setMenu(res);
      });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="center App" style={divStyle}>
            <Switch>
              <Route path="/results/:lottery_id/:lottery_no" exact="false" component={ResultPage} />
              <Route path="/" component={HomePage} />
            </Switch>
            <BoxMenubar menu={this.props.menu}>
            </BoxMenubar>
          </div>
        </Router>
      </Provider>
    );
  }
}

// function mapStateToProps(state, props) {
//   return {

//     menu: state.menu //这里的state比较简单，可以很复杂
//   };
// }
//这里把方法也转为props，以供组件使用
// function mapDispatchToProps(dispatch) {
  //使用bindActionCreators来绑定dispatch和函数
  //这是switchLamp看起来是一个函数，其实是一个对象，
  //包含了actions里定义的所有函数
  //组件中的函数就会自动dispatch到actions中和对应的函数想匹配，dispatch以后redux就接管了后续的逻辑操作
  // return bindActionCreators(ItemsActions, dispatch);

// }

// App.mixins = [ImmutableRenderMixin]
// App.propTypes = {
//   menu: PropTypes.Object
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
