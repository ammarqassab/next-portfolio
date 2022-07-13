/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Head from 'next/head'
import Siderbar from '../../src/components/dashboard/Siderbar/Siderbar';
import Projects from '../../src/components/dashboard/Projects/Projects';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { appName } from '../../src/Api/FormApi';

const dashboard = () => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);
    const router = useRouter();

    React.useEffect(() => {
        if(Auth ==null || middleware !='Admin') {router.push('/')}
    },[])

    return (
        <div className='height-con' >
            <Head>
                <title>dashboard - {appName}</title>
            </Head>
            {Auth && middleware=='Admin' ?
                <div>
                    <Siderbar />
                    <Projects/>
                </div>
            :null
            }
        </div>
    );
}

export default dashboard