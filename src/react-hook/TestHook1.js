import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

 const TestHook1=()=> {
    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset } = useForm();

    // user state for form
    const [user, setUser] = useState(null);

    // effect runs on component mount
    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setUser({ title: '', firstName: '', lastName: '' }), 1000);
    }, []);

    // effect runs when user state is updated
    useEffect(() => {
        // reset form with user data
        reset(user);
    }, [user]);

    function onSubmit(data) {
        // display form data on submit
       localStorage.setItem("user",JSON.stringify(data));
        return false;
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">React Hook Form - Set Form Values in useEffect Example</h5>
            <div className="card-body">
                {user &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Title</label>
                                <select name="title" {...register('title')} className="form-control">
                                    <option value=""></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </select>
                            </div>
                            <div className="form-group col-5">
                                <label>First Name</label>
                                <input name="firstName" type="text" {...register('firstName')} className="form-control" />
                            </div>
                            <div className="form-group col-5">
                                <label>Last Name</label>
                                <input name="lastName" type="text" {...register('lastName')} className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-1">Submit</button>
                            <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                }
                {!user &&
                    <div className="text-center p-3">
                        <span className="spinner-border spinner-border-lg align-center"></span>
                    </div>
                }
            </div>
        </div>
    )
}

export default TestHook1;