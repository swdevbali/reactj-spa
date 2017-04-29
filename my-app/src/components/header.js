import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render(){
        return(
            <div>
                <div>
                <Link to='/'>Home</Link> | <Link to='/people'>People</Link>
            </div>
                <br/>
                </div>
                
        )
    }
}

export default Header
