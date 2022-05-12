import React from 'react'
import { useRecoilState } from 'recoil'
import { SwiperSlide } from 'swiper/react'
import { Four } from '../../recoil/customize.atom'

function InfoStep() {
    const [val, setVal] = useRecoilState(Four)
    let data = [
        {
            title: "Size of the Notebook",
            value: "134 Pages",
            id: "1",
            img: "https://cdn-icons-png.flaticon.com/512/864/864685.png"
        },
        {
            title: "Size of the Notebook",
            value: "174 Pages",
            id: "2",
            img: "https://cdn-icons-png.flaticon.com/512/864/864685.png"

        }
    ]
    return (
        <div className='CNSlides' >
            <div id='StepOne' >
                <h2>DESIGN YOUR NOTEBOOK IN FEW CLICK</h2>
                <br />

                <br />
                <div className='SODiv' >
                    <p>Please ensure to resize the images as necessary to fit the canvas. By clicking the image,
                        You can open the canvas & resize the image.
                    </p>

                </div>
                <img src='/copy.png' className='SOFImage' />
            </div>
        </div>

    )
}

export default InfoStep