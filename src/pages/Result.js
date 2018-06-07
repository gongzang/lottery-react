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
        this.initResult(nextProps.match.params.lottery_id, nextProps.match.params.lottery_no);
    }
    componentWillMount() {
        this.initResult(this.props.match.params.lottery_id, this.props.match.params.lottery_no);
    }

    initResult(lottery_id, lottery_no) {
        if (lottery_no === 'newest') {
            get(`/lottery/queryNewest?lottery_id=${lottery_id}`)
                .then((res) => {
                    this.setResToState(res);
                });
        } else {
            get(`/lottery/queryLotteryResult?lottery_id=${lottery_id}&lottery_no=${lottery_no}`)
                .then((res) => {
                    this.setResToState(res);
                });
        }
    }

    setResToState(res) {
        this.setState({
            maxNo: res.maxNo,
            lotteryNo: res.lottery_no,
            lotteryTitle: res.lottery_name || '',
            ballResult: res.lotteryResArr || [],
            wrapperWords: res.lotteryMessage || []
        });
    }

    render() {
        const { ballResult, wrapperWords, lotteryTitle, maxNo, lotteryNo } = this.state;
        return (
            <div className='ResultDiv'>
                <h1 className='resultTitle'>{lotteryTitle}</h1>
                <Nix ballResult={ballResult} />
                <Headline staticWords='' options={{ hasClip: true }} wrapperWords={wrapperWords} />
                <PageBox {...this.props} sequence='reverseSequence' beforeLabel='第' afterLabel='期' maxPage={maxNo} currPage={lotteryNo} />
            </div>
        );
    }
}


export default Result;