import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ProjectsGallery = ({projects}) => {

    const Auth = useSelector(state => state.auth.data)
    const Projects = useSelector(state => state.project.data)
    const router = useRouter()

    const prolink = (id) => {router.push(`/projects/${id}`)}

    return (
        <div className=' margin padding' ref={projects}>
            <div className="center margin-bottom" >
                <div className="bar margin-top display-container" >
                    <h1 className="bar-item xlarge textc-4 bottombar borderc-4 bold">Our Projects</h1>
                </div>
            </div>
            <div className='app-box-shadow padding'>
                <div className='row' >
                    {Projects && Projects.length >0? Projects.map((iteme, index) => (
                        <div className='col l50' key={index}>
                            <div className='row app-box-shadow hover-app-box-shadow margin'>
                                <div className='col m33 l50 display-container' style={{padding:"8px",minHeight:'200px'}} >
                                    <div className=' display-middle width-100 pointer' onClick={() => prolink(iteme.id)}>
                                        {iteme.images.length > 0 ? <Image src={`/image/${iteme.images[0].path}`} width={`100%`} height={`50%`} layout="responsive" alt={iteme.name}  empty="true"/>:null}
                                    </div>
                                </div>
                                <div className='col m66 l50 textc-2' style={{padding:"8px",minHeight:'200px'}}>
                                    <div className='row' >
                                        <h1 className='col s100 textc-4 large text-overflow2' style={{height:'74px'}} >{iteme.name} :</h1>
                                        <div className='col s100 textc-4 large' >Type : <span className=' bgc-4 round-small textc-2 large' style={{padding:'1px 4px'}} >{iteme.type}</span></div>
                                        <p className='col s100 medium text-overflow' >{iteme.description}</p>
                                        <div className='col s100 margin-top' >
                                        <a href={`${iteme.link}`} target="_blank" rel="noopener noreferrer" className='fas fa-link btn round-large large text-decoration-none' style={{padding:"4px 8px"}}> Link</a>
                                        <a onClick={() => prolink(iteme.id)} className='fas fa-expand-alt btn round large text-decoration-none margin'  style={{padding:"4px 8px"}}> View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsGallery