import React from 'react';
import PageBox from '../components/pageBox/PageBox';
import ZebraTable from '../components/zebraTable/ZebraTable';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title:'title1',
                field:'field1'
            },
            {
                title:'title2',
                field:'field2'
            },
            {
                title:'title3',
                field:'field3'
            },
            {
                title:'title4',
                field:'field4'
            }
        ];
        this.datas = [
            {
                field1:'字段11',
                field2:'字段12',
                field3:'字段13',
                field4:'字段14'

            },
            {
                field1:'字段21',
                field2:'字段22',
                field3:'字段23',
                field4:'字段24'

            },
            {
                field1:'字段31',
                field2:'字段32',
                field3:'字段33',
                field4:'字段34'

            },
            {
                field1:'字段41',
                field2:'字段42',
                field3:'字段43',
                field4:'字段44'

            },
            {
                field1:'字段51',
                field2:'字段52',
                field3:'字段53',
                field4:'字段54'

            }

        ];
    }

    render() {
        return (
            <div>
                This new home!
                <ZebraTable title='test222' columns={this.columns} datas={this.datas} />
            </div>
        );
    }
}


export default Home;