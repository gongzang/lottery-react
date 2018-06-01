import React from 'react';

class menuItem extends React.Component {

    render() {
        const { subItem: { lottery_name }, showClassName } = this.props;
        return (
            <div className={`menuItem subMenuItem ${showClassName}`}>
                <p>{lottery_name}</p>
            </div>
        );
    }
}


export default menuItem;