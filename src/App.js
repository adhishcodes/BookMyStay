import React from 'react';
import MyComponent from './Components2/Main';
import Album from './Components2/destinations';
import SignIn from './Components2/signin';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './Components2/signnup';
import Blog from './Components2/Blog';
import Hovex from './Components2/dup';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MyComponent/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;