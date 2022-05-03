import React from 'react'
import { useRecoilState } from 'recoil'
import { SwiperSlide } from 'swiper/react'
import { Five } from '../../recoil/customize.atom'

function StepFive() {

    const [val, setVal] = useRecoilState(Five)
    let data = [
        {
            title: "1",
            value: "134 Pages",
            id: "1",
            img: "https://cdn-icons-png.flaticon.com/512/864/864685.png"
        },
        {
            title: "2",
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
                <p>5) Select Notebook Quantity</p>
                <br />
                <div className='SODiv' >
                    {
                        data.map(({ id, img, title, value }) => {

                            return (
                                <div className='chooseQuantity' onClick={() => {
                                    setVal({
                                        title, value
                                    })
                                }} style={{ borderColor: val.value == value ? "#ffdd40" : "" }}  >
                                    {
                                        val.value == value ?

                                            <div className='checkSpan' ><i class="fa fa-check" aria-hidden="true"></i></div>


                                            : ""

                                    }
                                    <h6>{title}</h6>
                                    <p>{value}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <img src='/copy.png' className='SOFImage' />
            </div>
        </div>

    )
}

export default StepFive