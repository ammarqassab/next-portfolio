import React from 'react'
import Head from 'next/head'
import ProjectsGallery from '../../src/components/ProjectsGallery/ProjectsGallery'
import { appName } from '../../src/Api/FormApi'

const index = () => {
    return (
        <div className=' height-con'>
            <Head>
                <meta name="keywords" content={`Projects Gallery for ${appName} , Projects Gallery for App, Projects Gallery for Programming`}></meta>
                <meta name="description" content={`Projects Gallery for ${appName} : We are a company interested in programming and developing website and mobile applications`} />
                <title>Projects Gallery for {appName}</title>
            </Head>
            <ProjectsGallery/>
        </div>
    )
}

export default index