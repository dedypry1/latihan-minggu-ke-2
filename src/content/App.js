import React, { Component,Fragment } from 'react';
import '../style/style.css';
import Home from './Home/Home';
import Form from './event/event';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
     <Router>

       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Zalora</a>
        

          <div className="collapse navbar-collapse mright" id="navbarSupportedContent">
            <ul className="navbar-nav mright">

              <Link className="nav-item">
                <a className="nav-link" href="#">Wanita</a>
              </Link>
              <Link className="nav-item">
                <a className="nav-link" href="#">Pria</a>
              </Link>
              <Link className="nav-item">
                <a className="nav-link" href="#">anak-anak</a>
              </Link>
              <input className="input text-center" type="text"/>
              <Link className="nav-item">
                <a className="nav-link" href="#"><img src={require('../images/icon/contact.png')}/></a>
              </Link>
              <Link className="nav-item">
                <a className="nav-link" href="#"><img src={require('../images/icon/love.png')}/></a>
              </Link>
              <Link className="nav-item">
                <a className="nav-link" href="#"><img src={require('../images/icon/tas.png')}/></a>
              </Link>
            </ul>
            
          </div>
  </div>

</nav>

<div className="container">
<div className="wrapper">
  <ul>
    <li>
      <a href="">PRODUCT ORIGINAL DAN TERJAMIN</a>
      </li>
    <li>
      <a href="">RIBUAN FAHION BRAND</a>
    </li>
    <li>
      <a href="">GRATIS PENGEMBALIAN</a>
    </li>
    <li>
      <a href="">PERTANYAAN</a>
    </li>
  </ul>
</div>
</div>

<Fragment>
  {/* Home */}
  <Route path="/" exact component={Home} />

  <Route path="/form"  component={Form} />

</Fragment>

     </Router>
    );
  }
}

export default App;