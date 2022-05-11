import Top from './pages/top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Setting from './pages/setting';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
