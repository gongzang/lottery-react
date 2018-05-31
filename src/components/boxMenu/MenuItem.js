import React from 'react';

class menuItem extends React.Component {

    render() {
        const { subItem: { lottery_name } } = this.props;
        return (
            <div className='menuItem subMenuItem'>
                <h2>{lottery_name}</h2>
            </div>
        );
    }
}


export default menuItem;