import React from 'react'

class App extends Reacr.Component{
  componentDidMount(){
    fetch(` http://api.open-notify.org/astros.json`)
    .then(res => res.json())
    .then(data => data.result)
  }
  render(){
    return(null)
  }
}
export default App
