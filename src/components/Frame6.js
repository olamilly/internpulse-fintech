import illustration1 from "../assets/Frame6-illustrations/Frame6-illustration1.svg";
import illustration2 from "../assets/Frame6-illustrations/Frame6-illustration2.svg";
import illustration3 from "../assets/Frame6-illustrations/Frame6-illustration3.svg";
import arrowright from "../assets/arrow-right.svg";
function Frame6() {
	return (
		<div className="frame frame6">
			<main className="d-flex flex-column justify-content-center align-items-center ">
				<div className=" flex-column justify-content-between align-items-start h-auto p-3">
					<div className="text-start align-self-start tag">
						<span>🔥TESTIMONIAL</span>
					</div>
				</div>
				<div className="p-2 text-center">
					<h1 className="mb-3p5">GET TO KNOW OUR CLIENTS</h1>

					<div className="d-flex grid-container testimonials">
						<img src={illustration1} alt="Frame5 Illustration" />
						<img src={illustration2} alt="Frame5 Illustration" />
						<img src={illustration3} alt="Frame5 Illustration" />
					</div>
				</div>
				<div className="d-flex justify-content-start mt-4">
					<div className="mt-3 mt-10 mt-80">
						<button className="left py-2">View More</button>
						<span className="right p-1">
							<img src={arrowright} alt="arrow-right" />
						</span>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Frame6;
