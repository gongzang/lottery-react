import React from 'react';
import NixElement from './NixElement';


class NixPair extends React.Component {

    render() {
        const { ballNo } = this.props;
        return (
            <div class="nixpair">
                {ballNo.map((ballNoDigit) => {
                    return (
                        <NixElement ballNoDigit={ballNoDigit} />
                    );
                })}
            </div>
        );
    }
}


export default NixPair;