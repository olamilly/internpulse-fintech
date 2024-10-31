import Logo from "../assets/Footer-illustrations/upgrade-inc-footer-logo.svg";
import Google from "../assets/Footer-illustrations/play-store.svg";
import Appstore from "../assets/Footer-illustrations/app-store.svg";
import facebook from "../assets/Footer-illustrations/facebook.svg";
import instagram from "../assets/Footer-illustrations/instagram.svg";
import linkedin from "../assets/Footer-illustrations/linkedin.svg";
import twitter from "../assets/Footer-illustrations/twitter.svg";

const icons = [
	{
		img: <img src={facebook} alt="facebook-icon" />,
	},
	{
		img: <img src={instagram} alt="instagram-icon" />,
	},
	{
		img: <img src={linkedin} alt="linkedin-icon" />,
	},
	{
		img: <img src={twitter} alt="twitter-icon" />,
	},
];

function Footer() {
	return (
		<footer className="d-flex  flex-column  align-items-center">
			<img src={Logo} alt="upgrade-logo" />

			<div className="d-flex gap-4 my-4">
				<img src={Appstore} alt="App-store" />
				<img src={Google} alt="google-play-store" />
			</div>

			{/* Navigation Links */}
			<div className="links d-flex flex-wrap gap-4 my-4 justify-content-center s-text">
				<p>Personal Loan</p>
				<p>One Card</p>
				<p>Savings</p>
				<p>Checking</p>
				<p>Help</p>
				<p>Support</p>
			</div>

			{/* social icons */}
			<div className="d-flex gap-2 my-4">
				{icons.map((icon, index) => (
					<div key={index} className="d-flex items-center p-2">
						{icon.img}
					</div>
				))}
			</div>

			<p>
				<span className="fw-bold ">Send Your Feedback :</span>{" "}
				moc.edargpu@tcatnoc
			</p>

			{/* Policies and Conditions */}
			<div className="d-flex flex-wrap gap-2 my-4 justify-content-center s-text">
				<p>Privacy Policy</p>
				<span>|</span>
				<p>Terms & Condition</p>
				<span>|</span>
				<p>Cookie Notice</p>
				<span>|</span>
				<p>Copyright Policy</p>
				<span>|</span>
				<p>Data Policy</p>
			</div>

			{/* Copyright */}
			<p className="mt-2 mb-5 s-text">
				&copy; 2024 Design Monks. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
