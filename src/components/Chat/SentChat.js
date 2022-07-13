import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sentMessageApi } from '../../Api/ChatUserApi';
import { updataChatUser } from '../../Store/ChatUserSlice';

const SentChat = ({userId, scroll}) => {

    const auth = useSelector(state => state.auth.data);
    const dispatch = useDispatch();

    const [text, settext] = React.useState('');
    const [image, setimage] = React.useState(null);

    const handlefile = (e) => {
        e.preventDefault();
        setimage(e.target.files[0]);
    }

    const submit = (e) => {
        e.preventDefault();

        let userid2 = userId;

        if(auth.role =="user") {userid2 = 1}

        let formData = new FormData();

        if(image != null) {
            formData.append("user_id", userid2);
            formData.append("message", image);
            formData.append("body", this);
        }

        if(text != '') {
            formData.append("user_id", userid2);
            formData.append("message", text);
        }

        sentMessageApi(auth.token, formData)
        .then( (responsee) => {
            dispatch(updataChatUser(responsee.data.data));
            settext('');
            setimage(null);
            scroll.current.scrollIntoView();
            window.scrollTo({
                top:0,
            });
        })
        .catch( () => alert("حدث خطأ في إرسال الرسالة"));

    };

    return (
        <>
            <form className='display-bottommiddle width-100 ' style={{height:'15%'}}>
                <div className=' row '>
                    <div className='col s100' >
                        <button type="submit" className="btn round-large margin display-inline fab fa-telegram-plane" style={{height:'44px'}} onClick={(e) => submit(e)}></button>
                        <input type="file" accept="image/*" className="btn round display-inline" style={{width:'50px',height:'44px',padding:'4px'}} onChange={(e) => handlefile(e)} />
                        <input type="text" className="input width-50 transparent round textc-2 margin display-inline" placeholder="Message ..." value={text} onChange={(e) => settext(e.target.value)} />
                    </div>
                </div>
            </form>
        </>
    )
}
export default SentChat