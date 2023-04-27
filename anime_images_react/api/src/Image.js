import React, {useEffect} from 'react';
import {showPreviewAndSetImgValue} from "./Services/ImageServices";
import Validation from "./Components/Validation";

function Image({setImg}) {
    return (
        <div className={"container-fluid pr-image-container"}>
            <img
                id="file-preview-1"
                className={"image"}
            />

                <label
                    htmlFor="file-ip-1"
                    className="select-image"
                >
                    select image
                </label>

            <div className={"text-error"} id={"image-error"}>

            </div>
            <input
                type="file"
                id="file-ip-1"
                style={{visibility: "hidden", width:0, height: 0}}
                onChange={(event) => showPreviewAndSetImgValue(event, setImg)}
                accept={"image/*"}
            />
        </div>
    );
}

export default Image;