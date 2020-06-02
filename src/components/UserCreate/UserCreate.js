import React from 'react';
import { Button } from 'react-bootstrap';

let date = [];
for (let index = 1; index < 32; index++) {
    date.push(<option value={index} name={index}>{index}</option>);
    
}

let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let year = [];
for (let index = 1980; index <= 2020; index++) {
    year.push(<option value={index} name={index}>{index}</option>);
    
}

const UserCreate = ({showStripe}) => {
    return (
        <div>
            <div className="container">
                <form>
                    <div className="row mb-4">
                        <div className="col">
                            <label for="firstName" className="pl-1">First Name:</label>
                            <input type="text" id="firstName" className="form-control" placeholder="enter your First name"/>
                        </div>
                        <div className="col">
                            <label for="lastName" className="pl-1">Last Name:</label>
                            <input type="text" id="lastName" className="form-control" placeholder="enter your Last name"/>
                        </div>
                    </div>

                    <div className="row  mb-4">
                        <div className="col">
                            <label for="email" className="pl-1">Email:</label>
                            <input type="text" id="email" className="form-control" placeholder="enter your email"/>
                        </div>
                        <div className="col">
                            <label for="phone" className="pl-1">Mobile Number:</label>
                            <input type="text" id="phone" className="form-control" placeholder="enter your mobile number"/>
                        </div>
                    </div>

                    <div className="row  mb-4">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <label for="day" className="pl-1">day:</label>
                                    <select class="form-control">
                                        <option>date</option>
                                        {date}
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="month" className="pl-1">Month:</label>
                                    <select class="form-control">
                                        <option>month</option>
                                        {
                                            month.map((value) => {
                                                return <option value={value}>{value}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="year" className="pl-1">year:</label>
                                    <select class="form-control">
                                        <option>year</option>
                                        {year}
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <label for="phone" className="pl-1">Gender:</label>
                            <select class="form-control">
                                <option>gender</option>
                                <option value="male" name="male">male</option>
                                <option value="female" name="female">female</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <label for="address" className="pl-1">Address:</label>
                            <input type="text" id="address" className="form-control" placeholder="enter your address"/>
                        </div>
                        <div className="col">
                            <label for="country" className="pl-1">Country:</label>
                            <input type="text" id="country" className="form-control" placeholder="enter your country"/>
                        </div>
                    </div>

                    <div className="row  mb-4">
                        <div className="col">
                            <label for="city" className="pl-1">City:</label>
                            <input type="text" id="city" className="form-control" placeholder="enter your city"/>
                        </div>
                        <div className="col">
                            <label for="postcode" className="pl-1">postcode:</label>
                            <input type="text" id="postcode" className="form-control" placeholder="enter your postcode"/>
                        </div>
                    </div>
                </form>
                <div className="text-right">
                    <Button className="btn-primary text-uppercase font-weight-bolder border-0 px-5" onClick={() => showStripe()}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export default UserCreate;