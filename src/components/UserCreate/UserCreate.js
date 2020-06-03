import React from 'react';
import { Button } from 'react-bootstrap';

let date = [];
for (let index = 1; index < 32; index++) {
    date.push(<option value={index} name={index} key={index}>{index}</option>);
    
}

let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let year = [];
for (let index = 1980; index <= 2020; index++) {
    year.push(<option value={index} name={index} key={index}>{index}</option>);
    
}

const UserCreate = ({showStripe, showPlan}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let user = {
            full_name: data.get('firstName') + " " + data.get('lastName'),
            email: data.get('email'),
            phone: data.get('phone'),
            DOB: data.get('date')+'/'+data.get('month')+'/'+data.get('year'),
            gender: data.get('gender'),
            address: data.get('address')+", "+data.get('city')+", "+data.get('country')+", "+data.get('postcode')
        }
        showStripe(user);
    };
    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-3 mb-5 text-uppercase font-weight-bolder">User Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-4">
                        <div className="col">
                            <label htmlFor ="firstName" className="pl-1">First Name:</label>
                            <input type="text" id="firstName" name="firstName" className="form-control" placeholder="enter your First name" required/>
                        </div>
                        <div className="col">
                            <label htmlFor ="lastName" className="pl-1">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" className="form-control" placeholder="enter your Last name" required/>
                        </div>
                    </div>

                    <div className="row  mb-4">
                        <div className="col">
                            <label htmlFor ="email" className="pl-1">Email:</label>
                            <input type="text" id="email" name="email" className="form-control" placeholder="enter your email" required/>
                        </div>
                        <div className="col">
                            <label htmlFor ="phone" className="pl-1">Mobile Number:</label>
                            <input type="text" id="phone" name="phone" className="form-control" placeholder="enter your mobile number" required/>
                        </div>
                    </div>

                    <div className="row  mb-4">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor ="day" className="pl-1" name="day">Birth-date:</label>
                                    <select className="form-control"  name="date">
                                        <option>date</option>
                                        {date}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor ="month" className="pl-1" name="month">Month:</label>
                                    <select className="form-control" name="month">
                                        <option>month</option>
                                        {
                                            month.map((value) => {
                                                return <option key={value} value={value}>{value}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor ="year" className="pl-1" name="year">year:</label>
                                    <select className="form-control"  name="year">
                                        <option>year</option>
                                        {year}
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <label htmlFor ="phone" className="pl-1">Gender:</label>
                            <select className="form-control" name="gender">
                                <option>gender</option>
                                <option value="male" name="male">male</option>
                                <option value="female" name="female">female</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <label htmlFor="address" className="pl-1">Address:</label>
                            <input type="text" id="address" name="address" className="form-control" placeholder="enter your address"/>
                        </div>
                        <div className="col">
                            <label htmlFor ="country" className="pl-1">Country:</label>
                            <input type="text" id="country" name="country" className="form-control" placeholder="enter your country"/>
                        </div>
                    </div>

                    <div className="row  mb-4">
                        <div className="col">
                            <label htmlFor ="city" className="pl-1">City:</label>
                            <input type="text" id="city" name="city" className="form-control" placeholder="enter your city"/>
                        </div>
                        <div className="col">
                            <label htmlFor ="postcode" className="pl-1">postcode:</label>
                            <input type="text" id="postcode" name="postcode" className="form-control" placeholder="enter your postcode"/>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col">
                            <div className="text-left">
                                <Button className="btn-primary text-uppercase font-weight-bolder border-0 px-5" onClick={() => showPlan()}>Back</Button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text-right">
                                <Button type="submit" className="btn-primary text-uppercase font-weight-bolder border-0 px-5">Next</Button>
                                {/* onClick={() => showStripe()} */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserCreate;