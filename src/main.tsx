import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { setupStore } from './store/store'
import App from './App'




createRoot(document.getElementById('root')!).render(
    <Provider store={setupStore}>
      <App/>
    </Provider>
)
