import React from 'react';

import MenuItem from './MenuItem';

class MenuBox extends React.Component {
    constructor(props) {
        super(props);
        const { menuItem: { subMenu } } = this.props;
        const itemsShowClass = {};
        subMenu.forEach(
            (value) => {
                itemsShowClass[value] = '';
            }
        );
        this.state = itemsShowClass;
        this.subMenu = subMenu;
    }

    promiseAnimate(index, isShow) {
        const _self = this;
        return new Promise((resolve, reject) => {
            _self.setState({
                ..._self.state,
                [_self.subMenu[index]]: (isShow ? 'show' : '')
            });
            setTimeout(() => {
                resolve(isShow);
            }, 300);
        });
    }

    handlerMouseOver(event) {
        let index = 0;
        const _self = this;
        function showOrHideItems(showFlag) {
            if (index < _self.subMenu.length) {
                _self.promiseAnimate(index++, showFlag)
                    .then(showOrHideItems);
            }
        }
        showOrHideItems(true);
    }
    handlerMouseOut(event) {
        console.log(event);
        let index = this.subMenu.length;
        const _self = this;
        function showOrHideItems(showFlag) {
            if (index >= 0) {
                _self.promiseAnimate(index--, showFlag)
                    .then(showOrHideItems);
            }
        }
        showOrHideItems(false);
    }



    render() {
        const { menuItem: { name, subMenu }, menuData } = this.props;
        return (
            <div className="menuItem" onMouseOver={(event) => this.handlerMouseOver(event)} onMouseOut={(event) => this.handlerMouseOut(event)}>
                <h2>{name}</h2>
                {
                    subMenu && subMenu.map(
                        subItemKey => {
                            return (
                                <MenuItem key={name + '_' + subItemKey} showClassName={this.state[subItemKey]} subItem={menuData[subItemKey]}>
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