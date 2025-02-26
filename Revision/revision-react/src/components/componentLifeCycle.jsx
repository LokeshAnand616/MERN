import React from "react";

class ComponentLifeCycle extends React.Component{
    constructor(){
        super();
        this.state = {count:0};
        this.increment = this.increment.bind(this)
    }
    componentDidMount(){
        console.log(this.state.count)
    }
    componentDidUpdate(prevprop, prevstate){
        if (prevstate.count !== this.state.count) {
            console.log("Count updated:", this.state.count);
          }
    }
    componentWillUnmount(){
        console.log("clean up")
    }
    increment(){
       this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <>
            {this.state.count}
            <button onClick={this.increment}>add</button>
            </>
        )
    }
}

export default ComponentLifeCycle;