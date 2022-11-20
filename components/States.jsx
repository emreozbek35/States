import React from 'react'
import { NavLink } from "react-router-dom";

const States = (props) => {
    return (
        <header>
            <nav>
                <ul className='states'>
                    <NavLink exact
                        to="/"
                        className="navItem"
                        activeClassName="active"


                    >
                        Florida
                    </NavLink>
                    <NavLink exact
                        to="/Virginia"
                        className="navItem"
                        activeClassName="active"


                    >
                        Virginia
                    </NavLink>
                    <NavLink exact
                        to="/NewJersey"
                        className="navItem"
                        activeClassName="active"


                    >
                        New Jersey
                    </NavLink>
                    <NavLink exact
                        to="/NorthCarolina"
                        className="navItem"
                        activeClassName="active"


                    >
                        North Carolina
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default States