import React from 'react'
import { useRecoilState } from 'recoil'
import { SwiperSlide } from 'swiper/react'
import { Four } from '../../recoil/customize.atom'

function StepFour() {
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
                <p>4) Select Notebook Binding

                </p>
                <br />
                <div className='SODiv' >
                    {
                        data.map(({ id, img, title, value }) => {

                            return (
                                <span onClick={() => {
                                    setVal({
                                        title, value
                                    })
                                }} style={{ borderColor: val.value == value ? "#ffdd40" : "" }}  >

                                    {
                                        val.value == value ?

                                            <div className='checkSpan' ><i class="fa fa-check" aria-hidden="true"></i></div>


                                            : ""

                                    }
                                    <img src={img} />
                                    <h6>{value}</h6>
                                </span>
                            )
                        })
                    }

                </div>
                <img src='/copy.png' className='SOFImage' />
            </div>
        </div>

    )
}

export default StepFour