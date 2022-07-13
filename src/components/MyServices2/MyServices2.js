import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const MyServices2 = () => {

    const Auth = useSelector(state => state.auth.data)
    const middleware = useSelector(state => state.auth.middleware);

    return (
        <>
        <div className=' padding clip-path-add imguser center textc-2'>
            <h1 className=' xxlarge bold margin' >Need a Developer ?<br/>get special offer !</h1>
            <br/>
            <p className='xlarge margin textc-2 bold'>The easy and sustainable way to gain better rankings and more visitors on your business .</p>
            {Auth && middleware == 'User'?
                <Link href={'/chat'}>
                    <a className='fab fa-telegram-plane button xlarge border borderc-2 hover-bgc-1 round-large textc-2 hover-textc-5 hover-borderc-1 margin text-decoration-none'> Connect with us</a>
                </Link>
            :
                <Link href={'/register'}>
                    <a className='fab fa-telegram-plane button xlarge border borderc-2 hover-bgc-1 round-large textc-2 hover-textc-5 hover-borderc-1 margin text-decoration-none'> Connect with us</a>
                </Link>
            }
        </div>
        <div className=' padding bgc-header textc-2 margin-top'>
            <h1 className=' xxlarge bold margin leftbar' style={{paddingLeft:'8px'}} >Have a project in mind ?<br/>Let’s get to work .</h1>
            <br/>
            <p className='xlarge margin textc-2 bold'>1. Find out how it works and ask any questions you may have .</p>
            <p className='xlarge margin textc-2 bold'>2. We build website that build your business .</p>
            <p className='xlarge margin textc-2 bold'>3. Everything you need to start your  successful online store now .</p>
            <p className='xlarge margin textc-2 bold'>4. Transform Online Presence Into a Lead-Generating Machine .</p>
            <p className='xlarge margin textc-2 bold'>5. We are confident that you will be satisfied with our quality service .</p>
            {Auth && middleware == 'User'?
                <Link href={'/chat'}>
                    <a className='fab fa-telegram-plane button xlarge border borderc-2 hover-bgc-1 round-large textc-2 hover-textc-5 hover-borderc-1 margin text-decoration-none'> Connect Now</a>
                </Link>
            :
                <Link href={'/register'}>
                    <a className='fab fa-telegram-plane button xlarge border borderc-2 hover-bgc-1 round-large textc-2 hover-textc-5 hover-borderc-1 margin text-decoration-none'> Connect Now</a>
                </Link>
            }
        </div>
        <div style={{marginTop:'-60px'}} >
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 C 0,400 0,200 0,200 C 102.03571428571428,229.67857142857142 204.07142857142856,259.35714285714283 339,273 C 473.92857142857144,286.64285714285717 641.7499999999999,284.25 778,253 C 914.2500000000001,221.74999999999997 1018.9285714285716,161.64285714285714 1124,148 C 1229.0714285714284,134.35714285714286 1334.5357142857142,167.17857142857144 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" fill="#0070b1" transform="rotate(-180 720 200)"></path></svg>
        </div>
        </>
    )
}

export default MyServices2