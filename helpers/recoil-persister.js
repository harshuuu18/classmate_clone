import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { canvasData } from '../recoil/customize.atom';

function RecoilPersister({ recoilState, extra }) {
    const [val, setVal] = useRecoilState(recoilState)
    const [cvData, setCvData] = useRecoilState(canvasData)

    const key = recoilState.key;
    useEffect(() => {
        if (typeof window !== undefined) {
            let value = localStorage.getItem(key)
            if (value) {
                value = JSON.parse(value)
                setVal(value)
            }

            if (extra) {

                if (!cvData.length) {


                    let fkArray = Array.from({ length: value?.value ? value?.value : 1 }).map((e, i) => {
                        return {
                            id: i,
                            canvas: {}
                        }
                    })
                    setCvData(fkArray)

                }


            }
        }
    }, [])

    return (
        <div></div>
    )
}

export default RecoilPersister