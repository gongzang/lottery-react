import React from 'react';
import PageBox from '../components/pageBox/PageBox';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This new home!
                <PageBox/>
            </div>
        );
    }
}


export default Home;