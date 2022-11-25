import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber } from "react-phone-number-input";


const PhoneNumber = () => {
    const [value, setValue] = useState();
    return(
        <div>
            <label>
                Phone Number
            </label>
            <PhoneInput
            defaultCountry="ID"
            value={value}
            onChange={value => setValue(value)}
            />
            {value && isValidPhoneNumber(value) ? '' : 'not valid number'}
        </div>
    )
}

export default PhoneNumber;