import React from 'react'
import './headerComp.css'
import imgBurger from './Hamburger_icon.svg.png'

const arrMenuItems =[{name: 'apple', image: 'img'}]

class TopHeader extends React.Component {
    constructor (props) {
        super (props)
        this.state ={
            showMenu: true
        }
    }

    menuButtonHandler (event, a, b, c) {
        console.log('triggered', event, a, b, c)
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    menuItemClickHandler (event, a, b, c) {
        console.log(event, a, b, c)
        // this.setState({showMenu: false})
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
                    this.state.showMenu ? (
                        <div className='menu-bar' >
                            <div id='menu-bar-item' onClick={(event, a, b, c) => this.menuItemClickHandler(event, a, b, c)}>
                                <p id='text-in-menuitem'>Sam </p>
                            </div>                            
                            <div id='menu-bar-item'>
                                <p id='text-in-menuitem'>Sam sdafsdfafdawfam sdfasfawfasdf slsdkjflkasdjflkjasdf </p>
                            </div>                            
                            <div id='menu-bar-item'>
                                <p id='text-in-menuitem'>Sam </p>
                            </div>
                        </div>
                    ) : null 
                }
            </div>
        )
    }
}

export default TopHeader;