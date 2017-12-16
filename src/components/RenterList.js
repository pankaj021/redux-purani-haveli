import React,{Component} from 'react';
import {connect} from 'react-redux'
import RoomMate from '../containers/RoomMate'

class RenterList extends Component{

  render(){
    var roomMatesList = this.props.roomMatesList.map((element)=>{
      return <RoomMate key={element.name} personDetails={element}/>
    })

    return (
      <div>
        {roomMatesList}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        roomMatesList : state.haveliData.roomMatesList
    }
}


export default connect(mapStateToProps)(RenterList)