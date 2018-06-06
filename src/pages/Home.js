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
                <PageBox sequence='reverseSequence' beforeLabel='第' afterLabel='页'/>
            </div>
        );
    }
}


export default Home;