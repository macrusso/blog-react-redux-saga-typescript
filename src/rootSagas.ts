import { postSagas } from './Post';

export default function* rootSaga() {
  yield postSagas.watchFetchData()
}