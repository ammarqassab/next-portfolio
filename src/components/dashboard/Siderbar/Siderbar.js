import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, addMiddleware } from '../../../Store/AuthSlice';
import { logoutuserApi } from '../../../Api/FormApi';

const Siderbar = () => {

    const Auth = useSelector(state => state.auth.data);
    const middleware = useSelector(state => state.auth.middleware);
    const dispatch = useDispatch();

    const [hideshow, sethideshow] = React.useState(false)

    const funhideshow = () => {
        hideshow ? sethideshow(false) : sethideshow(true);
    }

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
            <div className=' center'>
                <div className="sidebar-sticky transparent center">
                    <div className="bar margin-top" >
                        <div className="dropdown-click bar-item large padding-0 margin">
                            <div onClick={() => funhideshow()} className="fas fa-user-cog btn round-xlarge" style={{padding:'6px 16px'}} > {Auth && middleware=='Admin' ?Auth.username.toUpperCase():' admin'}<span className='arrow'></span></div>
                            <div className={`dropdown-content bar-block ${hideshow?' show':''}`}>
                                <Link href={"/dashboard"} ><span className="fas fa-project-diagram bar-item btn margin-top round-xlarge bgc-1"> Projects</span></Link>
                                <Link href={"/dashboard/chatadmin"} ><span className="fab fa-telegram-plane bar-item btn margin-top round-xlarge bgc-1"> Chat Admin</span></Link>
                                <Link href={"/dashboard/users"} ><span className="fas fa-users bar-item btn margin-top round-xlarge bgc-1"> Users</span></Link>
                                <Link href={"/"}><span className="fas fa-sign-out-alt bar-item btn margin-top round-xlarge bgc-1" onClick={() => logout()}> Logout</span></Link>
                            </div>
                        </div>
                        <Link href={"/"} ><span className="fas fa-home bar-item btn margin round-xlarge large"> Home</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Siderbar;