import React from 'react'
import { useSelector } from 'react-redux';
import SentChat from './SentChat';
import Image from 'next/image';

const BodyChat = ({userId, scroll}) => {

    const auth = useSelector(state => state.auth.data);
    const chatUser = useSelector(state => state.chatUser.data);
    const [handlemodal, sethandlemodal] = React.useState(false)
    const [srcimg, setsrcimg] = React.useState(null)

    function time(text) {
        const time = new Date(text);
        return ` ${time.getHours()}:${time.getMinutes()}`;
    }

    return (
        <div className=' height-con2 padding user-select'>
            <div style={{overflowY:'auto',height:'85%'}}>
                <div className=' row flex-direction-reverse'>
                    <div className='col s100' ref={scroll}></div>
                    {chatUser ?
                    chatUser.map( (iteme, index) =>

                        iteme.type=='text' ?
                        <div className={`col s100 padding ${iteme.user_id==auth.id?' rtl':''}`} key={index}>
                            <div className={` display-container padding width-fit-content m-w large textc-1 bold ${iteme.user_id==auth.id?' bgc-4 round-right':' bgc-3 round-left textc-2'}`}>
                                {iteme.user_id == auth.id && iteme.recipients[0].read_at != null ?
                                    <>
                                        <span className=' fas fa-check textc-2 small ' ></span>
                                        <span className=' fas fa-check textc-2 small margin-left' ></span>
                                    </>
                                    : iteme.user_id == auth.id && iteme.recipients[0].read_at == null ?
                                        <span className=' fas fa-check textc-1 small margin-left' ></span>
                                    : null
                                }
                                <span className='text-overflow2 large'>{iteme.body}</span>
                                <span className=' medium'> {time(iteme.created_at)} </span>
                                <span className={`${iteme.user_id==auth.id?' display-topright s-right':' display-topleft s-left'}`}></span>
                            </div>
                        </div>
                        : iteme.type == 'attachment' ?
                        <div className={`col s100  ${iteme.user_id==auth.id?' rtl':''}`} key={index}>
                            <div className={` display-container margin width-fit-content m-w border ${iteme.user_id==auth.id?' borderc-4':' borderc-3'}`} style={{width:'600px',height:'auto'}}  onClick={() => {setsrcimg(iteme.body.file_path);sethandlemodal(true)}}>
                                {iteme.body.file_path ? <Image src={`/imageChat/${iteme.body.file_path}`} width={`600px`} height={`400px`} layout="responsive" alt={iteme.body.file_name}  empty="true"/>:null}
                            </div>
                        </div>
                        :null

                    )
                    : null
                    }
                </div>
            </div>
            {handlemodal ?
                <div className="modal" onClick={() => sethandlemodal(false)}>
                    <div className="modal-content">
                        <span className='width-100'>
                            <Image src={`/imageChat/${srcimg}`} width={`100%`} height={`50%`} layout="responsive" alt={srcimg} empty="true"/>
                        </span>
                    </div>
                </div>
            :null
            }
            <SentChat userId={userId} scroll={scroll}/>
        </div>
    )
}
export default BodyChat