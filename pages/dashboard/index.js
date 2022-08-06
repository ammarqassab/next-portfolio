/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Head from 'next/head'
import Siderbar from '../../src/components/dashboard/Siderbar/Siderbar';
import Projects from '../../src/components/dashboard/Projects/Projects';
import { useSelector } from 'react-redux';
import { appName } from '../../src/Api/FormApi';
import Custom404 from '../404';

const dashboard = () => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);

    return (
        <div className='height-con' >
            <Head>
                <title>dashboard - {appName}</title>
                <meta property="og:title" content={`dashboard - ${appName}`} />
            </Head>
            {Auth && middleware=='Admin' ?
                <div>
                    <Siderbar />
                    <Projects/>
                </div>
            :<Custom404 />
            }
        </div>
    );
}

export default dashboard