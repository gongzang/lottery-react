import React from 'react';
import connectComponent from '../store/connectComponent';

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/tree');

// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps){

        console.log(nextProps);
        const { homeData: { newestLotteryData } } = nextProps;
        if(newestLotteryData && !newestLotteryData.name) {
            return;
        }

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',

                    data: [newestLotteryData],

                    top: '18%',
                    bottom: '14%',

                    layout: 'radial',

                    symbol: 'emptyCircle',

                    symbolSize: 7,

                    initialTreeDepth: 3,

                    animationDurationUpdate: 750

                }
            ]
        });
    }

    render() {
        return (
            <div className='ResultDiv'>
                This new home!
                <div id="main" style={{ width: '50rem', height: '50rem' }}></div>
            </div>
        );
    }
}


export default connectComponent(Home);