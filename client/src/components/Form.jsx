import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





const Form = () => {
    const [_name, setName] = useState("")
    const [preferredPosition, setPreferredPosition] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()


    const formValidator = () => {
        let isValid = true
        if (_name.length < 2) {
            isValid = false
        }
        return isValid
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post("http://localhost:8000/api/players", {
                _name: _name,
                preferredPosition: preferredPosition
            })
            .then(res => {
                console.log("Form Results: ", res.data)
                navigate("/")
            })
            .catch(err => console.log(err))
        }
        else {
            setErrors({
                _name: "Name must be at least 2 characters",
                required: "Name is a required field"
            })
        }
    }


    return (
        <div className = "container">
            <h1 className = "text text-warning mt-5">Add Player Below</h1>
            {errors._name? <p className = "text-danger">{errors._name}</p>: ""}
            {errors.required? <p className = "text-danger">{errors.required}</p>: ""}
            <form onSubmit = {onSubmitHandler} className = "form">
                <div>
                    <label className = "form-label">
                        <input type="text" placeholder = "Name" name = "_name" onChange = {(e) => setName(e.target.value)} className = "form-control from-control-lg"/>
                    </label>
                </div>
                <div>
                    <label className = "form-label">
                        <input type="text" placeholder = "Preferred Position" name = "preferredPosition" onChange = {(e) => setPreferredPosition(e.target.value)} className = "form-control from-control-lg"/>
                    </label>
                </div>
                <input type="submit" value="Submit" className = "btn btn-outline-secondary"/>
            </form>
        </div>
    )
}

export default Form