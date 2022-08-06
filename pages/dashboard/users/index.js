import React from 'react';
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { appName, deleteUserApi } from '../../../src/Api/FormApi';
import Siderbar from '../../../src/components/dashboard/Siderbar/Siderbar';
import { deleteusers } from '../../../src/Store/UsersSlice';
import Custom404 from '../../404';

const Users = () => {
    
    const auth = useSelector(state => state.auth.data);
    const users = useSelector( (state) => state.users.data);
    const dispatch = useDispatch();
    const middleware = useSelector(state => state.auth.middleware);

    const [title, settitle] = React.useState('');

    let searchusers = users || [];

    if(title != '') {
        searchusers = [] ;
        for(let i in users) {
            if(users[i].username.toLowerCase().includes(title.toLowerCase()) == true) {
                searchusers.push(users[i]);
            }
        }
    }

    const deleteuser= (id, index) => {

        deleteUserApi(auth.token, id)
        .then(() => {
            dispatch(deleteusers(index));
        })
        .catch(() => console.log("حدث خطأ في حذف المستخدم"));
        
    };

    return (
        <div className='height-con animate-top'>
            <Head>
                <title>Users - {appName}</title>
                <meta property="og:title" content={`Users - ${appName}`} />
            </Head>

            {auth && middleware=='Admin' ?
            <>
                <Siderbar />

                <div className="transparent margin padding textc-2">
                    <div className='display-container padding margin-bottom'>
                        <div className=' display-right'>
                            <input type="text" className="input transparent round width-30vw margin-right textc-2" placeholder="Search Users Name" onChange={(e) => settitle(e.target.value)} />
                        </div>
                        <br/>
                    </div>

                    <div className='responsive margin-top user-select'>
                        <table className="table-all">
                        <thead>
                            <tr>
                                <th>Id= {users ? users.length : 0}</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchusers.length > 0 ? searchusers.map((iteme, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{iteme.username}</td>
                                <td>{iteme.email}</td>
                                <td>{iteme.phone}</td>
                                <td><span className="badge"><span className="fas fa-trash-alt textc-1" onClick={() => deleteuser(iteme.id, index)}></span></span></td>
                            </tr>
                            )
                            : <tr><td>no Users</td></tr>
                            }
                        </tbody>
                        </table>
                    </div>

                </div>
            </>
            :<Custom404 />
            }

        </div>
    );
}
export default Users