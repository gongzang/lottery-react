import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import BoxMenubar from './components/boxMenu/BoxMenubar';
import Layout from './routes/index';

import './App.scss';
import { get } from './utils/request';


import homeBackground from './img/home_background3.jpg'
import connectComponent from './store/connectComponent';

const divStyle = {
  backgroundImage: 'url(' + homeBackground + ')',
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundSize: 'cover',
  top: 0,
  bottom: 0
};



class App extends Component {
  componentDidMount() {
    var shelf = this;
    get('/lottery/getMenu')
      .then((res) => {
        shelf.props.setMenu(res);
        shelf.props.setHomeData({ newestLotteryData: res.homeList });
      });
  }
  render() {
    return (
      <Router>
        <div className="center App" style={divStyle}>
          <Layout/>
          <BoxMenubar menu={this.props.menu}>
          </BoxMenubar>
        </div>
      </Router>
    );
  }
}


// App.mixins = [ImmutableRenderMixin]
// App.propTypes = {
//   menu: PropTypes.Object
// }
export default connectComponent(App);
