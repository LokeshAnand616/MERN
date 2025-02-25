import React from "react";

class Child extends React.Component{
    render(){
        const {name} = this.props
        return(
            <>
                <h1>{name}</h1>
            </>
        )
    }
}

export default Child;