import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecoilPersister from '../../helpers/recoil-persister'

import { canvasData, cvUrl, OneStep, selectedCanvas, showCanvas } from '../../recoil/customize.atom'
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NoteBookDesginModal from './NoteBookDesginModal'
import FabricCanvas from './FabricCanvas'


function BeginDesgin() {

    const [val, setVal] = useRecoilState(OneStep)
    const [imgURL, setImgURL] = useState('');
    const [checked, setChecked] = useState(true)
    const [cv, setCv] = useRecoilState(showCanvas)
    const [url, setUrl] = useRecoilState(cvUrl)
    const [canvas, setCanvas] = useState("")
    const [cvData, setCvData] = useRecoilState(canvasData)
    const [selectedCv, setsCv] = useRecoilState(selectedCanvas)



    let data = [
        {
            title: "Number of Pages",
            value: "134 Pages",
            id: "1",
            img: "https://cdn-icons-png.flaticon.com/512/864/864685.png"
        },
        {
            title: "Number of Pages",
            value: "174 Pages",
            id: "2",
            img: "https://cdn-icons-png.flaticon.com/512/864/864685.png"

        }
    ]

    useEffect(() => {
        // console.log('cvData', cvData)
    }, [])

    // useEffect(() => {
    //     let c = localStorage.getItem("canvas")
    //     if (c) {
    //         c = JSON.parse(c)

    //         setCanvas(c ?? [])
    //     }
    // }, [imgURL])

    const handleFileInput = (e) => {


        if (!e.target.files || e.target.files.length === 0) {
            setImgURL(undefined)
            return
        }
        let objurl = URL.createObjectURL(e.target.files[0])

        // I've kept this example simple by using the first image instead of multiple
        setImgURL(objurl)
        setUrl(objurl)

    }

    return (
        <>

            <div className='CNSlides' >
                <RecoilPersister recoilState={OneStep} />
                <div id='StepOne' >
                    <h2>DESIGN YOUR NOTEBOOK IN FEW CLICK</h2>
                    <br />

                    <div className='CNSlideChip' >Note: Images size should not exceed 2MB.</div>

                    <p>
                        <input type={"checkbox"} onChange={e => setChecked(e.target.checked)} checked={checked} />
                        {"   "}
                        I agree to these Term and Conditions
                    </p>
                    <div className='SODiv' >
                        {
                            imgURL ? <div className="kdjglsd" >
                                <Swiper slidesPerView={3}
                                    spaceBetween={30}
                                    slidesPerGroup={3}
                                    loop={false}
                                    // loopFillGroupWithBlankk={true}
                                    allowTouchMove={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper2" >
                                    {
                                        cvData.length ?
                                            cvData?.map((c) => {
                                                console.dir(`BeginDesign: ${JSON.stringify(c.canvas)}`)
                                                return (
                                                    <SwiperSlide>
                                                        <div className="lsdkajgoiweiwe" onClick={() => {
                                                            setCv(true)
                                                            setsCv(c)
                                                        }} >

                                                            <FabricCanvas loadCv={c.canvas ?? null} c={c} canvii={cvData} imgURl={imgURL} />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            }) : ""
                                    }



                                </Swiper>
                            </div> : <>
                                <label id='SolabelImageINput' htmlFor='SodivImage'  >
                                    <img src='/copy.png' width={"100px"} />
                                    <div className='LJKLjl' >Upload Image</div>
                                    <p>{!imgURL ? "or drag and drop images" : imgURL}</p>
                                </label>
                                <input type={"file"} hidden id='SodivImage' onChange={handleFileInput} onClick={(e) => {
                                    if (!checked) {
                                        e.preventDefault()
                                        return toast.error("Please Agree to our term and condion")
                                    }
                                }} />
                            </>
                        }
                    </div>
                    <img src='/copy.png' className='SOFImage' />
                </div>
            </div>
        </>

    )
}

export default BeginDesgin