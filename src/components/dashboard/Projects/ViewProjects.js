import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image';
import { deleteProjectApi } from '../../../Api/ProjectApi';
import { deleteProject } from '../../../Store/ProjectSlice';

const ViewProjects = ({handleeditToggle}) => {

    const auth = useSelector( (state) => state.auth.data);
    const Projects = useSelector(state => state.project.data);
    const dispatch = useDispatch();

    const deleteproject = (id, index) => {
        deleteProjectApi(auth.token, id)
        .then(() => {
            dispatch(deleteProject(index));
        })
        .catch(() => console.log("حدث خطأ في حذف المشروع"));
    };

    const up = () => {window.scrollTo({top:0, behavior: 'smooth'})}

    return (
        <div className='animate-top padding'>
            <div className='app-box-shadow padding'>
                <div className='row' >
                    {Projects != null && Projects.length > 0 ? Projects.map((iteme, index) => (
                        <div className='col l50' key={index}>
                            <div className='row app-box-shadow hover-app-box-shadow pointer margin'>
                                <div className='col m33 l50 display-container' style={{padding:"8px",minHeight:'200px'}} >
                                    <div className=' display-middle width-100' >
                                        {iteme.images.length > 0 ? <Image src={`/image/${iteme.images[0].path}`} width={`100%`} height={`50%`} layout="responsive" alt={iteme.name}  empty="true"/>:null}
                                    </div>
                                </div>
                                <div className='col m66 l50 textc-2' style={{padding:"8px",minHeight:'200px'}}>
                                    <div className='row' >
                                        <div className='col s100 textc-4 large text-overflow2' style={{height:'74px'}}>{iteme.name} :</div>
                                        <div className='col s100 textc-4 large' >Type : <span className=' bgc-4 round-small textc-2 large' style={{padding:'1px 4px'}} >{iteme.type}</span> / Number : <span className=' bgc-4 round-small textc-2 large' style={{padding:'1px 4px'}} >{iteme.number}</span></div>
                                        <div className='col s100 medium text-overflow' >{iteme.description}</div>
                                        <div className='col s100 margin-top' >
                                            <span className='fas fa-edit btn round large text-decoration-none'  style={{padding:"4px 8px"}}  onClick={() => {handleeditToggle(iteme.id, index);up()}}> Edit</span>
                                            <span className='fas fa-trash-alt btn round large text-decoration-none margin-left'  style={{padding:"4px 8px"}}  onClick={() => deleteproject(iteme.id, index)}> Delete</span>
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

export default ViewProjects