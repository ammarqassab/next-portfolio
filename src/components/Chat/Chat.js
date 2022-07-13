import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allMessageApi, markAsReadApi } from '../../Api/ChatUserApi';
import { addChatUser } from '../../Store/ChatUserSlice';
import BodyChat from './BodyChat'

const Chat = ({userId}) => {

    const scroll = React.useRef();

    const auth = useSelector(state => state.auth.data);
    const dispatch = useDispatch();

    let numref = 0;

    const interconnection = () => {

        if(auth.token && auth.role =="admin" && numref == 0) {
            numref++;
            allMessageApi(auth.token, userId)
            .then((responsee) =>{
                dispatch(addChatUser(responsee.data.messages));
                scroll.current.scrollIntoView();
                window.scrollTo({
                    top:0,
                });

                markAsReadApi(auth.token, userId)
                .then((responsee) =>{numref=0})
                .catch( () => {});

            })
            .catch( () => {});
        }

        if(auth.token && auth.role =="user" && numref == 0) {
            numref++;
            allMessageApi(auth.token, auth.id )
            .then((responsee) =>{
                dispatch(addChatUser(responsee.data.messages));
                scroll.current.scrollIntoView();
                window.scrollTo({
                    top:0,
                });

                markAsReadApi(auth.token, auth.id)
                .then((responsee) =>{numref=0})
                .catch( () => {});

            })
            .catch( () => {});
        }

    }

    React.useEffect( () => {

        if( (auth.token && auth.role =="user") ||  (auth.token && auth.role =="admin")) {

            markAsReadApi(auth.token, userId)
            .then((responsee) =>{})
            .catch( () => alert("حدث خطأ في إرسال طلب قراءة المحادثة"));

            scroll.current.scrollIntoView();
            window.scrollTo({
                top:0,
            });
            
        }

        if(auth.token && auth.role =="admin") {

            allMessageApi(auth.token, userId)
            .then((responsee) =>{
            dispatch(addChatUser(responsee.data.messages));
            scroll.current.scrollIntoView();
            window.scrollTo({
                top:0,
            });

            })
            .catch( () => alert("حدث خطأ في الحصول على المحادثة"));
        }

        setInterval(() => interconnection(), 60000)

    },[]);


    return (
        <>
            { (auth.token && auth.role =="user") ||  (auth.token && auth.role =="admin") ?
                <div className=' bgc-1 height-con2 textc-2 animate-top'>
                    <div className=' row'>
                        <div className='col s100'>
                            <BodyChat userId={userId} scroll={scroll}/>
                        </div>
                    </div>
                </div>
            : null
            }
        </>
    )
}
export default Chat