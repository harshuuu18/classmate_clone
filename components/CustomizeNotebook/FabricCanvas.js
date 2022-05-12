import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { Canvas, canvasData, selectedCanvas } from '../../recoil/customize.atom';


function FabricCanvas({ width = "100px", height = "141px", loadCv, c, canvii, imgURl }) {
    // const { editor, onReady } = useFabricJSEditor({});
    // const [canvas, setCanvas] = useRecoilState(Canvas)
    const [url, setURL] = useState("")
    const [canva, setCanva] = useState("")
    const [cvData, setCvData] = useRecoilState(canvasData)
    const [selectedCv, setsCv] = useRecoilState(selectedCanvas)


    useEffect(() => {
        // console.log('c.id', c.id)
        // console.log("1")


        // console.log("2")


        // console.log('cvData', cvData)

        var canvas = new fabric.Canvas('canvas', {
            height: 141,
            width: 100,

        });

        // console.log("3")


        if (!canva) {

            setCanva(canvas)
        }
        // console.log("4")

        // console.log(loadCv)
        if (Object.keys(loadCv).length > 0) {

            // console.log("im here first")
            canvas.loadFromJSON(loadCv, function () {
                canvas.renderAll();

                const dataURL = canvas.toDataURL({
                    width: canvas.width,
                    height: canvas.height,
                    left: 0,
                    top: 0,
                    format: 'png',
                });


                setURL(dataURL)

                var json = canvas.toJSON(['preserveObjectStacking'])
                // console.log('json', json)

                // let can = [...cvData].map((item) => {
                //     if (item.id == c.id) {
                //         return {
                //             id: item.id,
                //             canvas: json
                //         }
                //     }
                //     return item;
                // })
                // // console.log("can", can)

                // can?.forEach((e, i) => {
                //     if (e.id == c.id) {
                //         can[i].canvas = json;
                //     }
                // })

                // setCvData(can)


            }, function (o, object) {
                // console.log(o, object)
            })


            return;
        } else {


            // console.log("im here SEcond")


            canvas.preserveObjectStacking = true;

            fabric.Image.fromURL("/A4.png", function (img) {

                // console.log(canvas.width, canvas.height)
                canvas.setOverlayImage(img, canvas.renderAll.bind(canvas), {
                    opacity: 1,
                    // height: editor.canvas.height,
                    // width: editor.canvas.width,
                    // left: 400,
                    // top: 400,
                    // left: 0,
                    right: 0,
                    originX: 'left',
                    originY: 'top',
                    crossOrigin: 'anonymous'
                });
                img.scaleToWidth(100)
                img.scaleToHeight(141);
                canvas.renderAll();
                // oImg.hasControls = false;
                // oImg.lockMovementX = true;
                // oImg.lockMovementY = true;

                // if (imgURl) {


                //     fabric.Image.fromURL(imgURl, function (oImg) {
                //         oImg.scale(0.20)
                //         oImg.crossOrigin = "anonymous"
                //         oImg.cacheKey = "MyImage"
                //         // oImg.hasControls = false;
                //         // oImg.lockMovementX = true;
                //         // oImg.lockMovementY = true;
                //         canvas.add(oImg)
                //         const dataURL = canvas.toDataURL({
                //             width: canvas.width,
                //             height: canvas.height,
                //             left: 0,
                //             top: 0,
                //             format: 'png',
                //         });


                //         setURL(dataURL)




                //         var json = canvas.toJSON(['preserveObjectStacking'])
                //         // console.log('json', json)

                //         let can = [...cvData].map((item) => {
                //             if (item.id == c.id) {
                //                 return {
                //                     id: item.id,
                //                     canvas: json
                //                 }
                //             }
                //             return item;
                //         })
                //         // console.log("can", can)

                //         can?.forEach((e, i) => {
                //             if (e.id == c.id) {
                //                 can[i].canvas = json;
                //             }
                //         })

                //         setCvData(can)

                //     }, { crossOrigin: 'Anonymous' });
                // }
                const dataURL = canvas.toDataURL({
                    width: canvas.width,
                    height: canvas.height,
                    left: 0,
                    top: 0,
                    format: 'png',
                });


                setURL(dataURL)




                var json = canvas.toJSON(['preserveObjectStacking'])
                // console.log('json', json)

                let can = [...cvData].map((item) => {
                    if (item.id == c.id) {
                        return {
                            id: item.id,
                            canvas: json
                        }
                    }
                    return item;
                })
                // console.log("can", can)



                can?.forEach((e, i) => {
                    if (e.id == c.id) {
                        can[i].canvas = json;
                    }
                })

                setCvData(can)
            }, { crossOrigin: 'Anonymous' });






        }

    }, [canva])
    return (

        <img src={url ?? "/A4.png"} width="100px" style={selectedCv?.id == c.id ? { border: "4px solid #bf8917" } : {}} />

    )

}

export default FabricCanvas