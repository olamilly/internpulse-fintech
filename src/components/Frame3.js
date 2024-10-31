import illustration from "../assets/Frame3-illustration.svg";
import arrowright from "../assets/arrow-right.svg";
function Frame3() {
	return (
		<div className="frame frame3">
			<main className="d-flex justify-content-between align-items-center">
				<section className=" s1 flex-column justify-content-between align-items-start h-100 p-3">
					<div className="text-start align-self-start tag">
						<span>🔥FEATURED</span>
					</div>
					<div className=" w-100">
						<h1 className="text-start">ALL THE FEATURES NEEDS IN ONE APP</h1>
						<ul class="list-unstyled mb-0  w-100">
							<li>
								<p class="d-flex text-wrap text-start s-text align-items-center gap-2 py-2 w-100">
									<span class="d-inline-block bg-dark rounded-circle p-1"></span>
									Get 3% cash back on everyday purchases, 2% on everything else.
								</p>
							</li>
							<li>
								<p class="d-flex align-items-center gap-2 s-text py-2 text-wrap text-start w-100">
									<span class="d-inline-block bg-dark rounded-circle p-1"></span>
									Extra Spending Power when you have Rewards Checking through
									Upgrade.
								</p>
							</li>
						</ul>
					</div>
					<div className="d-flex justify-content-start">
						<div className="mt-10 mt-80">
							<button className="left py-2">Get Started</button>
							<span className="right p-1">
								<img src={arrowright} alt="arrow-right" />
							</span>
						</div>
					</div>
				</section>
				<section className="p-3">
					<div className="l-img">
						<img src={illustration} alt="Frame3 Illustration" />
					</div>
					<img
						alt="Mobile app card settings screen"
						loading="lazy"
						width="100%"
						height="500"
						className="rounded"
						style={{ color: "transparent" }}
						src="/feature-phones.png"
					></img>
				</section>
			</main>
		</div>
	);
}

export default Frame3;
