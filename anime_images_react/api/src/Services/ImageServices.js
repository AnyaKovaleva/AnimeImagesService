async function showPreviewAndSetImgValue(e, setImage, idNum=1) {
    if (e.target.files.length > 0){
        const image = (e.target.files[0])

        let src = URL.createObjectURL(image);
        let preview = document.getElementById(`file-preview-${idNum}`);
        preview.src = src;

        setImage(image)
    }
}

export {showPreviewAndSetImgValue};