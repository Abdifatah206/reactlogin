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
        <form>
    <label>
      Username:<br/>
      <input type="text" name="username" /><br/>
      Password:<br/>
      <input type="text" name="username" /><br/><br/>

    </label>

    <input type="submit" value="Submit" />
  </form>
        </div>





        );



    }
}





// login form
class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
submitlogin(e) {

    }
render() {
    return (
    <div className="inner-container">

        <div className="header">
            Login
            </div>

        <div className="box">

            <div className="input-group">
                <label HtmlFor="username">Username</label>
                <input type="text" name="username" className="login-input" placeholder="username"/>
                </div>

    <div className="input-group">
                <label HtmlFor="password">Password</label>
                <input type="password" name="password" className="login-input" placeholder="password"/>
                </div>
            <button type="button" className="login-btn" onclick={this.submitlogin.bind(this)} > Login</button>

            </div>


        </div>
   );
 }
}
// registeration form
class RegisterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };

    }
    submitRegister (e) {

    }

render(){
    return (
    <div className="inner-container">
        <div className="header">
            Register
            </div>

        <div className="box">
            <div className="input-group">
                <label HtmlFor="username">Username</label>
                <input type="text" name="username" className="login-input" placeholder="username"/>

                </div>
    <div className="input-group">
                <label HtmlFor="password">Password</label>
                <input type="password" name="password" className="login-input" placeholder="password"/>

                </div>
            <button type="button" className="login-btn" onclick={this.submitRegister.bind(this)} > Register</button>

            </div>


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
