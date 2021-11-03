import { NavLink } from 'react-router-dom'


const Navbar = () =>{
    return (
        <nav>
            <NavLink
                exact
                to='/'
                >
                Home
            </NavLink>
            <NavLink
                exact
                to='/checking'
                >
                Checking
            </NavLink>
            <NavLink
                exact
                to='/savings'
                >
                Savings
            </NavLink>
        </nav>
    )
}


export default Navbar