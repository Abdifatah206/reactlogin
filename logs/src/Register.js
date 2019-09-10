import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class App extends React.Component {
    contructor(props) {
     
        this.state = {};
    }
    render() {
        return (
        
         <div className="container">
        <div className="input-group">
                <label HtmlFor="username">Email</label><br/>
                <input type="email" name="email" className="login-input" placeholder="username"/>  <br/>    <br/>          
                
        
     
                <label HtmlFor="password">Password</label><br/>
                <input type="password" name="password" className="login-input" placeholder="password"/><br/> <br/>
            
            <label HtmlFor="password"> Confirm Password</label><br/>
                <input type="password" name="password" className="login-input" placeholder="password"/><br/> <br/>
            <button type="button" className="login-btn" > Login</button>
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
