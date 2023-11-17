import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsHarbor</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/technology">Technology</Link></li>
                        </ul>
                    </div>




                </div>
            </nav>
        </div>
    )
}

export default Navbar


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// export default class Navbar extends Component {
//     render() {
//         return (
//             <>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <div className="container-fluid">
//                         <Link className="navbar-brand" to="/">News🐒</Link>
//                         <button
//                             className="navbar-toggler"
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#navbarSupportedContent"
//                             aria-controls="navbarSupportedContent"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                         >
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" aria-current="page" to="/">Home</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" aria-current="page" to="/about">About</Link>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <Link
//                                         className="nav-link dropdown-toggle"
//                                         to="#"
//                                         id="navbarDropdown"
//                                         role="button"
//                                         data-bs-toggle="dropdown"
//                                         aria-haspopup="true"
//                                         aria-expanded="false"
//                                     >
//                                         Categories
//                                     </Link>
//                                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                         <Link className="dropdown-item" to="/business">Business</Link>
//                                         <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
//                                         <Link className="dropdown-item" to="/health">Health</Link>
//                                         <Link className="dropdown-item" to="/science">Science</Link>
//                                         <Link className="dropdown-item" to="/sports">Sports</Link>
//                                         <Link className="dropdown-item" to="/technology">Technology</Link>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </>
//         );
//     }
// }

