/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Chat from '../src/components/Chat/Chat';
import { appName } from '../src/Api/FormApi';

const chat = () => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);
    const router = useRouter();

    React.useEffect(() => {
        if(Auth ==null || middleware !='User') {router.push('/')}
    },[])

    return (
        <div className='height-con2' style={{marginBottom:'100px'}}  >
            <Head>
                <title>chat - {appName}</title>
            </Head>
            {Auth && middleware=='User' ?
                <Chat userId={Auth.id} />
            :null
            }
        </div>
    )
}

export default chat