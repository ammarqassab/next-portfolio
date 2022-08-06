import React from 'react';
import Link from 'next/link'
// import { useRouter } from 'next/router'

const Custom404 = () => {

    // const router = useRouter();

    // React.useEffect(() => {
    //     setTimeout(() => {router.push('/')},5000)
    // },[]);

    return (
        <div className=' height-con display-container' >
            <div className=' display-middle xlarge textc-2 center'>
                <div className='margin-bottom'>404 | Page not found</div>
                <div>
                    <Link href={'/'}>
                        <a className='fas fa-home xlarge text-decoration-none btn round'> Back to home page</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Custom404
