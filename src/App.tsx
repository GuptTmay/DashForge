import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Layout,
  Dashboard,
  Marketplace,
  Tables,
  Kanban,
  Profile,
  SignIn,
  NoPage,
} from './pages/index';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="marketplace" element={<Marketplace />} />
              <Route path="tables" element={<Tables />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="signin" element={<SignIn />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
