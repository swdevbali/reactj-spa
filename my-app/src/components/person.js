import React from 'react'

class Person extends React.Component{

    constructor(props){
        super(props)
        this.state = {marriage: props.marriage == undefined?0:1}
        console.log(this.state.marriage)
    }
    
    handleMarriageButton()
    {
        if(this.state.marriage ===  1)
        {
            this.setState({marriage: 0})
        }else{
            this.setState({marriage: 1})
        }
    }
    
    render(){
        return(
                <div>
                My name is {this.props.name}, I live in {this.props.address}. My marriage status is {this.state.marriage === 0? "Single": "Married"}
                <button onClick={this.handleMarriageButton.bind(this)}>Switch status</button>
            </div>
        )
    }
}

export default Person
