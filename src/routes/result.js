import loadableComponent from '../components/loadableComponent/loadableComponent';

const ResultPage = loadableComponent(
    () => import('../pages/Result')
  );
export default (
    <Route path="/results/:lottery_id/:lottery_no" exact="false" component={ResultPage} />
);