import React from 'react'
import './headerComp.css'
import imgBurger from './Hamburger_icon.png'
import MenuItem from './menuItem/MenuItem'

class TopHeader extends React.Component {
    constructor (props) {
        super (props)
        this.state ={
            showMenu: false
        }
    }

    menuButtonHandler (event, a, b, c) {
        console.log('triggered', event, a, b, c)
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    menuItemClickHandler (event, a, b, c) {
        this.setState({showMenu: false})
    }

    render () {
        return (
            <div className='header-top-container'>       
                <div className='header-website' >
                    <button className='button-menu' 
                        onClick={(event, a, b, c) => this.menuButtonHandler(event, a, b, c)}
                    >
                        <img src={imgBurger} width='25vw' height='25vh'/>
                    </button>
                </div>
                {
                    this.props.arrayMenu && this.state.showMenu ? (
                            <div className='menu-bar' >
                                {
                                    this.props.arrayMenu.map((item, indx) => {
                                        return (
                                            <MenuItem key='indx' eventFunction={item.callBack} txt={this.props.arrayMenu[indx].name} />
                                        )
                                    })
                                }
                            </div>
                    ) : null 
                }
            </div>
        )
    }
}

export default TopHeader;