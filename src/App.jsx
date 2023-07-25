import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/form'
import Display from './components/Display'
import Nav from './components/Nav'

function App() {

  return (
    <>
      {/* 2. Create a Batch of Routes */}
      <Nav />
      <Routes>
        {/* 3. Create Component Routes (path & element) */}
        {/* 4. Show Something on the Home Page */}
        {/* 5. Create a Nav bar component that sticks around at ALL routes */}
        {/* 6. Create a Form that upon submit navigates to Display */}
        {/* 7. Have Display Grab the Path Variable, and make an axios call with it to get data */}
        {/* 8. Render that data on the screen */}
        
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/display/:name' element={<Display />}/>

      </Routes>
    </>
  )
}

export default App
