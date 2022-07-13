import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link'

const Notifications = () => {

    const auth = useSelector(state => state.auth.data);
    const chatUser = useSelector(state => state.chatUser.data);

    let reatlen = 0;

    if(auth.token && auth.role =="user" && chatUser !=null) {
        for(let i in chatUser) {
            if(chatUser[i].recipients[0].read_at == null && chatUser[i].recipients[0].pivot.user_id != 1) {reatlen++}
        }
    }

    return (
        <>
            {auth.token !=null && auth.role =="user" && chatUser !=null?
                <div  className='upscroll2 app-box-shadow hover-app-box-shadow bgc-1'>
                    {reatlen != 0 ?
                        <span className=' display-topmiddle' style={{width:'30px',height:'30px',zIndex:"9999",top:'-30%',left:'80%'}}>
                            <span className=' badge bgc-4 small bold' style={{width:'30px',height:'30px',paddingTop:'4px'}}><Link href='/chat'><span className=' text-decoration-none'>{reatlen}</span></Link></span>
                        </span>
                    :null
                    }
                    <Link href='/chat'><span className=' text-decoration-none'>Chat</span></Link>
                </div>
            :null
            }
        </>

    )
}
export default Notifications