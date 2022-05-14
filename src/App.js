import Top from './pages/top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Setting from './pages/setting';
import {useReducer } from 'react';
import SettingContext from './contexts/setting';

function App() {
  const initialState = {
    backgroundColor: 'white'
  }
  function reducer(state, color) {
    return { backgroundColor: color };
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SettingContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </SettingContext.Provider>
  );
}

export default App;
