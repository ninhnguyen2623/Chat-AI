import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './pages/About.tsx';
import store from './redux/store/app.tsx';
import { Provider } from 'react-redux';
import ChatDetail from './pages/ChatDetail.tsx';
import Home from './pages/Home.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ChatDetail />} />
            <Route path="chat/info" element={<ChatDetail />} />
            <Route path="chat/:id" element={<ChatDetail />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
