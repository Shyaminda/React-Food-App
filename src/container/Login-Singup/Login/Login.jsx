    import React, { useState } from 'react';
    import './Login.css'; // Import the CSS file
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import { Link } from 'react-router-dom';

    const Login = () => {
        const navigate=useNavigate();
        
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const clearForm = () => {
        setFormData({
        email: '',
        password: '',
        });
    };

    const validateForm = () => {
        const newErrors = {};

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email';
        }

        if (formData.password.length === 0) {
        newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
        // Handle form submission (e.g., send data to a server)
        axios
            .post("http://127.0.0.1:3001/login", {
            email: formData.email,
            password: formData.password,
            })
            .then((response) => {
            console.log(response.data)
            clearForm();
            if(response.data.message==="Login successful"){
                navigate("/");
            }
            })
            .catch((error) => {
            console.log(error);
            });
        }
    };

    return (
        <div className="container">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="formGroup">
            <label className="label" htmlFor="email">
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
            />
            {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div className="formGroup">
            <label className="label" htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
            />
            {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <button type="submit" className="button">
            Login
            </button>

            <p className="signUpLink">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>

        </form>
        </div>
    );
    };

    export default Login;
