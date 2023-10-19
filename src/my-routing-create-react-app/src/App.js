import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import Blog from './components/Blog/Blog.js';
import About from './components/About/About.js';
import Contacts from './components/Contacts/Contacts.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faEnvelope);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
