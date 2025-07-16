import { Route, Routes } from 'react-router-dom';
import './scss/main.scss';
import About from './structure/pages/About';
import Layout from './structure/Layout';
import Resume from './structure/pages/Resume';
import Projects from './structure/pages/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />}></Route>
          <Route path="resume" element={<Resume />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
