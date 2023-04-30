import './App.css'
import Counter from './components/Counter'
import { Provider }  from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
// va a actuar como el provider

const persistor = persistStore(store)

function App() {


  const array = ['matias', 'carlos', 'luqui']

  // find

  const some = array.some(el => el === 'juan')
  console.log(some)

 
  return (

    <div>
        
      
    </div>



   
  // const array = ['matias', 'juan', 'luqui']

  // // find

  // const find = array.find(loquequieras => loquequieras === 'matias')

  // return (

  //   <div>
  //    {
  //    find  ? <h1>hola soy matias</h1>
  //    : <h1>no soy matias</h1>
  //    }
  //   </div>

    // <PersistGate persistor={persistor}>
    //     <Provider store={store}>
    //       <Counter/>
    //     </Provider>
    // </PersistGate>
  
  )
};

export default App
