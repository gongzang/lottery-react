import React from 'react';

import '../styles/result.scss';
import Headline from '../components/headline/Headline';
import Nix from '../components/nix/Nix';


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ballResult: [[0, 2], [0, 6], [1, 3], [2, 2], [3, 1]],
            wrapperWords: ['789', '987', 'abc', 'def']
        };
    }

    render() {
        const {ballResult,wrapperWords} = this.state;
        return (
            <div>
                <Nix ballResult={ballResult} />
                <Headline staticWords={'123456'} options={{ hasClip: true }} wrapperWords={wrapperWords} />
            </div>
        );
    }
}


export default Result;