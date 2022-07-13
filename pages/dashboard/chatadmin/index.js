/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ChatAdmin from '../../../src/components/dashboard/ChatAdmin/ChatAdmin';
import { appName } from '../../../src/Api/FormApi';

const chatadmin = () => {
    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);
    const router = useRouter();

    React.useEffect(() => {
        if(Auth ==null || middleware !='Admin') {router.push('/')}
    },[])

    return (
        <div className='height-con'>
            <Head>
                <title>chatadmin - {appName}</title>
            </Head>
            {Auth && middleware=='Admin' ?
                <ChatAdmin/>
            :null
            }
        </div>
    )
}

export default chatadmin