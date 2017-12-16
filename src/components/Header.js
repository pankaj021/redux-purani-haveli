import React,{Component} from 'react'
import {connect} from 'react-redux'

class Header extends Component{
    debugger
    render(){
        return (
            <header className="Header">
                <h1>{this.props.flatName}</h1>
                <hr/>
            </header>
        )
    }
}

function mapStateToProps(state){
    return {
        flatName : state.haveliData.flatName
    }
}

export default connect(mapStateToProps)(Header)

