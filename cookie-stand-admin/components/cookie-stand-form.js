import { useState } from 'react'

export default function CookieStandForm({ onCreate }) {

    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }

        setValues({ ...values, [name]: value });
    }
    return (
        <form className="flex p-3 my-2 space-y-16 text-xs font-bold bg-green-200 rounded-l rounded-r ml-7 mr-7 md:inline-flex" onSubmit={submitHandler}>
            <div className="" >
                <label className="text-xs" htmlFor="location">Add Location</label>
                <input className="" type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" />
                
                <button className="w-7/12 p-2 mt-2 bg-green-500 rounded-l-sm rounded-r-sm " type="submit">Create Stand</button>
            </div>
            
            
            <FormInputSection>
                <label htmlFor="min">Minimum Customers per Hour</label>
                <input type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} />
            </FormInputSection>
            <FormInputSection>
                <label htmlFor="max">Maximum Customers per Hour</label>
                <input type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} />
            </FormInputSection>
            <FormInputSection>
                <label htmlFor="avg">Average Cookies per Sale</label>
                <input type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} />
            </FormInputSection>
        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div>
            {children}
        </div>
 
    );
}