import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-write">
                    { this.props.title }
                 </a>
            </nav>
        )
    }
}

export default Navigation;