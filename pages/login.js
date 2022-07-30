import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addAuth } from '../src/Store/AuthSlice';
import { appName, loginuserApi, ShowAllUsersApi } from '../src/Api/FormApi';
import { allMessageApi, shoWAllConvApi } from '../src/Api/ChatUserApi';
import { addChatUser } from '../src/Store/ChatUserSlice';
import { addChatAdmin } from '../src/Store/ChatAdminSlice';
import { addusers } from '../src/Store/UsersSlice';

const Login = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [email,setemail] = React.useState("");
    const [password,setpassword] = React.useState("");
    const [err,seterr] = React.useState("");

    async function login(e) {
        e.preventDefault();

        if(email =='' || email.includes('@') == false) return seterr('Enter the email');
        if(password =='' || password.length < 8) return seterr('Enter a password greater than 8 numbers or letters');

        seterr('')
        
        let formData = new FormData();

        formData.append("email", email);
        formData.append("password", password);

        loginuserApi(formData)
        .then( (responsee) => {
            if (responsee.data.data.token){
                localStorage.setItem("username", responsee.data.data.username);
                localStorage.setItem("email", responsee.data.data.email);
                localStorage.setItem("phone", responsee.data.data.phone);
                localStorage.setItem("country", responsee.data.data.country);
                localStorage.setItem("city", responsee.data.data.city);
                localStorage.setItem("token", responsee.data.data.token);
                localStorage.setItem("role", responsee.data.data.role);
                localStorage.setItem("id", responsee.data.data.id);
                localStorage.setItem("message", responsee.data.message);

                dispatch(addAuth(responsee.data.data));

                if(responsee.data.data.role =="user") {

                    allMessageApi(responsee.data.data.token, responsee.data.data.id)
                    .then((responsee) =>{
                        dispatch(addChatUser(responsee.data.messages));
                        router.push('/')
                    })
                    .catch( () => {});
                }
    
                if(responsee.data.data.role =="admin") {
    
                    shoWAllConvApi(responsee.data.data.token)
                    .then((responsee) =>{
                        dispatch(addChatAdmin(responsee.data.data));
                        router.push('/')
                    })
                    .catch( () => console.log("حدث خطأ في الحصول على المحادثات الأدمن"));

                    ShowAllUsersApi(responsee.data.data.token)
                    .then((res) => {
                        dispatch(addusers(res.data.data));
                    })
                    .catch(() => console.log("حدث خطأ في جلب بيانات المستخدمين"));

                }
            }

        })
        .catch( () => {seterr('email or Password does not exist')});
        
    }

    return (
        <form>
            <Head>
                <meta name="keywords" content={`Login to ${appName} , Login to App, Login to Programming`}></meta>
                <meta name="description" content={`Login to ${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <title>Login to {appName}</title>
                <meta property="og:description" content={`Login to ${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <meta property="og:title" content={`Login to ${appName}`} />
            </Head>
            <div className="container height-con"  style={{maxWidth:'1000px',margin:'5% auto'}} >
                <div className=" margin padding app-box-shadow" >
                    <div className="center" >
                        <div className="bar margin display-container" >
                            <div className="bar-item xlarge textc-5 bottombar borderc-5">Login</div>
                        </div>
                    </div>
                    <div className="row-padding">
                        <div className="col s100 padding" >
                            <input type="email" className="input transparent round textc-2" placeholder="Email" name="email" value={email} onChange={e => setemail(e.target.value) }/>
                        </div>
                        <div className="col s100 padding" >
                            <input type="password" className="input transparent round textc-2" placeholder="Password" name="password" value={password} onChange={e => setpassword(e.target.value) }/>
                        </div>
                        {err != '' ?
                            <div className="col s100 " >
                                <div className="large textc-4"> * {err}</div>
                            </div>
                        :
                        null
                        }
                        <div className="col s100 padding" >
                            <button type="submit" className="btn round-large display-block" name="signup_button" onClick={(e) => login(e)} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Login