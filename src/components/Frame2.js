// import {  } from ""

import illustration from "../assets/Frame2-illustration.svg";
function Hero() {
	return (
		<div className="frame">
			<main className="d-flex justify-content-center align-items-center">
				<section className="p-3">
					<div>
						<img
							src={illustration}
							alt="Frame2 Illustration"
							className="f2-i"
						/>
					</div>
				</section>
				<section className="flex-column justify-content-center align-items-center h-100 p-3">
					<div className="text-start align-self-start tag mb-3">
						<span>🔥ABOUT US</span>
					</div>
					<h1 className="text-start">ALL YOUR MONEY NEEDS IN ONE APP</h1>
					<div className="d-flex">
						<span className="bar">
							<span></span>
						</span>
						<div className="bar-items">
							<div className="text-start m-2 mt-0 top-item">
								<h5>Expenses Tracker</h5>
								<p className="text-secondary s-text">
									Our comprehensive selection of medications, supplements, and
									healthcare products.
								</p>
							</div>
							<div className="text-start m-2">
								<h4>Crypto Connection</h4>
								<p className="text-secondary s-text">
									From advanced imaging technology such as MRI and CT scanners
									to precision surgical tools.
								</p>
							</div>
							<div className="text-start m-2 mb-0">
								<h4>Automated Invoicing</h4>
								<p className="text-secondary">
									We're commited to levraging the latest innovations in medical
									technology.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Hero;
