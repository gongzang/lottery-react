import React from 'react';
import './styles/boxMenu.css';

class BoxMenubar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrap">
                <div className="menuItem">
                    <h2>menu1</h2>
                    <div className='menuItem subMenuItem'>
                    </div>
                    <div className='menuItem subMenuItem'>
                    </div>
                    <div className='menuItem subMenuItem'>
                    </div>
                </div>
                <div className="menuItem"></div>
                <div className="menuItem"></div>
                <div className="menuItem"></div>
            </div>
        );
    }
}


export default BoxMenubar;