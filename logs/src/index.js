import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class App extends React.Component {
    contructor(props) {

        this.state = {};
    }
    render() {
        return (
        <div className="big">
        <div className="small">
        <form action="login" method="post">
    <label>
      Username:<br/>
      <input type="text" name="username" className="input1" /><br/><br/>
      Password:<br/>
      <input type="text" name="username" className="input1" /><br/><br/>



    </label>

    <input type="submit" value="Submit" className="btn" /><br /><br/>

  </form></div>
        </div>





        );



    }
}








ReactDOM.render(<App/>, document.getElementById('root'));



/*
You are now watching a React file
through our 'Show React' tool.
Click the tab to check out
the 'index.html' file as well.
*/
