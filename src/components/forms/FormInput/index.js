import React from 'react';
import './styles.scss';
var ZiggeoApp = ({
    tags: [("name").valueOf(), ("email").valueOf()]
})
const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='formRow'>
            {label && (
                <label>
                    {label}
                </label>
            
            )}

            <input className='formInput' onChange={handleChange} {...otherProps} {...ZiggeoApp} />
        </div>
    );
}

export default FormInput;