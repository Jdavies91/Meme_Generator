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
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes').then(
            resp=> resp.json() 
        ).then(
            resp=>{ 
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

        randomNum = Math.floor(Math.random() * this.state.allmemeimg.length)
        let url= this.state.allmemeimg[randomNum].url

        
            this.setState({randimg:url})
    
    }
    render(){
    
        return(
            <div>
            <MemeColorPicker fontcolors={this.state.fontcolor} handleChange={this.handleChange}/>
            <MemeGeneratorView top={this.state.top} bottom={this.state.bottom} randimg={this.state.randimg} fontcolor={this.state.fontcolor} handleChange={this.handleChange}     handleClick={this.handleClick } />
            </div>
        )
    }
}





export default MemeGeneratorContainer