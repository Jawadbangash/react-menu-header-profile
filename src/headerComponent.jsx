import React from 'react'
import './headerComp.css';

class TopHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='header-website' >
                <button className='button-menu'></button>
            </div>
        )
    }
}

export default TopHeader;