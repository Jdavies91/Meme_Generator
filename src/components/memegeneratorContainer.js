import React,{Component} from 'react'
import '../css/MemeGenerator.css'
import MemeColorPicker from './MemeFontColorPicker'
import { StyleSheet, css } from 'aphrodite';
import MemeGeneratorView from './memegeneratorview'
class MemeGeneratorContainer extends Component{
    constructor(){
        super()
        this.state = {
            top:"",
            bottom:"",
            randimg:'http://i.imgflip.com/1bij.jpg',
            fontcolor:"#FFFFFF",
            allmemeimg:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // this.onChangeColor = this.onChangeColor.bind(this)
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes').then(
            resp=> resp.json() 
        ).then(
            resp=>{ 
                console.log(resp)
                const {memes} = resp.data;
                this.setState({allmemeimg: memes})
            }
           
        )
      
    }
    
    handleChange(event){
        const {type,value,name,src}=event.target
        name ==="randimg"?this.setState({[name]:src}):this.setState({[name]:value})
    }
    handleClick(event){
        event.preventDefault()

        let randomNum =0;
        console.log(this.state.allmemeimg.length)
        randomNum = Math.floor(Math.random() * this.state.allmemeimg.length)
        //let imgggg =this.state.allmemeimg[randomNum].url;
        let fd= this.state.allmemeimg[randomNum].url
        console.log(fd)
        
            this.setState({randimg:fd})
    
    }
    render(){
        //https://api.imgflip.com/get_memes
        
      
        return(
            <div>
            <MemeColorPicker fontcolors={this.state.fontcolor} handleChange={this.handleChange}/>
            <MemeGeneratorView top={this.state.top} bottom={this.state.bottom} randimg={this.state.randimg} fontcolor={this.state.fontcolor} handleChange={this.handleChange}     handleClick={this.handleClick } />
            </div>
        )
    }
}





export default MemeGeneratorContainer