import React from 'react';
import './styles/boxMenu.scss';

class BoxMenubar extends React.Component {

    render() {
        const { menu: { menuData, menuList } } = this.props;
        return (
            <div className="wrap">
                {
                    menuList && menuList.map(
                        item => {
                            return (
                                <div className="menuItem">
                                {console.log(menuData)}
                                    <h2>{menuData[item].name}</h2>
                                    {
                                        menuData[item].subMenu && menuData[item].subMenu.map(
                                            subItem => {
                                                return (
                                                    <div className='menuItem subMenuItem'>
                                                        <h2>{menuData[subItem].lottery_name}</h2>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
    }
}


export default BoxMenubar;