import React from 'react';

import MenuItem from './MenuItem';

class MenuBox extends React.Component {

    render() {
        const { menuItem: { name, subMenu }, menuData } = this.props;
        return (
            <div className="menuItem">
                <h2>{name}</h2>
                {
                    subMenu && subMenu.map(
                        subItemKey => {
                            return (
                                <MenuItem key={name + '_' + subItemKey} subItem={menuData[subItemKey]}>
                                </MenuItem>
                            )
                        }
                    )
                }
            </div>
        );
    }
}


export default MenuBox;