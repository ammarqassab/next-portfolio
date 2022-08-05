import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { appName, appurl } from '../../src/Api/FormApi'

const Projectid = () => {

    const router = useRouter()
    const { pid } = router.query
    const Projects = useSelector(state => state.project.data)
    const [handlemodal, sethandlemodal] = React.useState(false)
    const [srcimg, setsrcimg] = React.useState(null)
    const [imgsize, setimgsize] = React.useState('')
    const [desdom, setdesdom] = React.useState(null)
    let namepro = '';
    let despro = '';

    for(let i in Projects) {
        if(Projects[i].id == pid) {
            namepro = Projects[i].name;
            despro = Projects[i].description;
            break;
        }
    }

    let slideIndex = 1;

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    
    function currentDiv(n) {
        showDivs(slideIndex = n);
    }
    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("demo");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        x[slideIndex-1].style.display = "block";  
        // dots[slideIndex-1].className += " active";
    }

    const funimgsize = (sizeimg) => {setimgsize(sizeimg)}

    const support = () => {// check for DOMParser support
        if (!window.DOMParser) return false;
        let parser = new DOMParser();
        try {
            parser.parseFromString('x', 'text/html');
        } catch(err) {
            return false;
        }
        return true;
    };

    const textToHTML= React.useCallback((str) => {

        // check for DOMParser support
        if (support && desdom) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(str, 'text/html');
            // console.log(doc.body)
            document.getElementById("divDesc").innerHTML = null;
            document.getElementById("divDesc").append(doc.body);
        }

        if (support == false && desdom) {
            // Otherwise, create div and append HTML
            let dom = document.createElement('div');
            dom.innerHTML = str;
            // console.log(dom)
            document.getElementById("divDesc").innerHTML = null;
            document.getElementById("divDesc").append(dom);
        }
    
    },[desdom]);

    React.useEffect(() => {if(despro != '')setdesdom(despro)})

    React.useEffect(() => {textToHTML(desdom)},[desdom])
    
    return (
        <div className=' height-con'>
            <Head>
                <meta name="keywords" content={`${namepro} - ${appName} , ${namepro} - App, ${namepro} - Programming`}></meta>
                <meta name="description" content={`${namepro} - ${appName} : ${despro}`} />
                <title>{namepro} - {appName}</title>
                <meta property="og:description" content={`${namepro} - ${appName} : ${despro}`} />
                <meta property="og:title" content={`${namepro} - ${appName}`} />
            </Head>
            <div className=' margin padding'>
                <div className='app-box-shadow'>
                    <div className='row' >
                        {Projects ? Projects.map((iteme, index) => (
                            (iteme.id == pid ?
                                <div className='col s100' key={index}>
                                    <div className='row '>
                                        <div className='col s100 left-align ' style={{padding:"8px",maxWidth:'800px',margin:'0px auto 10px'}} >
                                            <div className=' width-100' >
                                                {iteme.images.length > 0 ? 
                                                    <>
                                                    {iteme.images.map((itemeimg, indeximg) => (
                                                        <span className='mySlides width-100 pointer display-container' style={indeximg==0 ?null:{display:'none'}} key={indeximg} onClick={() => {setsrcimg(itemeimg.path);sethandlemodal(true)}}>
                                                            <div className='large textc-2 display-bottomleft margin padding-small opacity-min round-large bgc-1 ' style={{zIndex:'10'}}>{indeximg + 1} of {iteme.images.length}</div>
                                                            <Image src={`/image/${itemeimg.path}`} width={`100%`} height={`50%`} layout="responsive" alt={iteme.name} empty="true"/>
                                                        </span>
                                                    ) 
                                                    )}
                                                    </>
                                                :null}
                                            </div>
                                        </div>
                                        <div className='col s100' >
                                            <div className="center">
                                                <div className="">
                                                    <button className="btn stretch margin-top round-large large" onClick={() => plusDivs(-1)} style={{marginBottom:'0px'}}>❮ Prev</button>
                                                    <button className="btn stretch margin-top round-large large" onClick={() => plusDivs(1)} style={{marginBottom:'0px'}}>Next ❯</button>
                                                </div>
                                            </div>
                                            {/* <div className='center' >
                                                {iteme.images.length > 0 ? 
                                                    <>
                                                    {iteme.images.map((itemeimg, indeximg) => (
                                                        <button className={`btn demo margin-right margin-left round-large large ${indeximg == 0 ? ' active':''}`} style={{marginTop:'14px'}} onClick={() => currentDiv(indeximg+1)} key={indeximg}>{indeximg+1}</button>
                                                    ) 
                                                    )}
                                                    </>
                                                :null}
                                            </div> */}
                                        </div>
                                        <div className='col s100 textc-2' style={{padding:"8px"}}>
                                            <div className='row' >
                                                <div className='col s100 textc-4 xlarge margin-bottom padding' >
                                                    <span className=' border-bottom ' style={{paddingBottom:'6px'}}><span className=' textc-2'>{iteme.number} . </span>{iteme.name} :</span>
                                                </div>
                                                <div className='col s100 textc-4 large padding' >Type : <span className=' bgc-4 round-small textc-2 large' style={{padding:'1px 4px'}} >{iteme.type}</span></div>
                                                <div id='divDesc' className='col s100 mdx'></div>
                                                <div className='col s100 margin-top padding' >
                                                    <a href={`${iteme.link}`} target="_blank" rel="noopener noreferrer" className='fas fa-link btn round-large large text-decoration-none margin padding-small' style={{padding:"4px 8px"}}> Link</a>
                                                    <Link href={"/"} ><span className="fas fa-home bar-item btn margin round-large large padding-small"> Home</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :null)
                        ))
                        :null
                        }
                    </div>
                </div>
            </div>
            {handlemodal ?
                <div className="modal">
                    <div className='row flex-nowrap' style={{zIndex:'10000000000',justifyContent:'center'}} >
                        <button className="btn round-large margin fas fa-minus bgc-1" onClick={() => funimgsize('')}></button>
                        <button className="btn round-large margin fas fa-times bgc-1" onClick={() => sethandlemodal(false)}></button>
                        <button className="btn round-large margin fas fa-plus bgc-1" onClick={() => funimgsize(' rotimg')}></button>
                    </div>
                    <div className="modal-content">
                        <div className={`width-100 ${imgsize}`}>
                            <Image src={`/image/${srcimg}`} width="100%" height="50%" layout="responsive" objectFit='contain' alt={srcimg} empty="true"/>
                        </div>
                    </div>
                </div>
            :null
            }
        </div>
    )
}

export default Projectid