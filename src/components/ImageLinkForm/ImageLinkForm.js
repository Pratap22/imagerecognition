import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className = 'f3 white'>
                {'Willbe detecting faces in your picture give it a try'}
            </p>
            <div className = 'center'>
                <div className = 'center pa4 br3 shadow-3' >
                    <input className = 'f4 pa2 w-70 center' type='text' onChange = {onInputChange}  />
                    <button className = 'w-30 f4 link ph3 pv2 dib white bg-light-purple' 
                    onClick = {onButtonSubmit}  > Detect </button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;