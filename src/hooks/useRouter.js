import { useContext } from 'react'
import { __RouterContext as RouterContext } from 'react-router'

// FIXME:  use official API when https://github.com/ReactTraining/react-router/pull/6453 merged

const useRouter = () => {
  return useContext(RouterContext);
}
export default useRouter