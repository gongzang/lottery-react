import React from 'react';

import { getDefaultStyle } from '../../../utils/util';

function headlineProvider(headlineData) {
    return function (Comp) {

        const initialHeadlineState = {
            showingWord: '',
            wrapperStyle: {
                width: '2px',
                transition: 'all',
                WebkitTransition: 'all', // note the capital 'W' here
                msTransition: 'all'
            }
        };

        const defaultOptions = {
            animationDelay: 2500,
            //loading bar effect
            // barAnimationDelay: 3800,
            // barWaiting: barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
            //letters effect
            lettersDelay: 50,
            //type effect
            typeLettersDelay: 150,
            // selectionDuration: 500,
            // typeAnimationDelay: selectionDuration + 800,
            //clip effect 
            revealDuration: 600,
            revealAnimationDelay: 5000,
            hasClip: false,
            hasLoadingBar: false,
            hasType: false

        };

        class HeadlineComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = initialHeadlineState;

                this.animateType = 'hide';
                this.options = defaultOptions;
                this.setOptions();

                this.handleAnimationend = this.handleAnimationend.bind(this);
            }

            setOptions() {
                if (this.props.options) {
                    this.options = {
                        ...this.options,
                        ...this.props.options
                    };
                }
            }


            componentDidMount() {

                this.initHeadline();
            }


            initHeadline() {
                //insert <i> element for each letter of a changing word
                // singleLetters($('.cd-headline.letters').find('b'));
                //initialise headline animation
                this.animateHeadline();
            }

            // function singleLetters($words) {
            //     $words.each(function(){
            //         var word = $(this),
            //             letters = word.text().split(''),
            //             selected = word.hasClass('is-visible');
            //         for (i in letters) {
            //             if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
            //             letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
            //         }
            //         var newLetters = letters.join('');
            //         word.html(newLetters);
            //     });
            // }

            animateHeadline() {
                let duration = this.options.animationDelay;
                let { wrapperWords } = this.props;

                // if (this.options.hasLoadingBar) {
                //     duration = this.options.barAnimationDelay;
                //     setTimeout(function () { headline.find('.cd-words-wrapper').addClass('is-loading') }, this.options.barWaiting);
                // } else 
                if (this.options.hasClip) {
                    // let spanWrapper = document.getElementById('spanWrapper');
                    // if(spanWrapper && spanWrapper.children && spanWrapper.children.length > 0){
                    this.switchWord(this.takeNext());
                    // }

                    // } else if (!this.options.type) {
                    //     //assign to .cd-words-wrapper the width of its longest word
                    //     var words = headline.find('.cd-words-wrapper b'),
                    //         width = 0;
                    //     words.each(function () {
                    //         var wordWidth = $(this).width();
                    //         if (wordWidth > width) width = wordWidth;
                    //     });
                    //     headline.find('.cd-words-wrapper').css('width', width);
                };

                //trigger animation
                // if (wrapperWords && wrapperWords.length > 0) {
                //     setTimeout(() => {
                //         this.hideWord(wrapperWords[0])
                //     }, duration);
                // }
            }


            handleAnimationend() {
                const { showingWord } = this.state;

                if (this.animateType === 'show') {
                    setTimeout(
                        () => {
                            this.hideWord()
                        },
                        this.options.revealAnimationDelay
                    );
                } else if (this.animateType === 'hide') {
                    var nextWord = this.takeNext();
                    this.switchWord(nextWord);

                }
            }

            hideWord() {
                this.animateType = 'hide';
                var nextWord = this.takeNext();

                if (this.options.hasClip) {
                    this.setState({
                        wrapperStyle: {
                            ...this.state.wrapperStyle,
                            transition: `width ${this.options.revealDuration}ms`,
                            width: '2px'
                        }
                    });
                }
            }

            showWord(target) {
                this.animateType = 'show';
                if (this.options.hasClip) {

                    let newWidth = parseInt(getDefaultStyle(target, 'width')) + 10;

                    let r = Math.floor(Math.random() * 255);
                    let g = Math.floor(Math.random() * 255);
                    let b = Math.floor(Math.random() * 255);
                    let color = 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
                    this.setState({
                        wrapperStyle: {
                            transition: `width ${this.options.revealDuration}ms`,
                            width: `${newWidth}px`,
                            color
                        }
                    });
                }
            }

            getShowingB() {
                const { showingWord } = this.state;
                const { wrapperWords } = this.props;
                let index = -1;
                if (wrapperWords && wrapperWords.length > 0) {
                    index = wrapperWords.indexOf(showingWord);
                } else {
                    return undefined;
                }
                let spanWrapper = document.getElementById('spanWrapper');
                if (spanWrapper && spanWrapper.children && spanWrapper.children.length > 0) {
                    this.showWord(spanWrapper.children[0]);
                    if (index === -1) return spanWrapper.children[0];
                    else return spanWrapper.children[index];
                }
            }

            takeNext() {
                const { showingWord } = this.state;
                const { wrapperWords } = this.props;
                let index = -1;
                if (wrapperWords && wrapperWords.length > 0) {
                    index = wrapperWords.indexOf(showingWord);
                } else {
                    return '';
                }
                if (index++ === -1) return wrapperWords[0];
                return (index === wrapperWords.length) ? wrapperWords[0] : wrapperWords[index];
            }

            switchWord(newWord) {
                this.setState({
                    showingWord: newWord
                }, () => this.showWord(this.getShowingB()));

            }


            render() {
                const { showingWord, wrapperStyle } = this.state;
                return (
                    <Comp
                        {...this.props}
                        showingWord={showingWord}
                        wrapperStyle={wrapperStyle}
                        handleAnimationend={this.handleAnimationend}
                    />
                );
            }
        }

        return HeadlineComponent;
    }
}

export default headlineProvider;