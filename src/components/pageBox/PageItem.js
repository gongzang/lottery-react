import React from 'react';

import { NavLink } from 'react-router-dom';


class PageItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { pageNo, beforeLabel, afterLabel, currPage } = this.props;
        return (
            <li className={`page-item ${pageNo === currPage ? 'active' : ''}`}>
                <NavLink to="#" className='page-link'>
                    {`${beforeLabel || ''}${pageNo}${afterLabel || ''}`}
                </NavLink>
            </li>
        );
    }
}


export default PageItem;