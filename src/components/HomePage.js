import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Admin</h1>
            <p>React, Flux and React Router for web apps.</p>
            <Link to="about" className="btn btn-primary">About Page</Link>
        </div>
    )
}
export default HomePage;