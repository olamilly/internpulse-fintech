// import {  } from ""
import Header from "./Header";
import illustration from "../assets/hero-illustration.svg";
function Hero() {
	return (
		<div className="hero section">
			<Header />
			<main className="d-flex justify-content-center align-items-center">
				<section className="d-flex flex-column justify-content-between align-items-start h-100">
					<div className="text-start">
						<span>🔥100% TRUSTED PLATFORM</span>
					</div>
					<div className="text-start">
						<h1>FINANCE WITH SECURITY AND FLEXIBILITY</h1>
						<p>
							no-fee checking account with cash back rewards. Enjoy fee-free
							banking and earn cash back on your everyday purchases.
						</p>
					</div>
					<div>
						<span>Open Account</span>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="31"
								viewBox="0 0 32 31"
								fill="none"
							>
								<path
									d="M20.7112 19.205L22.7478 11.6042L15.147 9.56754"
									stroke="#344054"
									stroke-width="1.6"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M9.2522 19.3959L22.6128 11.6821"
									stroke="#344054"
									stroke-width="1.6"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</div>
				</section>
				<section>
					<div>
						<img src={illustration} alt="Hero Illustration" />
					</div>
				</section>
			</main>
		</div>
	);
}

export default Hero;
