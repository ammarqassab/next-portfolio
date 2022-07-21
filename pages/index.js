import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import MyServices from '../src/components/MyServices/MyServices';
import Menu from '../src/components/Menu/Menu';
import { addAuth, addMiddleware } from '../src/Store/AuthSlice';
import ProjectsGallery from '../src/components/ProjectsGallery/ProjectsGallery';
import Notifications from '../src/components/Chat/Notifications';
import MyServices2 from '../src/components/MyServices2/MyServices2';
import MyServices3 from '../src/components/MyServices3/MyServices3';
import { appName, logoutuserApi } from '../src/Api/FormApi';
import ApplicationLogo from '../src/components/ApplicationLogo';

const Navelink = ({link, icone, children, ...prope}) => {
    return (
        <div className='col m50 l25' >
            <Link href={link}><a className={` button xlarge border borderc-2 hover-bgc-1 round-large textc-2 hover-textc-5 hover-borderc-1 margin-top ${icone} `} {...prope}>{children}</a></Link>
        </div>
    );
}

const Home = () => {

    const services = React.useRef();
    const projects = React.useRef();

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);
    const dispatch = useDispatch();

    const logout = () => {
        logoutuserApi(Auth.token)
        .then((responsee) =>{console.log(responsee.data.messages)})
        .catch( () => console.log("حدث خطأ في تسجيل الخروج"));

        dispatch(addAuth(null));
        dispatch(addMiddleware(null));
        localStorage.clear();
    }

    return (
        <>
            <Head>
                <meta name="keywords" content={`${appName}, App, Programming`}></meta>
                <meta name="description" content={`${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <title>{appName}</title>
            </Head>

            <header>

                <div className=' row bgc-header height-header text-overflow2' style={{marginBottom:'-2px'}} >
                    <div className=' col m75 padding' >
                        <div className='row margin-top' >
                            <div className='col s100 textc-2 xlarge margin' >
                                <h1 className='margin-right textc-4 xlarge'><ApplicationLogo/> :</h1>
                                <p className=' animate-left xlarge'>We are a company interested in programming and developing website and mobile applications</p>
                            </div>
                            <div className='col s100 margin' >
                                <div className='row animate-right' >
                                    {Auth ?
                                    <>
                                        {Auth && middleware=='Admin' ? <Navelink link={"/dashboard"} icone={'fas fa-cogs'}> Dashboard</Navelink> : Auth && middleware=='User' ? <Navelink link={"/chat"} icone={' fab fa-telegram-plane'}> Chat</Navelink>:null}
                                        <Navelink link={"/"} icone={' fas fa-sign-out-alt'} onClick={() => logout()}> Logout</Navelink>
                                    </>
                                    :
                                    <>
                                        <Navelink link={"/register"} icone={' fas fa-user-plus'}> Register</Navelink>
                                        <Navelink link={"/login"} icone={' fas fa-sign-in-alt'}> Login</Navelink>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col m25' ></div>
                </div>

                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 C 0,400 0,200 0,200 C 102.03571428571428,229.67857142857142 204.07142857142856,259.35714285714283 339,273 C 473.92857142857144,286.64285714285717 641.7499999999999,284.25 778,253 C 914.2500000000001,221.74999999999997 1018.9285714285716,161.64285714285714 1124,148 C 1229.0714285714284,134.35714285714286 1334.5357142857142,167.17857142857144 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" fill="#0070b1" transform="rotate(-180 720 200)"></path></svg>

            </header>
            <Menu services={services} projects={projects}/>
            <MyServices services={services}/>
            <MyServices2/>
            <ProjectsGallery projects={projects}/>
            <MyServices3/>
            {Auth && middleware=='User' ? <Notifications/>:null}
        </>
    )
}
export default Home