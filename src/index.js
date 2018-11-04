import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './Styles/main.css' 


import Nav from './Nav'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div>
       	<BrowserRouter>
       		<div>
       			<Nav />
       			<Routes />
       		</div>

       	</BrowserRouter>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
