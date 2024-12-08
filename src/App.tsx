import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { QuizList } from './pages/QuizList';
import { QuizTaking } from './pages/QuizTaking';
import { Results } from './pages/Results';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizTaking />} />
          <Route path="/results/:id" element={<Results />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;