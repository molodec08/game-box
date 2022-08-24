import React from "react";
import {Game} from "../../components/Game";
import {getGameById} from "../../services/GameboxService";
import {initStore} from "../../store/store";
import {Layout} from '../../components/Layout';

const GamePage = () => {
  return (
    <Layout>
      <Game />
    </Layout>
  )
}

export const getServerSideProps = async (params) => {
  const store = initStore()

  await store.dispatch(getGameById.initiate(params.query.id))
  // await store.dispatch(getGameScreensById.initiate(params.query.id))

  return {props: { initialReduxState: store.getState()}
  }}

export default GamePage;