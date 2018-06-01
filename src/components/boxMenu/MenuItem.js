import React from 'react';

class menuItem extends React.Component {

    render() {
        const { subItem: { lottery_name }, showClassName } = this.props;
        return (
            <div className={`menuItem subMenuItem ${showClassName}`}>
                <h2>{lottery_name}</h2>
            </div>
        );
    }
}


export default menuItem;