import React from 'react';

import '../styles/result.scss';
import Headline from '../components/headline/Headline';
import Nix from '../components/nix/Nix';
import { get } from '../utils/request';
import PageBox from '../components/pageBox/PageBox';


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lotteryTitle: 'resultTitle',
            ballResult: [[0, 2], [0, 6], [1, 3], [2, 2], [3, 1]],
            wrapperWords: ['789', '987', 'abc', 'def']
        };
    }
    componentWillReceiveProps(nextProps) {
        this.initResult(nextProps.match.params.lottery_id);
    }
    componentWillMount() {
        this.initResult(this.props.match.params.lottery_id);
    }

    initResult(lottery_id) {
        get(`/lottery/queryNewest?lottery_id=${lottery_id}`)
            .then((res) => {
                this.setState({
                    maxNo: res.maxNo,
                    lotteryNo: res.lottery_no,
                    lotteryTitle: res.lottery_name || '',
                    ballResult: res.lotteryResArr || [],
                    wrapperWords: res.lotteryMessage || []
                });
            });
    }

    render() {
        const { ballResult, wrapperWords, lotteryTitle, maxNo, lotteryNo } = this.state;
        return (
            <div className='ResultDiv'>
                <h1 className='resultTitle'>{lotteryTitle}</h1>
                <Nix ballResult={ballResult} />
                <Headline staticWords='' options={{ hasClip: true }} wrapperWords={wrapperWords} />
                <PageBox sequence='reverseSequence' beforeLabel='第' afterLabel='期' maxPage={maxNo} currPage={lotteryNo} />
            </div>
        );
    }
}


export default Result;