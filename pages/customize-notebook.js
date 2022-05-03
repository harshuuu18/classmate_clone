import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import ProgressBar from "../components/CustomizeNotebook/ProgressBar";
import { useEffect } from "react";
import StepOne from "../components/CustomizeNotebook/StepOne";
import StepTwo from "../components/CustomizeNotebook/ChooseSize";
import StepThree from "../components/CustomizeNotebook/ChooseRuling";
import StepFour from "../components/CustomizeNotebook/ChooseBinding";
import StepFive from "../components/CustomizeNotebook/ChooseQuantity";
import DesignNoteBook from "../components/CustomizeNotebook/design-notebook";
export default function CustomizeNotebook() {
	return (
		<div id='HomePage'>
			<Swiper
				className='mySwiper'
				allowTouchMove={false}
				onSlideChange={(e) => {

					console.log("e", e.act);
				}}>
				<SwiperSlide >
					<StepOne />
				</SwiperSlide>
				<SwiperSlide  >
					<StepTwo />
				</SwiperSlide>

				<SwiperSlide  >
					<StepThree />
				</SwiperSlide>

				<SwiperSlide  >
					<StepFour />
				</SwiperSlide>

				<SwiperSlide  >
					<StepFive />
				</SwiperSlide>


				<SwiperSlide>
					<DesignNoteBook />
				</SwiperSlide>



				<ProgressBar />
			</Swiper>
		</div>
	);
}
