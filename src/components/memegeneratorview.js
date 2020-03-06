import React from 'react'


function MemeGeneratorView(props){
    return(
        <div>
            
         
        <form onSubmit={props.handleClick}>
       
            <input type="text" name="top" value={props.top} onChange={props.handleChange} maxLength="25" placeholder="Top Text"/>
            <input type="text" name="bottom" value={props.bottom} onChange={props.handleChange}maxLength="25"  placeholder="Bottom Text"/>
            <button>Generate</button>
          
        </form>
       
        <div className="memecontainer">
            
                <h1 className='toptext'>{props.top}</h1>
            
   
                <h1 className='bottomtext'>{props.bottom}</h1>
                <img className="memeimg"src={props.randimg} alt="img" />
              
        </div>
        </div>

    )
}
export default MemeGeneratorView