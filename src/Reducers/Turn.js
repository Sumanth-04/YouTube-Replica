

const val = false;
const Turn = (state = val ,action) => {
    switch(action.type){
      case "ON" :
        return true;
      case "OFF" :
        return false;
      default :
        return state;
    }
}

export default Turn;

