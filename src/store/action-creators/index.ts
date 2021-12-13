import * as AuthActionCreators from '../../components/aouth/Login/actions';
import * as ProductActionCreators from '../../components/products/actions';
const actions = {
    ...AuthActionCreators,
    ...ProductActionCreators
}

export default actions;