import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric'
function DesignNoteBook() {
    const [canvas, setCanvas] = useState('');
    const [imgURL, setImgURL] = useState('');
    useEffect(() => {
        setCanvas(initCanvas());
    }, []);
    useEffect(() => {
        if (!imgURL) return;
        addImg(imgURL, canvas)
    }, [imgURL])

    const addImg = (url, canvi) => {

        new fabric.Image.fromURL(url, img => {
            img.scale(0.75);
            canvi.add(img);
            canvi.setActiveObject(img)
            canvi.renderAll();
            img.hasControls = true;

        });
    }

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 800,
            width: 800,
            backgroundColor: 'pink',

        })
    )
    const onSelectFile = e => {
        console.log(e.target.files)
        if (!e.target.files || e.target.files.length === 0) {
            setImgURL(undefined)
            return
        }
        let objurl = URL.createObjectURL(e.target.files[0])
        console.log({ objurl })
        // I've kept this example simple by using the first image instead of multiple
        setImgURL(objurl)
    }




    return (
        <div id='DesignNoteBook' >
            <h1>Fabric.js on React - fabric.Canvas('...')</h1>
            <input
                type="file"
                onChange={onSelectFile}
            />
            <canvas id="canvas" />

        </div>
    )
}

export default DesignNoteBook