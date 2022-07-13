import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { appName, registeruserApi } from '../src/Api/FormApi';
import Link from 'next/link'

function Form(props) {

    const type = props.type;
    const name = props.name;
    const value = props.value;
    const setvalue = props.setvalue;

    return (
        <div className="col m50 padding" >
            <input type={type} className="input transparent round textc-2" placeholder={name} value={value} onChange={e => setvalue(e.target.value) }/>
        </div>
    );
}

const Register = () => {

    const router = useRouter();

    const [username,setusername] = React.useState("");
    const [email,setemail] = React.useState("");
    const [password,setpassword] = React.useState("");
    const [confirmPassword,setconfirmPassword] = React.useState("");
    const [country,setcountry] = React.useState("");
    const [city,setcity] = React.useState("");
    const [phone,setphone] = React.useState("");
    const [err,seterr] = React.useState("");

    const register = (e) => {
        e.preventDefault();

        if(username=='') return seterr('Enter the username');
        if(email=='') return seterr('Enter the email');
        if(password =='' || password.length < 8) return seterr('Enter a password greater than 8 numbers or letters');
        if(confirmPassword =='' || confirmPassword.length < 8) return seterr('Enter a confirmPassword greater than 8 numbers or letters');
        if(country=='') return seterr('Enter the country');
        if(city=='') return seterr('Enter the city');
        if(phone=='') return seterr('Enter the phone');

        seterr('');

        if(password === confirmPassword) {

            let formData = new FormData();

            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("c_password", confirmPassword);
            formData.append("country", country);
            formData.append("city", city);
            formData.append("phone", phone);
            
            registeruserApi(formData)
            .then( (responsee) => {
                router.push('/login')
            })
            .catch( () => seterr("user name or email or Phone number already used"));

        } else {
            seterr("Password mismatch");
        }

    }

    return (
        <form>
            <Head>
                <meta name="keywords" content={`Register for ${appName} , Register for App, Register for Programming`}></meta>
                <meta name="description" content={`Register for ${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <title>Register for {appName}</title>
            </Head>
            <div className="container height-con"  style={{maxWidth:'1000px',margin:'5% auto'}}>
                <div className="margin padding app-box-shadow" >
                    <div className="center" >
                        <div className="bar margin display-container" >
                            <div className="bar-item xlarge textc-5 bottombar borderc-5">Register</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <Form type={"text"} name={"User Name"} value={username} setvalue={setusername}/>
                        <Form type={"email"} name={"Email"} value={email} setvalue={setemail}/>
                        <Form type={"password"} name={"Password"} value={password} setvalue={setpassword}/>
                        <Form type={"password"} name={"Confirm Password"} value={confirmPassword} setvalue={setconfirmPassword}/>
                        <Form type={"text"} name={"Country"} value={country} setvalue={setcountry}/>
                        <Form type={"text"} name={"City"} value={city} setvalue={setcity}/>
                        <Form type={"text"} name={"Phone"} value={phone} setvalue={setphone}/>
                        {err != '' ?
                            <div className="col s100" >
                                <div className="large textc-4"> * {err}</div>
                            </div>
                        :
                        null
                        }
                        <div className="col s100 padding" >
                            <button type="submit" className="btn round-large display-inlineblock" style={{margin:'16px 16px 16px 0px'}} onClick={(e) => register(e)}>Register</button>
                            <Link href="/login">
                                <a className="btn round-large display-inlineblock margin">
                                    Already registered ?
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Register