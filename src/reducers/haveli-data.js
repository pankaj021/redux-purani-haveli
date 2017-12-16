// import * as actionType from '../actions/ActionType';

const memberList = (state={} , action) => {
  let newState = state;
  switch (action.type) {
    case "LOAD_HAVELI_DATA" : 
      return newState = action.payload
    case "TOGGLE_SHOW_HIDE" :
      return {...newState, personClicked : action.payload}
    case "DELETE_A_RECORD" :
      var roomMatesList = newState.roomMatesList.filter((val)=> ! (val.name === action.payload))
      return {...newState,roomMatesList}
    default :
      return newState ; 
  }
}

export default memberList;