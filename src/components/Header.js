// import {  } from ""
import logo from "../assets/logo.svg";
function Header(props) {
	return (
		<header className=" w-100 p-3 d-flex justify-content-around align-items-center">
			<div className="logo-container">
				<img src={logo} alt="upgrade logo" />
			</div>
			<div className="d-flex justify-content-around align-items-center gap-3">
				<a href="/">Personal Loan</a>
				<a href="/">One Card</a>
				<a href="/">Savings</a>
				<a href="/">Checking</a>
				<a href="/">Help</a>
			</div>
			<div>
				<span className="btn btn-sm btn-secondary-outline"> Sign In</span>
			</div>
		</header>
	);
}

export default Header;
