import React,{Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'

class MorePersonalDetails extends Component{
  render(){
    var moreDetails = this.props.personDetails.details.more.map((element,i)=>{
        return <li key={i}>{element}</li>
    })

    return (
        <div>
            <ul>
                {moreDetails}
            </ul>
            <span>How much does he like the flat : </span>
            <span>{this.props.personDetails.flatRating}</span>
            <br/>
            <div className="toggleBtn" onClick = {(e)=>{ e.preventDefault(); this.props.toggleShowHideCliked("")}}>less >></div>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return {
        toggleShowHideCliked : (name)=>{
            dispatch(actions.toggleShowHideCliked(name))
        }
    }
}

export default connect(null , mapDispatchToProps)(MorePersonalDetails)