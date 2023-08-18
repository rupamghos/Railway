import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Railway Booking</span>
            <div className="navItems"></div>
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
    </div>
  )
}

export default Navbar