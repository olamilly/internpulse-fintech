import illustration1 from "../assets/Frame5-illustrations/Frame5-illustration1.svg";
import illustration2 from "../assets/Frame5-illustrations/Frame5-illustration2.svg";
import illustration3 from "../assets/Frame5-illustrations/Frame5-illustration3.svg";
import illustration4 from "../assets/Frame5-illustrations/Frame5-illustration4.svg";
import illustration5 from "../assets/Frame5-illustrations/Frame5-illustration5.svg";
import illustration6 from "../assets/Frame5-illustrations/Frame5-illustration6.svg";
import arrowright from "../assets/arrow-right.svg";
function Frame5() {
	return (
		<div className="frame frame5">
			<main className="d-flex flex-column justify-content-center align-items-center mt-0">
				<div className=" flex-column justify-content-between align-items-start h-auto p-3">
					<div className="text-start align-self-start tag">
						<span>🔥SERVICES</span>
					</div>
				</div>
				<div className="p-2 text-center act-con">
					<div className="d-flex justify-content-center align-items-center">
						<h1 className="w-60">CAN HELP YOU ACHIEVE FINANCIAL SUCCESS</h1>
					</div>

					<div className="grid-container">
						<img src={illustration1} alt="Frame5 Illustration" />
						<div className="midrow d-flex justify-content-between">
							<img src={illustration2} alt="Frame5 Illustration" />
							<img src={illustration3} alt="Frame5 Illustration" />
						</div>
						<div className="b-row d-flex justify-content-between">
							<img src={illustration4} alt="Frame5 Illustration" />
							<img src={illustration5} alt="Frame5 Illustration" />
							<img src={illustration6} alt="Frame5 Illustration" />
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-start my-4">
					<div className="my-3 mt-10 mt-80">
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

export default Frame5;
