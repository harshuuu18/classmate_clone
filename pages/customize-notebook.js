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
import InfoStep from "../components/CustomizeNotebook/Infos";
import BeginDesgin from "../components/CustomizeNotebook/BeginDesgin";
import NoteBookDesginModal from "../components/CustomizeNotebook/NoteBookDesginModal";
import NoteBookDesginModal2 from "../components/CustomizeNotebook/NoteBookDesginModal copy";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { showCanvas } from "../recoil/customize.atom";
import NoteBookDesginModal3 from "../components/CustomizeNotebook/NoteBookDesginModal3";
export default function CustomizeNotebook() {

	const [cv, setCv] = useRecoilState(showCanvas)

	return (
		<>
			<Head>

				<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
					rel="stylesheet" />
			</Head>
			<div id='HomePage'>

				{
					cv &&
					<NoteBookDesginModal3 />
				}
				<Swiper
					className='mySwiper'
					allowTouchMove={false}
					onSlideChange={(e) => {
						localStorage.setItem("activeIndex", e.activeIndex)

					}}>


					<SwiperSlide >
						<StepOne />
					</SwiperSlide>
					<SwiperSlide  >
						<StepTwo />
					</SwiperSlide>

					<SwiperSlide>
						<StepThree />
					</SwiperSlide>

					<SwiperSlide  >
						<StepFour />
					</SwiperSlide>

					<SwiperSlide  >
						<StepFive />
					</SwiperSlide>

					<SwiperSlide >
						<InfoStep />
					</SwiperSlide>

					<SwiperSlide>
						<BeginDesgin />
					</SwiperSlide>

					<SwiperSlide>
						<DesignNoteBook />
					</SwiperSlide>





					<ProgressBar />
				</Swiper>
			</div>
		</>
	);
}
