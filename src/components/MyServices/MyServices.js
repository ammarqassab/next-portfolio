import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const CartMyServices = ({name, icone, des}) => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);

    return (
        <div className=' col l50 padding ' >
            <div className='row app-box-shadow hover-app-box-shadow' style={{minHeight:'280px'}} >
                <h1 className={` col s100 margin textc-4 xlarge bold ${icone}`} style={{minHeight:'40px'}} > {name} :</h1>
                <p className=' col s100 margin textc-2 large' style={{minHeight:'130px'}}>{des}</p>
                <div className=' col s100' style={{minHeight:'76px'}} >
                    <div className=' center' >
                        {Auth && middleware == 'User'?
                            <Link href={'/chat'} className=' text-decoration-none' >
                                <a className='btn fab fa-telegram-plane large round'> Connect with us</a>
                            </Link>
                        :
                            <Link href={'/register'} className=' text-decoration-none' >
                                <a className='btn fab fa-telegram-plane large round'> Connect with us</a>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const MyServices = ({services}) => {
    return (
        <div className=' margin padding' ref={services}>
            <div className="center margin-bottom" >
                <div className="bar margin-top display-container" >
                    <h1 className="bar-item xlarge textc-4 bottombar borderc-4 bold">Our services</h1>
                </div>
            </div>
            <div className='app-box-shadow text-overflow2' style={{padding:'18px'}} >
                <div className=' row'>
                    <CartMyServices name={'Web Development'} icone={' fas fa-window-restore'}
                    des={'Website development using the latest front-end technologies (HTML, CSS, JQuery, Bootstrap, JavaScript, Sass, VueJs, React.Js, Next.js,..) and in the back-end we use (php, laravel) For applications that need API or Web requests...'}
                    />
                    <CartMyServices name={'Mobile Application Development'} icone={' fab fa-android'}
                    des={'Mobile application development ( Android , IOS) using technology (Flutter, Dart) Many applications have been developed, whether commercial applications (purchase and sale) , service applications ...'}
                    />
                    <CartMyServices name={'Digital Marketing Services'} icone={' fas fa-marker'}
                    des={'A well-developed marketing strategy is all you need to put your best foot forward when foraying into the competitive market ...'}
                    />
                    <CartMyServices name={'Cloud Services'} icone={' fas fa-server'}
                    des={'Variety of domestic and international cloud services that can address all aspects of your business demands ...'}
                    />
                </div>
            </div>
        </div>
    )
}

export default MyServices
