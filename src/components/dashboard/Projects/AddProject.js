import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProjectApi, editProjectApi } from '../../../Api/ProjectApi';
import { updataProject, editProject } from '../../../Store/ProjectSlice';

const AddProject = (props) => {

    const handleToggle = props.handleToggle;
    const editindex = props.index;
    const editid = props.id;

    const auth = useSelector( (state) => state.auth.data);
    const Projects = useSelector(state => state.project.data)
    const dispatch = useDispatch();

    const [name, setname] = React.useState('');
    const [type, settype] = React.useState('');
    const [number, setnumber] = React.useState(0);
    const [link, setlink] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [images, setimages] = React.useState(null);

    React.useEffect(() => {
        if(editindex > 0) {
            setname(Projects[editindex - 1].name);
            settype(Projects[editindex - 1].type);
            setnumber(Projects[editindex - 1].number);
            setlink(Projects[editindex - 1].link);
            setdescription(Projects[editindex - 1].description);
        } else {
            setname('');
            settype('');
            setnumber(0);
            setlink('');
            setdescription('');
            setimages(null);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editindex]);

    const handlefile = (e) => {
        setimages(e.target.files)
    }

    const add = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("name", name);
        formData.append("type", type);
        formData.append("number", number);
        formData.append("link", link);
        formData.append("description", description);
        if(images !=null) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i])
            }
        }

        addProjectApi(auth.token, formData)
        .then( (responsee) => {
            dispatch(updataProject(responsee.data.data));
            alert("تم إضافة المشروع");
        })
        .catch( () => alert("حدث خطأ في إضافة المشروع"));
    };

    const edit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("name", name);
        formData.append("type", type);
        formData.append("number", number);
        formData.append("link", link);
        formData.append("description", description);
        if(images !=null) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i])
            }
        }

        editProjectApi(auth.token, editid, formData)
        .then((responsee) =>{
            dispatch(editProject([editindex, responsee.data.data]));
            alert("تم تعديل المشروع");
        })
        .catch( () => alert("حدث خطأ في تعديل المشروع"));
    };

    return (
        <div className='padding app-box-shadow textc-5 animate-top' style={{margin:'30px 16px'}} >
            <div className='display-container margin-top margin-bottom'>
                <div className=' display-right btn round-large margin-right margin-top xlarge fas fa-times' onClick={handleToggle}></div>
            </div>

            <form>
                <div className="center" >
                    <div className="bar display-container"  style={{margin:'25px'}}>
                        <div className="bar-item xlarge textc-5 bottombar borderc-5">{editid ? "EDIT Project" : "ADD Project"}</div>
                    </div>
                </div>
                <div className="row-padding">
                    <div className="col s100 padding" >
                        <input type="text" className="input transparent round textc-2" placeholder="Enter the project name" value={name} onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div className="col m50 padding" >
                        <input type="text" className="input transparent round textc-2" placeholder="Enter the project type" value={type} onChange={(e) => settype(e.target.value)}/>
                    </div>
                    <div className="col m50 padding" >
                        <input type="number" className="input transparent round textc-2" placeholder="Enter the project number" value={number} onChange={(e) => setnumber(e.target.value)}/>
                    </div>
                    <div className="col s100 padding" >
                        <input type="text" className="input transparent round textc-2" placeholder="Enter the project link" value={link} onChange={(e) => setlink(e.target.value)}/>
                    </div>
                    <div className="col s100 padding" >
                        <textarea className="input transparent round textc-2" placeholder="Write Short Description ..." value={description} onChange={(e) => setdescription(e.target.value)} style={{minHeight:'200px',resize:'vertical'}} ></textarea>
                    </div>
                    <div className="col s100 padding" >
                        <input type="file" multiple accept="image/*" className="input transparent round textc-2" onChange={(e) => handlefile(e)}/>
                    </div>
                    <div className="col s100 padding" >
                        <button type="submit" className={`btn round-large margin-right margin-top fas ${editid ? ' fa-edit': ' fa-plus'}`} onClick={(e) => {editid ? edit(e) : add(e)}}> {editid ? "Edit" : "Add"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AddProject;