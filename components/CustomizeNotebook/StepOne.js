import React from 'react'
import { useRecoilState } from 'recoil'

import { OneStep } from '../../recoil/customize.atom'


function StepOne() {

    const [val, setVal] = useRecoilState(OneStep)
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

    return (
        <div className='CNSlides' >
            <div id='StepOne' >
                <h2>DESIGN YOUR NOTEBOOK IN FEW CLICK</h2>
                <br />
                <p>1) Select Number of Pages</p>
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

export default StepOne