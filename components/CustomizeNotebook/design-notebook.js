import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { getLongbookSvgImage } from "../../helpers/utils";


export default function App() {
    const { editor, onReady } = useFabricJSEditor({});


    const onAddCircle = () => {
        editor.addCircle()
        // editor.addText("helo")
        // let palete_colour = "gray";

        // let dominant_colour = "gray";

        // let svg_value;

        // svg_value = getLongbookSvgImage(palete_colour, dominant_colour);
        // let blob = new Blob([svg_value], { type: 'image/svg+xml' });
        // let url = URL.createObjectURL(blob);


        // fabric.Image.fromURL(url, function (img) {
        //     let img1 = img;
        //     editor.canvas.setOverlayImage(img, editor.canvas.renderAll.bind(editor.canvas), {
        //         opacity: 1,
        //         width: editor.canvas.width,
        //         height: editor.canvas.height
        //     });
        //     // // console.log(editor.canvas.height)
        //     img.scaleToWidth(10);
        //     img.scaleToHeight(200);
        //     editor.canvas.renderAll();
        //     // fabric.Image.fromURL('http://fabricjs.com/assets/pug.jpg', function (img) {
        //     //     img1.scaleToWidth(editor.canvas.getWidth());
        //     //     img1.hasControls = false;
        //     //     img1.lockMovementX = true
        //     //     img1.lockMovementY = true
        //     //     let img2 = img;
        //     //     img2.scaleToHeight(300);
        //     //     img2.left = 50;
        //     //     img2.top = 50;
        //     //     img2.globalCompositeOperation = 'source-atop';
        //     //     editor.canvas.add(img1);
        //     //     editor.canvas.add(img2);
        //     // });
        // }, { crossOrigin: 'Anonymous' });


        // // editor.canvas.setBackgroundImage("https://mymaster11.com/img/hero-banner.jpg", (d) => {
        // //     // // console.log(d)
        // // })


        // // // // console.log(getSvgUrl(ig))
        // // editor.addCircle();
    };

    const onAddRelkjctangle = () => {
        editor.addRectangle();

    };

    const downloadImg = () => {
        // let ig = editor.canvas.image({})
        const dataURL = editor.canvas.toDataURL({
            width: editor.canvas.width,
            height: editor.canvas.height,
            left: 0,
            top: 0,
            format: 'png',
        });
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return;
        svgToPng(ig, (imgData) => {
            // // console.log(imgData)
            // const pngImage = document.createElement('img');
            // document.body.appendChild(pngImage);
            // pngImage.src = imgData;
        });
        // let url = getSvgUrl(ig)

        // download(url)





    }

    function svgToPng(svg, callback) {
        const url = getSvgUrl(svg);
        svgUrlToPng(url, (imgData) => {
            // // console.log(URL.revokeObjectURL(url))
            callback(imgData);
        });
    }

    function download(source) {
        const fileName = source.split('/').pop();
        var el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }
    function svgUrlToPng(svgUrl, callback) {
        const svgImage = document.createElement('img');
        // imgPreview.style.position = 'absolute';
        // imgPreview.style.top = '-9999px';
        document.body.appendChild(svgImage);
        svgImage.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = svgImage.clientWidth;
            canvas.height = svgImage.clientHeight;
            const canvasCtx = canvas.getContext('2d');
            canvasCtx.drawImage(svgImage, 0, 0);
            const imgData = canvas.toDataURL('image/png');
            // // console.log(imgData)
            callback(imgData);
            // document.body.removeChild(imgPreview);
        };
        svgImage.src = svgUrl;
    }
    const [imgURL, setImgURL] = useState('');

    function getSvgUrl(svg) {
        return URL.createObjectURL(new Blob([svg], { type: 'image/png' }));
    }
    useEffect(() => {
        if (!imgURL) return;
        addImg(imgURL, 'canvas')
    }, [imgURL])

    const addImg = (url, canvi) => {

        fabric.Image.fromURL(url, function (oImg) {
            oImg.scale(0.20)
            oImg.crossOrigin = "anonymous"
            // oImg.hasControls = false;
            // oImg.lockMovementX = true;
            // oImg.lockMovementY = true;
            editor.canvas.add(oImg)

        }, { crossOrigin: 'Anonymous' });

        // new fabric.Image.fromURL(url, img => {
        //     img.scale(0.10);

        //     canvi.add(img);
        //     canvi.setActiveObject(img)
        //     canvi.renderAll();
        //     img.hasControls = true;


        // });
    }


    const onSelectFile = e => {
        // // console.log(e.target.files)
        if (!e.target.files || e.target.files.length === 0) {
            setImgURL(undefined)
            return
        }
        let objurl = URL.createObjectURL(e.target.files[0])
        // // console.log({ objurl })
        // I've kept this example simple by using the first image instead of multiple
        setImgURL(objurl)
    }


    const onAddRectangle = () => {
        editor.addRectangle()

    };

    const addSampleImg = () => {
        fabric.Image.fromURL('https://mymaster11.com/img/hero-banner.jpg', function (oImg) {
            oImg.scale(0.20)
            editor.canvas.add(oImg)
        }, { crossOrigin: 'Anonymous' });
    }

    const addText = () => {
        editor.addText("Sample Text")
    }

    return (
        <div id="DesignNoteBook">
            <h1>FabricJS React Sample</h1>
            <button onClick={onAddCircle}>Add circle</button>
            <button onClick={onAddRectangle}>Add Rectangle</button>
            <button onClick={addText} >Add Text</button>
            <button onClick={addSampleImg} >Sample Image</button>
            <button onClick={downloadImg} >Download</button>

            <input
                type="file"
                onChange={onSelectFile}
            />
            <FabricJSCanvas className="sample-canvas" onReady={onReady} >
                <div id="top" >hi</div>
            </FabricJSCanvas>
        </div>
    );
}
