import React from 'react'
import { useSelector } from 'react-redux';
import Chat from '../../Chat/Chat';
import ListChatAdmin from './ListChatAdmin'

const ChatAdmin = () => {

    const chatAdmin = useSelector( (state) => state.chatAdmin.data);

    const [userId, steuserId] = React.useState(null);

    function handleid(id) {
        steuserId(id);
    };

    return (
        <div className=' animate-top'>
            {userId != null ? <Chat userId={userId} /> :null}

            <div className='transparent display-container padding bgc-1 textc-2 app-box-shadow' style={{margin:'100px 16px 16px'}} >
                <h1>Chat :<span className=' textc-4'> {chatAdmin.length}</span></h1>
                <div className=' display-right btn round-large margin-right textc-2 large fas fa-plus' onClick={() => steuserId(null)} style={{paddingBottom:'12px'}} > Close Chat</div>
            </div>
            
            <ListChatAdmin handleid={handleid}/>
        </div>
    )
}
export default ChatAdmin