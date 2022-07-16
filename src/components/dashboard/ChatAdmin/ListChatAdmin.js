import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shoWAllConvApi } from '../../../Api/ChatUserApi';
import { addChatAdmin } from '../../../Store/ChatAdminSlice';

const Chats = ({iteme}) => {

    return (
        <div className=' row app-box-shadow hover-app-box-shadow round-large center' >
            <div className=' col s100 padding bold text-overflow textc-4'>
                {iteme.new_messages != 0 ?
                    <span className=' bgc-4 small bold textc-2 round margin-right' style={{padding:'6px',width:'30px'}} > {iteme.new_messages}</span>
                :null
                }
                {iteme.participants[0].username}
            </div>

            {iteme.last_message.type == 'text' ?
            <div className=' col s100 small left-align margin-left margin-right margin-bottom text-overflow textc-2'>{iteme.last_message.body}</div>
            :
            <div className=' col s100 small left-align margin-left margin-right margin-bottom text-overflow textc-2'>image</div>
            }

        </div>
    )
}


const ListChatAdmin = ({handleid}) => {

    const auth = useSelector(state => state.auth.data);
    const chatAdmin = useSelector( (state) => state.chatAdmin.data);
    const dispatch = useDispatch();

    let numref = 0;

    const interconnection = () => {

        if(auth.token && auth.role =="admin" && numref == 0) {
            numref++;
            shoWAllConvApi(auth.token)
            .then((responsee) =>{
                dispatch(addChatAdmin(responsee.data.data));
                numref=0;
            })
            .catch( () => alert("حدث خطأ في الحصول على المحادثات الأدمن"));
        }
    }

    React.useEffect(() => {
        setInterval(() => interconnection(), 90000)
    },[])

    return (
        <div className='margin'>

            <div className="center" >
                <div className="bar margin-top display-container" >
                    <div className="bar-item xlarge textc-4 bottombar borderc-4">List Chat</div>
                </div>
            </div>

            <div className=' row-padding' >
            {chatAdmin !=null && chatAdmin.length > 0 ?
                chatAdmin.map( (iteme, index) =>
                <div className='col m50 l25 padding pointer' key={index} onClick={() => handleid(iteme.user_id)}>
                    <Chats iteme={iteme}/>
                </div>
                )
            :null
            }
            </div>

        </div>
    )
}
export default ListChatAdmin