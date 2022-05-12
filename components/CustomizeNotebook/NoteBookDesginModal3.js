import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { useRecoilState } from "recoil";
import {
	Canvas,
	canvasData,
	cvUrl,
	selectedCanvas,
	showCanvas,
} from "../../recoil/customize.atom";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import Collapsible from "react-collapsible";
import { fabric } from "fabric";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import FabricCanvas from "./FabricCanvas";
import FabricCanvas2 from "./FabricCanvas2";

function NoteBookDesginModal3({ imageFrom }) {
	const [canvas, setCanvas] = useRecoilState(Canvas);
	const { editor, onReady } = useFabricJSEditor({});
	const [text, setText] = useState("");
	const [textColor, setTextColor] = useState("#000000");
	const [imgURL, setImgURL] = useState("");
	const [dropdownOpen, setdropdownOpen] = useState(false);
	const [textSize, setTextSize] = useState("12");
	const [fontStyle, setFontStyle] = useState("");
	const [fontWeight, setFontWeight] = useState("");
	const [url, setUrl] = useRecoilState(cvUrl);
	const [once, setOnce] = useState(false);
	const [cv, setCv] = useRecoilState(showCanvas);
	const [canva, setCanva] = useState("");
	const [cvData, setCvData] = useRecoilState(canvasData);
	const [selectedCv, setsCv] = useRecoilState(selectedCanvas)
	const [editing, setEditing] = useState(false)

	// useEffect(() => {
	// 	let c = localStorage.getItem("canvas")
	// 	if (c) {
	// 		c = JSON.parse(c)

	// 		setCanva(c ?? [])
	// 	}
	// }, [cv])

	useEffect(() => {
		if (!imgURL) return;
		addImg(imgURL, "canvas");
	}, [imgURL]);

	useEffect(() => {
		editor?.canvas.on({
			"selection:updated": HandleElement,
			"selection:created": HandleElement,
		});

		// console.log(url);

		if (url) {
			if (once) return;
			fabric.Image.fromURL(
				url,
				function (oImg) {
					oImg.scale(0.2);
					oImg.crossOrigin = "anonymous";
					oImg.cacheKey = "MyImage";
					// oImg.hasControls = false;
					// oImg.lockMovementX = true;
					// oImg.lockMovementY = true;
					editor?.canvas.add(oImg);
					setOnce(true);
				},
				{ crossOrigin: "Anonymous" },
			);
		}
	}, []);

	useEffect(() => {
		if (!selectedCv) {
			return;
		}
		editor?.canvas.loadFromJSON(selectedCv.canvas, function () {
			editor?.canvas.renderAll();

			const dataURL = editor?.canvas.toDataURL({
				width: editor?.canvas.width,
				height: editor?.canvas.height,
				left: 0,
				top: 0,
				format: 'png',
			});




			var json = editor?.canvas.toJSON(['preserveObjectStacking'])
			// console.log('json', json)

			let can = [...cvData].map((item) => {
				if (item.id == selectedCv.id) {
					return {
						id: item.id,
						canvas: json
					}
				}
				return item;
			})




			setCvData(can)


		}, function (o, object) {
			// console.log('o', o)
			// console.log('object', object)
		})
	}, [selectedCv])

	function HandleElement(obj) {
		setEditing(true)
		var json = editor?.canvas.toJSON(['preserveObjectStacking'])
		setCv({
			id: selectedCv.id,
			canvas: json
		})

		let can = [...cvData].map((item) => {
			if (item.id == selectedCv.id) {
				return {
					id: item.id,
					canvas: json
				}
			}
			return item;
		})

		setCvData(can)
		// if (obj.selected[0].cacheKey === "MyText") {
		// 	obj.selected[0].set({
		// 		fontSize: 50
		// 	})
		// }
		//Handle the object here
		// setEditing(false)
	}

	const addImg = (url, canvi) => {
		fabric.Image.fromURL(
			url,
			function (oImg) {
				oImg.scale(0.2);
				oImg.crossOrigin = "anonymous";
				oImg.cacheKey = "MyImage";
				// oImg.hasControls = false;
				// oImg.lockMovementX = true;
				// oImg.lockMovementY = true;
				editor.canvas.add(oImg);
			},
			{ crossOrigin: "Anonymous" },
		);

		// new fabric.Image.fromURL(url, img => {
		//     img.scale(0.10);

		//     canvi.add(img);
		//     canvi.setActiveObject(img)
		//     canvi.renderAll();
		//     img.hasControls = true;

		// });
	};

	const onSelectFile = (e) => {
		// // console.log(e.target.files)

		if (
			editor.canvas._objects.filter((f) => f.cacheKey === "MyImage").length ===
			1
		) {
			let obj = editor.canvas._objects.find((f) => f.cacheKey === "MyImage");

			if (!e.target.files || e.target.files.length === 0) {
				setImgURL(undefined);
				return;
			}
			let objurl = URL.createObjectURL(e.target.files[0]);
			// // console.log({ objurl })
			// I've kept this example simple by using the first image instead of multiple
			// setImgURL(objurl)

			obj.setSrc(objurl, function (img) {
				editor.canvas.renderAll();
			});

			return toast.success("Image updated");
		}

		if (!e.target.files || e.target.files.length === 0) {
			setImgURL(undefined);
			return;
		}
		let objurl = URL.createObjectURL(e.target.files[0]);
		// // console.log({ objurl })
		// I've kept this example simple by using the first image instead of multiple
		setImgURL(objurl);
	};

	return (
		<div id='Notebook-Design'>

			<div className='NDLeft'>
				<FabricJSCanvas
					className='sample-canvas'
					onReady={onReady}></FabricJSCanvas>

				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					slidesPerGroup={3}
					loop={false}
					// loopFillGroupWithBlankk={true}
					allowTouchMove={true}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper4'>
					{cvData.length
						? cvData?.map((c) => {
							console.dir(`noteBookDesignModal: ${JSON.stringify(c.canvas)}`)
							return (
								<SwiperSlide>
									<div
										className='lsdkajgoiweiwe'
										onClick={() => {
											setCv(true);
											setsCv(c)
										}}>
										<FabricCanvas
											loadCv={c.canvas ?? null}
											c={c}
											canvii={cvData}

										/>
									</div>
								</SwiperSlide>
							);
						})
						: ""}
				</Swiper>
			</div>
			<div className='NDRight'>
				<button
					className='DeleteBtn'
					onClick={() => {
						editor.deleteSelected();
					}}>
					Delete Selected Object
				</button>
				<br />
				<Collapsible trigger={<p className='NDTrigger'>Layout Style</p>}>
					<div className='LSMain1'>
						<img
							src={"/A4.png"}
							onClick={(e) => {
								editor.canvas.preserveObjectStacking = true;
								fabric.Image.fromURL(
									e.target.src,
									function (img) {
										// console.log(editor.canvas.width, editor.canvas.height);
										editor.canvas.setOverlayImage(
											img,
											editor.canvas.renderAll.bind(editor.canvas),
											{
												opacity: 1,
												// height: editor.canvas.height,
												// width: editor.canvas.width,
												// left: 400,
												// top: 400,
												// left: 0,
												right: 0,
												originX: "left",
												originY: "top",
												crossOrigin: "anonymous",
											},
										);
										img.scaleToWidth(273);
										img.scaleToHeight(386.1);
										editor.canvas.renderAll();
										// oImg.hasControls = false;
										// oImg.lockMovementX = true;
										// oImg.lockMovementY = true;
									},
									{ crossOrigin: "Anonymous" },
								);
							}}
						/>
					</div>
				</Collapsible>
				<Collapsible
					trigger={
						<p className='NDTrigger NDTriggerAlt'>Add/Update Background</p>
					}>
					<div className='LSMain2'>
						<div className='LSMain21'>
							<input type={"file"} onChange={onSelectFile} />
						</div>
					</div>
				</Collapsible>
				<Collapsible
					trigger={
						<p className='NDTrigger NDTriggerAlt'>Add/Edit Your Text</p>
					}>
					<div className='LSMain3'>
						<div className='LSMain31'>
							<input
								type={"text"}
								value={text}
								style={{ color: textColor ? textColor.toString() : "" }}
								onChange={(e) => setText(e.target.value)}
							/>
							<button
								onClick={() => {
									if (!text) {
										return toast.error("Please type any text first");
									}
									var _text = new fabric.Text(text, {
										fill: textColor,
										cacheKey: "MyText",
										top: 150,
										left: 100,
										fontSize: textSize,
										fontStyle: fontStyle,
										fontWeight: fontWeight,
										fontFamily: "Pacifico",
									});

									editor.canvas.add(_text);
								}}>
								Add Text
							</button>
							<input
								type={"color"}
								value={textColor}
								onChange={(e) => setTextColor(e.target.value)}
							/>
						</div>
						<div className='LSMain31'>
							<select>
								<option value='actual value 1'>Display Text 1</option>
								<option value='actual value 2'>Display Text 2</option>
								<option value='actual value 3'>Display Text 3</option>
							</select>
							<button>Font</button>
							<input
								type={"number"}
								id='Kjldsgjkld'
								value={textSize}
								onChange={(e) => setTextSize(e.target.value)}
							/>
							<span
								onClick={() => setFontWeight(fontWeight ? "" : "bold")}
								className={fontWeight ? "selectedStyle" : ""}>
								<strong>B</strong>
							</span>
							<span
								onClick={() => {
									setFontStyle(fontStyle ? "" : "italic");
								}}
								className={fontStyle ? "selectedStyle" : ""}>
								<em>I</em>
							</span>
						</div>
					</div>
				</Collapsible>
				<Collapsible
					trigger={<p className='NDTrigger NDTriggerAlt2'>Picture Frame</p>}>
					<div className='LSMain'>Picture Frame</div>
				</Collapsible>

				<br />
				<div className='canviActionBtns'>
					<button
						onClick={() => {
							return // console.log(editor.canvas._objects);
							var json = editor.canvas.toJSON(["preserveObjectStacking"]);
							// console.log(json);
						}}>
						Save
					</button>
					<button
						onClick={() => {
							editor.deleteAll();
						}}>
						Reset
					</button>
					<button
						onClick={() => {
							setCv(false);
						}}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

export default NoteBookDesginModal3;
