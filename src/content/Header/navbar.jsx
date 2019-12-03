import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <Fragment>
                            
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
            </Fragment>
        );
    }
}

export default navbar;