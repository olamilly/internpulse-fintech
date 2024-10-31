// import {  } from ""
import arrowright from "../assets/arrow-right.svg";
import illustration from "../assets/Frame7-illustration.svg";
function Frame7() {
	return (
		<div className="frame f7">
			<main className="d-flex justify-content-between align-items-center">
				<div className="frame7 d-flex justify-content-between align-items-center ">
					<div className=" s1 flex-column justify-content-center text-white align-items-start h-100">
						<div className="text-start w-90">
							<h1>ARE YOU READY TO START?</h1>
							<p className="s-text-dark">
								Personalize your settings, follow your progress, archive your
								highlights and notes automatically Glose is the ultimate reading
							</p>
						</div>
						<div className="d-flex justify-content-start f7btn">
							<div className="mt-10">
								<button className="left py-2">Get Started</button>
								<span className="right p-1">
									<img src={arrowright} alt="arrow-right" />
								</span>
							</div>
						</div>
					</div>

					<div>
						<img src={illustration} alt="Frame 7 Illustration" />
					</div>
				</div>
			</main>
		</div>
	);
}

export default Frame7;
