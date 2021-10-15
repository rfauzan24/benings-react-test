import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Benings Payment</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Topup</Link>
        <Link to="/pay" style={{ 
          color: 'black', 
          backgroundColor: 'white',
          borderRadius: '#f1356d' 
        }}>Pay</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;