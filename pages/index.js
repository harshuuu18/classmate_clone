import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banners/Banner";
import Testimonials from "../components/Testimonials/Testimonials";
import bannerKid from "../Assets/banner-kid.jpeg"


export default function Home() {
	return (
		<div id='HomePage'>
			<Swiper className='mySwiper'>
				<SwiperSlide>
					<div className='mySwiperSlide'>
						<h1>Slide 1</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='mySwiperSlide'>
						<h1>Slide 2</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='mySwiperSlide'>
						<h1>Slide 3</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='mySwiperSlide'>
						<h1>Slide 4</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='mySwiperSlide'>
						<h1>Slide 5</h1>
					</div>
				</SwiperSlide>
			</Swiper>


			<Banner />
			<Banner />
			<Testimonials />
			<Banner image={bannerKid} />
		</div>
	);
}
