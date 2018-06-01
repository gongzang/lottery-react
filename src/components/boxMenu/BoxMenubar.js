import React from 'react';
import './styles/boxMenu.scss';

import MenuBox from './MenuBox';

class BoxMenubar extends React.Component {

    constructor(props) {
        super(props);

        this.mouseOverState = false;

    }

    render() {
        const { menu: { menuData, menuList } } = this.props;
        return (
            <div className="wrap">
                {
                    menuList && menuList.map(
                        itemKey => {
                            return (
                                <MenuBox key={itemKey} menuData={menuData} menuItem={menuData[itemKey]}>
                                </MenuBox>
                            )
                        }
                    )
                }
            </div>
        );
    }
}


export default BoxMenubar;