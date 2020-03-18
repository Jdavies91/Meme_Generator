import React,{ Component} from 'react'

function MemeColorPicker(props){
    console.log(props.fontcolors)

      
    return(
      <div>
        <label for="fontcolor">Select your font color: </label>
        <input name="fontcolor" type="color" value={props.fontcolors} onChange={props.handleChange} />
      </div>
    )
  
  }


export default MemeColorPicker


