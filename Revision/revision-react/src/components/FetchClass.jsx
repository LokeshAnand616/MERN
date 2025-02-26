import React from "react";

class FetchClass extends React.Component{
  constructor(){
    super();
    this.state={
      data:[] 
    }
  }
  componentDidMount(){
    const myData = fetch("https://jsonplaceholder.typicode.com/users");
    myData.then((res)=>{
      return res.json();
    })
    .then((data)=>{
      this.setState({data:data})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){

  }
  render(){
    const {data} = this.state
    console.log(data)

    return(
      <>
        {data.map((curr)=>(
          <li key={curr.id}>{curr.name}</li>
        ))}
      </>
    )
  }
}

export default FetchClass;