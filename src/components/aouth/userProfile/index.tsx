import { Link } from 'react-router-dom';
import {useTypedSelector} from '../../../hooks/useTypeSelector';
//import InputGroup from '../../common/InputGroup';


const UserProfile=()=>{
    const { user} = useTypedSelector(state=>state.auth);
    return (
        <div className="row">
 <div className="offset-md-3 col-md-6">
        <h1>User profile</h1>
        <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control" value={user.email}/>
        </div>

        <div className="mb-3">
        <label className="form-label">Image</label>
        <input className="form-control" value={user.image}/>
        </div>
        <div className="text-center">
              <button  
                type="submit"
                className="btn btn-info px-5"
                >
                <Link to="/">Home page</Link>
              </button>
      </div>
      </div>
</div>
    );
};

export default UserProfile;