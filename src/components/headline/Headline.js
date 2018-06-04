import React from 'react';
import headlineProvider from './utils/headlineProvider';

import './styles/headline.scss';

import { getDefaultStyle } from '../../utils/util';


class Headline extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { staticWords, options, wrapperWords, wrapperStyle, showingWord, handleAnimationend } = this.props;
        return (
            <p className={`cd-headline ${options.hasClip ? 'clip' : ''} ${options.hasType ? 'type' : ''}`}>
                <span className='staticTip'>{staticWords}</span>
                <span id="spanWrapper" class="cd-words-wrapper" style={wrapperStyle} onTransitionEnd={handleAnimationend}>
                    {wrapperWords.map((word) => {
                        return (
                            <b className={`${showingWord === word ? 'is-visible' : 'is-hidden'}`}>{word}</b>
                        );
                    })}
                </span>
            </p>
        );
    }
}

Headline = headlineProvider()(Headline);

export default Headline;