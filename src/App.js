import './App.css'
import Notification from './components/atoms/Notification'
import {Colors} from './utils/constants'

function App({children}) {
  return (
    <div className="App" style={{background: Colors.LIGHT}}>
      {children}
      <Notification />
    </div>
  )
}

export default App
