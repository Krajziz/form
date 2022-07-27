import { useState, useEffect } from 'react';
import TextField from './TextField.js';
import Select from './Select.js';
import LangNav from './LangNav.js';
import { useContext } from 'react';
import { WBFSContext } from '../context/WBFSContext';

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export default function Form() {
    const activeLang = useContext(WBFSContext);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [values, setValues] = useState({
        FirstName : "chriaas",
        LastName : "abcdefghijk",
        Email : "email@email.com",
        Street : "",
    });
    const [formErrors, setFormErrors] = useState({});

    // Pass in
    //      default values
    //      validation / validationschema

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(STATUS.SUBMITTING);
        setFormErrors(validate(values));
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0)
        {
            setTimeout(() => {
             setStatus(STATUS.COMPLETED);
            }, 3000)
        }
        //console.log(e);
    }

    useEffect (() => {
        if (Object.keys(formErrors).length === 0 && status === STATUS.SUBMITTING) {
            console.log(values);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.FirstName)
        {
            errors.FirstName = "Firstname is required";
        }
        if (!values.LastName)
        {
            errors.LastName = "Firstname is required";
        }
        if (!values.Email)
        {
            errors.Email = "Firstname is required";
        }
        console.log(errors);
        return errors;
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const langs = ["NL","FR","EN","DE"];

    if (status === STATUS.COMPLETED) {
        return ( <h1>Form has been submitted</h1> );
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            {
               status === STATUS.SUBMITTING &&
               <div>
                 You are submitting the following:
                 <ul>
                   {Object.entries(values).map(([name, value]) => (
                     <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                   ))}
                 </ul>
               </div>
            }
            <LangNav langs={langs}/>
            <TextField name="FirstName" placeholder="FirstName" value={values["FirstName"]} onChange={onChange}/>
            <TextField name="LastName" placeholder="LastName" value={values["LastName"]} onChange={onChange}/>
            <TextField name="Email" placeholder="Email" value={values["Email"]} onChange={onChange}/>
            <TextField name="Street" placeholder="Street" value={values["Street"]} onChange={onChange}/>

            <br/>
            {status === STATUS.SUBMITTING && <span className="spinner-border spinner-border-sm mr-1"></span>}
            <input className="float-end" disabled={status === STATUS.SUBMITTING} type="submit" value="Submit" />
          </form>
      </>
    );
}