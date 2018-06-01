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
            _self.setState({
                ..._self.state,
                [_self.subMenu[this.willShowIndex]]: (this.isShow ? 'show' : '')
            });
            this.willShowIndex += (this.isShow?1:-1);
            setTimeout(() => {
                resolve();
            }, 200);
        });
    }

    handlerMouseOver(event) {
        this.isShow = true;
        if(this.promiseFlag) {
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
        if(this.promiseFlag) {
            return;
        }
        this.promiseFlag = true;
        
        this.showOrHideItems();
    }

    showOrHideItems() {
        if ((!this.isShow && this.willShowIndex >= 0) || (this.isShow && this.willShowIndex < this.subMenu.length)) {

            this.promiseAnimate()
                .then(()=>this.showOrHideItems());
        } else {
            this.promiseFlag = false;
        }
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