// import {  } from ""
import logo from "../assets/logo.svg";
function Header(props) {
	return (
		<header className="w-100 p-3 d-flex align-items-center">
			<div className="logo-container">
				<img src={logo} alt="upgrade logo" />
			</div>
			<div className="d-flex justify-content-around align-items-center gap-3 header-links">
				<a href="/">Personal Loan</a>
				<a href="/">One Card</a>
				<a href="/">Savings</a>
				<a href="/">Checking</a>
				<a href="/">Help</a>
			</div>
			<div>
				<button className="signInButton">Sign In</button>
			</div>
		</header>
	);
}

export default Header;
