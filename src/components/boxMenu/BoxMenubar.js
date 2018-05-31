import React from 'react';
import './styles/boxMenu.scss';

import MenuBox from './MenuBox';

class BoxMenubar extends React.Component {

    constructor(props) {
        super(props);

        this.mouseOverState = false;

    }

    promiseAnimate(item, isShow) {
        return new Promise((resolve, reject) => {
            if (isShow) {
                item.className += ' show';
                setTimeout(() => {
                    resolve(isShow);
                }, 100);
            } else {
                item.className += ' show';
                setTimeout(() => {
                    resolve(isShow);
                }, 100);
            }
        });
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