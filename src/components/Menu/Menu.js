import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, addMiddleware } from '../../Store/AuthSlice'
import { logoutuserApi } from '../../Api/FormApi'

const Menu = ({services, projects}) => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);
    const dispatch = useDispatch();

    const [active, setactive] = React.useState(null)

    function activefun(id) {
        let li = document.getElementById(`${id}`);
        let list = [];
        for(let i=1; i <= 6;i++) {
            list.push(document.getElementById(`li-${i}`));
        }
        for(let i in list) {
            list[i].classList.remove('active')
        }

        li.classList.add('active');
    }

    function scroll(scroll) {scroll.current.scrollIntoView({ behavior: 'smooth' })}
    function up() {window.scrollTo({top:0, behavior: 'smooth'})}

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
            <ul className={`menu ${active!=null?active + ' display-middle':' display-topmiddle top-menu animate-fading'} transition-menu `} style={{paddingLeft:'0px'}} >
                <div className={`toggle ${active!=null?active:''}`} onClick={() => {active==null ? setactive('active'): setactive(null)} } >
                    <span className=' fas fa-plus ' ></span>
                </div>
                <li id='li-1' style={{"--i":"0"}} onClick={() => {activefun('li-1');up()}} className='active'><a className=' fas fa-home'></a></li>
                <li id='li-2' style={{"--i":"1"}} onClick={() => {activefun('li-2');scroll(services)}}><a  className='fas fa-server'></a></li>
                <li id='li-3' style={{"--i":"2"}} onClick={() => {activefun('li-3');scroll(projects)}}><a  className=' fas fa-project-diagram'></a></li>
                <li id='li-4' style={{"--i":"3"}} onClick={() => activefun('li-4')}>
                {Auth && middleware=='Admin' ?
                    <Link href="/dashboard/chatadmin"><a className=' fab fa-telegram-plane text-decoration-none'></a></Link>
                :
                    <Link href="/projects"><a className=' fas fa-people-carry text-decoration-none'></a></Link>
                }
                </li>
                <li id='li-5' style={{"--i":"4"}} onClick={() => activefun('li-5')}>
                    {Auth ?
                        (middleware=='Admin' ? <Link href="/dashboard"><a className=' fas fa-cogs text-decoration-none'></a></Link> : middleware=='User' ? <Link href="/chat"><a className=' fab fa-telegram-plane text-decoration-none'></a></Link>:null)
                    :
                        <Link href="/login"><a className='fas fa-sign-in-alt text-decoration-none'></a></Link>
                    }
                </li>
                <li id='li-6' style={{"--i":"5"}} onClick={() => activefun('li-6')}>
                    {Auth ?
                        (middleware=='User' || middleware=='Admin' ? <Link href="/"><a className='fas fa-sign-out-alt text-decoration-none'  onClick={() => logout()}></a></Link>:null)
                    :
                        <Link href="/register"><a className='fas fa-user-plus text-decoration-none'></a></Link>
                    }
                </li>

                <div className='indicator' ></div>
            </ul>
        </>
    )
}

export default Menu
