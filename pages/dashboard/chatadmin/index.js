/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import ChatAdmin from '../../../src/components/dashboard/ChatAdmin/ChatAdmin';
import { appName } from '../../../src/Api/FormApi';
import Custom404 from '../../404';

const chatadmin = () => {
    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);

    return (
        <div className='height-con'>
            <Head>
                <title>chatadmin - {appName}</title>
                <meta property="og:title" content={`chatadmin - ${appName}`} />
            </Head>
            {Auth && middleware=='Admin' ?
                <ChatAdmin/>
            :<Custom404 />
            }
        </div>
    )
}

export default chatadmin