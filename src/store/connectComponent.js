import * as ItemsActions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function (comp) {

    function mapStateToProps(state, props) {
        return {

           ...state
        };
    }
    //这里把方法也转为props，以供组件使用
    function mapDispatchToProps(dispatch) {
        //使用bindActionCreators来绑定dispatch和函数
        //这是switchLamp看起来是一个函数，其实是一个对象，
        //包含了actions里定义的所有函数
        //组件中的函数就会自动dispatch到actions中和对应的函数想匹配，dispatch以后redux就接管了后续的逻辑操作
        return bindActionCreators(ItemsActions, dispatch);

    }
    return connect(mapStateToProps, mapDispatchToProps)(comp);
}