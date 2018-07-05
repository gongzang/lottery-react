import loadableComponent from '../components/loadableComponent/loadableComponent';

const HomePage = loadableComponent(
    () => import('../pages/Home')
  );
export default (
    <Route path="/" component={HomePage} />
);