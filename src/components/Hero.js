// import {  } from ""
import Header from "./Header";
import HeroFooter from "./HeroFooter";
import illustration from "../assets/hero-illustration.svg";
function Hero() {
	return (
		<div className="hero section">
			<img
				className="bg-pattern"
				src="/herobackgroundpattern.svg"
				alt="background pattern"
			/>
			<div className="herobody">
				<Header />
				<main className="d-flex justify-content-center align-items-center">
					<section className="flex-column justify-content-between text-white align-items-start h-100">
						<div className="text-start tag tag-dark">
							<span>🔥100% TRUSTED PLATFORM</span>
						</div>
						<div className="text-start">
							<h1 className="hero-main-text">
								FINANCE WITH SECURITY AND{" "}
								<span className="hero-main-text">FLEXIBILITY</span>
							</h1>
							<p className="w-85">
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
				<HeroFooter />
			</div>
		</div>
	);
}

export default Hero;
