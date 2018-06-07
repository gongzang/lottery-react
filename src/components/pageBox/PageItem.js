import React from 'react';

import { NavLink } from 'react-router-dom';


class PageItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { pageNo, beforeLabel, afterLabel, currPage, match, pageType } = this.props;
        let text = pageNo;
        switch (pageType) {
            case "left":
                text = "<<";
                break;
            case "right":
                text = ">>";
                break;
        }
        const showText = `${beforeLabel || ''}${text}${afterLabel || ''}`;
        return (
            <li className={`page-item ${pageNo == currPage ? 'active' : ''}`}>
                <NavLink to={pageNo+''} className='page-link'>
                    {showText}
                </NavLink>
            </li>
        );
    }
}


export default PageItem;