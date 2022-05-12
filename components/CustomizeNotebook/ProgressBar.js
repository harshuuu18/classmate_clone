import React, { useEffect } from "react";
import toast from "react-hot-toast";

import { useRecoilState, useRecoilValue } from "recoil";
import { useSwiper } from "swiper/react";
import { currIndex, Five, Four, OneStep, Six, Three, Two } from "../../recoil/customize.atom";
let g = 9;
function ProgressBar() {
	const swiper = useSwiper();
	const [index, setIndex] = useRecoilState(currIndex);
	const one = useRecoilValue(OneStep)
	const two = useRecoilValue(Two)
	const three = useRecoilValue(Three)
	const four = useRecoilValue(Four)
	const five = useRecoilValue(Five)
	const six = useRecoilValue(Six)
	const data = [
		one, two, three, four, five, six
	]


	useEffect(() => {

		let activeIndex = parseInt(localStorage.getItem("activeIndex") ?? 0)



	}, [])
	return (
		<div className='CustomProgressBar'>
			<div className='CPLeft'>
				<span
					onClick={() => {
						swiper.slidePrev();
						setIndex(swiper.activeIndex);
					}}>
					<i className='fa fa-arrow-left' />
				</span>
			</div>
			<div className='CpProgress'>
				<div class='progress'>
					<div
						class='progress-value'
						style={{ width: `${index * 9.5}%` }}></div>
					{new Array(5).fill("1").map((e, i) => {
						// // console.log(i < index);
						return (
							<span
								style={{
									left: `${(i + 1) * g}%`,
									backgroundColor: `${i < index ? "#ffdd40" : ""}`,
								}}></span>
						);
					})}
				</div>
			</div>
			<div className='CPRight'>
				<span
					onClick={() => {
						if (swiper.activeIndex === 6) {
							return;
						}

						if (!data[swiper.activeIndex].value) {

							return toast.error(`Please select ${data[swiper.activeIndex].title} `);
						}

						swiper.slideNext();

						setIndex(swiper.activeIndex);
					}}>
					<i className='fa fa-arrow-right' />
				</span>
			</div>
		</div>
	);
}

export default ProgressBar;
