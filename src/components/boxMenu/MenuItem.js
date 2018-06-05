import React from 'react';
import { NavLink } from 'react-router-dom';
class menuItem extends React.Component {

    render() {
        const { subItem: { lottery_name,lottery_id }, url, showClassName } = this.props;
        return (
            <div className={`menuItem subMenuItem ${showClassName}`}>
                <NavLink to={`/${url}/${lottery_id}`}>{lottery_name}</NavLink>
            </div>
        );
    }
}


export default menuItem;