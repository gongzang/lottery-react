import Loading from './loading';
import Loadable from 'react-loadable';

const loadableComponent = component => {
    Loadable({
        loader: component,
        loading: Loading
    });
};

export default loadableComponent;