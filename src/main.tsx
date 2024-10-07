import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { setupStore } from './store/store'
import Render from './Render'

createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore}>
    <Render />
  </Provider>
)
