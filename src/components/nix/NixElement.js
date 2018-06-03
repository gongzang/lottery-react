import React from 'react';

const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class NixElement extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="nixbg">
                {letters.map((letter) => {
                    return (
                        <div className={`nix ${letter === this.props.ballNoDigit ? 'nix_open' : ''}`}>{letter}</div>
                    );
                })}
            </div>
        );
    }
}


export default NixElement;