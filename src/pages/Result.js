import React from 'react';

import '../styles/result.scss';
import Headline from '../components/headline/Headline';


class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="nixcont">

                    <div class="nixpair">

                        <div class="nixbg">
                            <div id="nix_h1_0" class="nix">0</div>
                            <div id="nix_h1_1" class="nix">1</div>
                            <div id="nix_h1_2" class="nix nix_open">2</div>
                            <div id="nix_h1_3" class="nix">3</div>
                            <div id="nix_h1_4" class="nix">4</div>
                            <div id="nix_h1_5" class="nix">5</div>
                            <div id="nix_h1_6" class="nix">6</div>
                            <div id="nix_h1_7" class="nix">7</div>
                            <div id="nix_h1_8" class="nix">8</div>
                            <div id="nix_h1_9" class="nix">9</div>
                        </div>
                        <div class="nixbg">
                            <div id="nix_h1_0" class="nix">0</div>
                            <div id="nix_h1_1" class="nix">1</div>
                            <div id="nix_h1_2" class="nix nix_open">2</div>
                            <div id="nix_h1_3" class="nix">3</div>
                            <div id="nix_h1_4" class="nix">4</div>
                            <div id="nix_h1_5" class="nix">5</div>
                            <div id="nix_h1_6" class="nix">6</div>
                            <div id="nix_h1_7" class="nix">7</div>
                            <div id="nix_h1_8" class="nix">8</div>
                            <div id="nix_h1_9" class="nix">9</div>
                        </div>
                    </div>
                    <div class="nixpair">

                        <div class="nixbg">
                            <div id="nix_h1_0" class="nix">0</div>
                            <div id="nix_h1_1" class="nix">1</div>
                            <div id="nix_h1_2" class="nix nix_open">2</div>
                            <div id="nix_h1_3" class="nix">3</div>
                            <div id="nix_h1_4" class="nix">4</div>
                            <div id="nix_h1_5" class="nix">5</div>
                            <div id="nix_h1_6" class="nix">6</div>
                            <div id="nix_h1_7" class="nix">7</div>
                            <div id="nix_h1_8" class="nix">8</div>
                            <div id="nix_h1_9" class="nix">9</div>
                        </div>
                        <div class="nixbg">
                            <div id="nix_h1_0" class="nix">0</div>
                            <div id="nix_h1_1" class="nix">1</div>
                            <div id="nix_h1_2" class="nix nix_open">2</div>
                            <div id="nix_h1_3" class="nix">3</div>
                            <div id="nix_h1_4" class="nix">4</div>
                            <div id="nix_h1_5" class="nix">5</div>
                            <div id="nix_h1_6" class="nix">6</div>
                            <div id="nix_h1_7" class="nix">7</div>
                            <div id="nix_h1_8" class="nix">8</div>
                            <div id="nix_h1_9" class="nix">9</div>
                        </div>
                    </div>
                </div>
                <Headline staticWords={'123456'} options={{hasClip:true}} wrapperWords={['789','987','abc','def']}/>
            </div>
        );
    }
}


export default Result;