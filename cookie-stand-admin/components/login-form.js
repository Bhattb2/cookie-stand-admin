import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (

        <form className="mt-2 ml-3 mr-3 bg-green-200 rounded-lg p-7 pd-5" onSubmit={submitHandler}>
            <div className="mt-0 mr-1 text-sm font-bold text-center">
                <label className="block text-center" htmlFor="username">USER NAME</label>
                <input className="w-9/12 p-3 mt-2 block-align text-align form-input" type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
            </div>

            <div className="mt-0 mr-1 text-sm font-bold text-center">
                <label className="block mt-5 text-center" htmlFor="password">PASSWORD</label>
                <input className="w-9/12 p-3 mt-2 block-align text-align form-input" type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="Password" />
            </div>

            <button className="w-9/12 p-5 mt-12 ml-16 text-sm font-bold bg-green-500 rounded-lg " type="submit">SIGN IN</button>

        </form>
    );
}