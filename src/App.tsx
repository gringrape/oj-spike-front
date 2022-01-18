import { Route, Routes } from 'react-router-dom';

import ProblemPage from './ProblemPage';

export default function App() {
  return (
    <Routes>
      <Route path="/problem" element={<ProblemPage />} />
    </Routes>
  );
}
