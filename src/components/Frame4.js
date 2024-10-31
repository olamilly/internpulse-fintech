// import {  } from ""
import illustration from "../assets/Frame4-illustration.svg";
import arrowright from "../assets/arrow-right.svg";
function Frame4() {
	return (
		<div className="Frame4 frame">
			<main className="d-flex justify-content-between align-items-center">
				<section className="f4s1">
					<img
						alt="hero picture"
						loading="lazy"
						width="370"
						height="550"
						decoding="async"
						style={{ color: "transparent" }}
						src="/hero-section.png"
					></img>
					<div>
						<img src={illustration} alt="Frame 4 Illustration" />
					</div>
				</section>
				<section className=" s1 flex-column justify-content-center text-white align-items-start h-100">
					<div className="text-start tag tag-dark mb-3">
						<span>🔥TRUSTWORTHINESS</span>
					</div>
					<div className="text-start w-90">
						<h1>WE VALUE YOUR TRUST AND SECURITY</h1>
						<p className="s-text-dark">
							Our mission is to make finance more accessible, transparent, and
							secure for everyone. With cutting.
						</p>
					</div>
					<div className="d-flex justify-content-start">
						<div className="mt-10">
							<button className="left py-2">Get Started</button>
							<span className="right p-1">
								<img src={arrowright} alt="arrow-right" />
							</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Frame4;
