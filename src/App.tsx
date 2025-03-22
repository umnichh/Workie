import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Auth/Login/Login';
import { Register } from './pages/Auth/Register/Register';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Monitoring } from 'react-scan/monitoring';
import { UIContextProvider } from './utils/UIContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './styles/global.scss';

const queryClient = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <UIContextProvider>
          <Monitoring
            apiKey="s3YeLovyQ19EVp7buLw1ekSEVzGrRYRT"
            url="https://monitoring.react-scan.com/api/v1/ingest"
          />
          <Header />
          <Sidebar />
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/projects/:projectId" element={<Home />} />
            </Route>
          </Routes>
        </UIContextProvider >
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
