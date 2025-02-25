import React from "react";
import Child from "./ChildClass";

class PropsClass extends React.Component{
    state = {count : 0};
    increment(){
        this.setState({ count: this.state.count + 1 });
    }
    decrement(){
        this.setState({count:this.state.count - 1});
    }
    componentDidMount(){
        console.log("component mounted")
    }
    render(){
        return(
            <>
                <Child name="lokesh"/>
                {this.state.count}
                <button onClick={this.increment.bind(this)}>add</button>
                <button onClick={this.decrement.bind(this)}>reduce</button>
            </>
        )
    }
}

export default PropsClass;