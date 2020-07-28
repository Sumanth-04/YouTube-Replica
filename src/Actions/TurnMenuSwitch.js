export const TurnOn = () => dispatch => {
    dispatch({
      type : 'ON',
    }) 
    
  }

export const TurnOff = () => dispatch =>{
    dispatch({
      type : "OFF",
    }) 
  }