import React,{Component}from 'react';
import './App.css';
import Form from "./components/Form";
class App extends Component {
   constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }

	render(){
	  return (
	    	<div className="App outer">
	    	<span><h1 className="title_outer">Welcome to DuckTracker</h1></span>
	     	<Form/>
	    	</div>
	  	);
	}
}

export default App;
