/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Head from 'next/head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, addMiddleware } from '../../Store/AuthSlice'
import { showAllProjectsApi } from '../../Api/ProjectApi'
import { addProject } from '../../Store/ProjectSlice'
import Upscroll from '../Upscroll/Upscroll'
import { appName, Middleware } from '../../Api/FormApi'
import { useRouter } from 'next/router';
import { allMessageApi, shoWAllConvApi } from '../../Api/ChatUserApi'
import { addChatUser } from '../../Store/ChatUserSlice'
import { addChatAdmin } from '../../Store/ChatAdminSlice'

const AppLayout = ({ children }) => {

    const Auth = useSelector(state => state.auth.data)
    const router = useRouter();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(addAuth(null));
        dispatch(addMiddleware(null));
        localStorage.clear();
        router.push('/');
    }

    React.useEffect(() => {

        if(localStorage.getItem("token")) {
            const username = localStorage.getItem("username");
            const email = localStorage.getItem("email");
            const phone = localStorage.getItem("phone");
            const country = localStorage.getItem("country");
            const city = localStorage.getItem("city");
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
            const id = localStorage.getItem("id");
            const message = localStorage.getItem("message");

            dispatch(addAuth({username, email, phone, country, city, token, role, id, message}));

            if(token && role =="user") {

                allMessageApi(token, id)
                .then((responsee) =>{
                    dispatch(addChatUser(responsee.data.messages));

                })
                .catch( () => alert("حدث خطأ في الحصول على المحادثة"));
            }

            if(token && role =="admin") {

                shoWAllConvApi(token)
                .then((responsee) =>{
                    dispatch(addChatAdmin(responsee.data.data));

                })
                .catch( () => alert("حدث خطأ في الحصول على المحادثات الأدمن"));
            }
        }

        showAllProjectsApi()
        .then((res) => {
            dispatch(addProject(res.data.data));
        })
        .catch((err) => console.error(err.message));

    },[])

    React.useEffect(() => {

    if(localStorage.getItem("token")) {

        const token = localStorage.getItem("token");

        Middleware(token)
        .then((res) => {
            dispatch(addMiddleware(res.data.message));
        })
        .catch((err) => logout());

    }

    })

    return (
        <div className=' display-container bgc-1 height-100vh'>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="application-name" content={`${appName}`}></meta>
                <meta name="theme-color" content="#39c7da"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Upscroll/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout