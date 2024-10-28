import illustration from "../assets/Frame3-illustration.svg";
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
				<section className="p-3">
					<div>
						<img src={illustration} alt="Frame3 Illustration" />
					</div>
				</section>
			</main>
		</div>
	);
}

export default Frame3;
