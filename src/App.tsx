import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Project } from './components/Project/Project';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Monitoring } from 'react-scan/monitoring';
import { UIContextProvider } from './utils/UIContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './styles/global.scss';
import { Home } from './components/Home/Home';
import { Tasks } from './components/Tasks/Tasks';
import { Changes } from './components/Changes/Changes';
import { Goals } from './components/Goals/Goals';
import { Ideas } from './components/Ideas/Ideas';
import { Roadmaps } from './components/Roadmaps/Roadmaps';

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
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/changes" element={<Changes />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/roadmaps" element={<Roadmaps />} />
              <Route path="/projects/:projectId" element={<Project />} />
            </Route>
          </Routes>
        </UIContextProvider >
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
