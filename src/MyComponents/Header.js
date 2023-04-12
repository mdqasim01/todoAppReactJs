import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
export default function Header(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">{props.title}</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li class="nav-item">
                            {/* <Link class="nav-link" to="/About">About</Link> */}
                        </li>
                        { props.SearchBar ?<form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>: "" }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
Header.protoTypes={
    title: "Your Title Here"
}
Header.protoTypes={
    title: PropTypes.String
}