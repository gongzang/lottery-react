import React from 'react';
import './styles/nix.scss';
import NixPair from './NixPair';


class Nix extends React.Component {

    render() {
        const { ballResult } = this.props;
        return (
            <div class="nixcont">
                {ballResult.map((ballNo) => {
                    return (
                        <NixPair ballNo={ballNo} />
                    );
                })}
            </div>
        );
    }
}


export default Nix;