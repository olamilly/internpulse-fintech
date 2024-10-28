// import {  } from ""
import Header from "./Header";
import HeroFooter from "./HeroFooter";
import illustration from "../assets/hero-illustration.svg";
import arrowright from "../assets/arrow-right.svg";

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
						<div className="d-flex justify-content-start py-4">
							<div className="mt-10">
								<button className="left py-2">Get Started</button>
								<span className="right p-1">
									<img src={arrowright} alt="arrow-right" />
								</span>
							</div>
						</div>
					</section>
					<section>
						<div>
							<img src={illustration} alt="Hero Illustration" />
						</div>
					</section>
				</main>
			</div>
			<HeroFooter />
		</div>
	);
}

export default Hero;
