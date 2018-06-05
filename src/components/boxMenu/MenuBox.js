import React from 'react';

import MenuItem from './MenuItem';

import { isParent } from '../../utils/util'

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
        this.willShowIndex = 0;
        this.isShow = false;
        this.promiseFlag = false;

    }

    promiseAnimate() {
        const _self = this;
        return new Promise((resolve, reject) => {
            if ((!_self.isShow && _self.willShowIndex >= 0) || (_self.isShow && _self.willShowIndex < _self.subMenu.length)) {
                _self.setState({
                    ..._self.state,
                    [_self.subMenu[this.willShowIndex]]: (this.isShow ? 'show' : '')
                });
                this.willShowIndex += (this.isShow ? 1 : -1);
                setTimeout(() => {
                    resolve();
                }, 200);
            } else {
                reject();
            }
        });
    }

    handlerMouseOver(event) {
        this.isShow = true;
        if (this.promiseFlag) {
            return;
        }
        this.promiseFlag = true;

        this.showOrHideItems();
    }
    handlerMouseOut(event) {
        if (isParent(event.target, this)) {
            return;
        }
        this.isShow = false;
        if (this.promiseFlag) {
            return;
        }
        this.promiseFlag = true;

        this.showOrHideItems();
    }

    showOrHideItems() {
        this.promiseAnimate()
            .then(() => this.showOrHideItems(), () => this.promiseFlag = false);
    }



    render() {
        const { menuItem: { name, subMenu,url }, menuData } = this.props;
        return (
            <div className="menuItem" onMouseOver={(event) => this.handlerMouseOver(event)} onMouseOut={(event) => this.handlerMouseOut(event)}>
                <p>{name}</p>
                {
                    subMenu && subMenu.map(
                        subItemKey => {
                            return (
                                <MenuItem url={url} key={name + '_' + subItemKey} showClassName={this.state[subItemKey]} subItem={menuData[subItemKey]}>
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