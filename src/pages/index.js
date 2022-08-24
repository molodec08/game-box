import {Home} from '../components/Home';
import {Layout} from '../components/Layout';
import {initStore} from '../store/store';
import {getGames} from '../services/GameboxService';

const Index = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const store = initStore()
  const state = store.getState()
  // const {gamesLimit} = state.loadReducer

  await store.dispatch(getGames.initiate(10))

  return {props: { initialReduxState: store.getState()}
  }}

export default Index;