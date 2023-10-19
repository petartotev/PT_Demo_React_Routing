import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Layout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand"><Link to="/"><FontAwesomeIcon icon="fa-coffee fa-5x" /></Link></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <p className="nav-link active" aria-current="page"><Link to="/">Home</Link></p>
                            <p className="nav-link"><Link to="/projects">Projects</Link></p>
                            <p className="nav-link"><Link to="/blog">Blog</Link></p>
                            <p className="nav-link"><Link to="/about">About</Link></p>
                            <p className="nav-link"><Link to="/contacts">Contacts</Link></p>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>)
}
