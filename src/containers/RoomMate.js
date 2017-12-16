import React,{Component} from 'react';
import {connect} from 'react-redux'
import MorePersonalDetails from './MorePersonalDetails'
import * as actions from '../actions'

class RoomMate extends Component{
  render(){
    var personDetails = this.props.personDetails
    var personClicked = this.props.personClicked
    return (
      <div className="RoomMate">
          <div>
            <span className="bigger-font">{personDetails.name + " ( "}</span>
            <span className="bigger-font">{personDetails.details.mobile+ " ) "}</span>
            <span className="DeleteIcon toggleBtn brownBg" onClick = {(e)=> this.props.deleteADetail(personDetails.name)}>delete</span>
          </div>
          <div className={personDetails.didPayRent ? "padding-top-10 col-green" : "padding-top-10 col-brown"}>{personDetails.didPayRent ? "He has paid the rent." : "He didn't pay the rent yet."}</div>
          <div className="padding-top-10"><span>Age : </span><span>{personDetails.details.age}</span></div>
          {personClicked === personDetails.name ? "" : <span className="toggleBtn" onClick={e => {this.props.toggleShowHideCliked(personDetails.name)}}> More >></span> }
          { personClicked === personDetails.name ? <MorePersonalDetails personDetails={personDetails}/> : ""}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    personClicked : state.haveliData.personClicked
  }
}

function mapDispatchToProps(dispatch){
    return {
      toggleShowHideCliked : (personName)=>{
        dispatch(actions.toggleShowHideCliked(personName))
      },
      deleteADetail : (personName) =>{
        dispatch(actions.deleteADetail(personName))
      }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(RoomMate)