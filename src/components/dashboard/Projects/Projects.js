import React from 'react'
import { useSelector } from 'react-redux';
import AddProject from './AddProject';
import ViewProjects from './ViewProjects';

const Projects = () => {

    const Projects = useSelector(state => state.project.data)

    const [taggle, settaggle] = React.useState(false);
    const [edittaggle, setedittaggle] = React.useState(false);
    const [editindex, seteeditindex] = React.useState(null);
    const [editid, seteeditid] = React.useState(null);

    const handleToggle = () => {
        setedittaggle(false);
        taggle ? settaggle(false) : settaggle(true) ;
    };

    const handleeditToggle = (id, index) => {
        settaggle(false);
        edittaggle ? setedittaggle(false) : setedittaggle(true) ;
        seteeditindex(index) ;
        seteeditid(id);
    };

    // let Projectslen = 0;
    // if(Projects!=null && Projects.length>0) {for (let i in Projects) { Projectslen ++ };}

    return (
        <>
            <div className=' animate-top padding'>
                <div className='row app-box-shadow margin textc-5 padding'>
                    <h1 className='col m75 xxlarge' style={{minHeight:'54px'}} >Number of projects :<span className=' textc-4'> {Projects !=null && Projects.length > 0 ? Projects.length :'0'}</span></h1>
                    <div className='col m25 display-container' style={{height:'74px'}}>
                        <div className='btn round-large display-middle fas fa-plus xlarge' onClick={() => handleToggle()}> Add Project</div>
                    </div>
                </div>
                {taggle ? <AddProject id={null} index={null} handleToggle={handleToggle} /> : edittaggle ? <AddProject id={editid} index={editindex + 1} handleToggle={handleeditToggle} /> : null}
                <ViewProjects handleeditToggle={handleeditToggle}/>
            </div>
        </>
    )
}

export default Projects