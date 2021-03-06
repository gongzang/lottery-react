import React from 'react';

import './styles/pageBox.scss';
import PageItem from './PageItem';
//正序 default
const SEQUENCE_TYPE_POSITIVE = ' positiveSequence';
//倒序
const SEQUENCE_TYPE_REVERSE = 'reverseSequence';
//默认最大页数
const MAX_PAGE = 1024;

const initState = {
    currPage: 1,
    pageSize: 5,
    maxPage: MAX_PAGE
};


class PageBox extends React.Component {

    constructor(props) {
        super(props);
        const { currPage, pageSize, maxPage } = props;
        this.state = {
            currPage: currPage || initState.currPage,
            currPage: pageSize || initState.pageSize,
            currPage: maxPage || initState.maxPage
        };
    }

    componentWillReceiveProps(nextProps) {
        const { currPage, pageSize, maxPage } = nextProps;
        this.setState({
            currPage: currPage || initState.currPage,
            pageSize: pageSize || initState.pageSize,
            maxPage: maxPage || initState.maxPage
        });
    }

    render() {
        const { currPage, pageSize, maxPage } = this.state;
        const { beforeLabel, afterLabel, sequence, match } = this.props;
        let pages = [currPage];
        let count = 1;
        let flag = false;
        while (pages.length < Math.min(5, maxPage)) {
            let indexPage = 0;
            indexPage = !flag ? (currPage - count) : (currPage + count);
            if (indexPage >= 1 && indexPage <= maxPage) {
                pages.push(indexPage);
            }
            if (flag) {
                count++;
            }
            flag = !flag;
        }
        pages.sort((a, b) => {
            switch (sequence) {
                case SEQUENCE_TYPE_POSITIVE:
                    return a - b;
                case SEQUENCE_TYPE_REVERSE:
                    return b - a;
                default:
                    return a - b;
            }
        });
        const nowIndex = pages.indexOf(currPage);
        return (
            <ul className="pagination">
                <PageItem match={match} className="page-item" pageType='left' pageNo={pages[(nowIndex - 1) > 0 ? (nowIndex - 1) : nowIndex]} currPage={currPage} />

                {pages && pages.map(
                    pageNo => {
                        return (
                            <PageItem match={match} class="page-item" pageNo={pageNo} beforeLabel={beforeLabel} afterLabel={afterLabel} currPage={currPage} />
                        )
                    }
                )
                }
                <PageItem match={match} className="page-item" pageType='right' pageNo={pages[(nowIndex + 1) < pages.length ? (nowIndex + 1) : nowIndex]} currPage={currPage} />
            </ul>
        );
    }
}


export default PageBox;