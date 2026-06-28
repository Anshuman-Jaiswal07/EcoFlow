import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';

// View components imports compiled explicitly
import { LandingPage } from './views/LandingPage';
import { Login } from './views/Login';
import { Register } from './views/Register';
import { Dashboard } from './views/Dashboard';
import { UploadResource } from './views/UploadResource';
import { ResourceMarketplace } from './views/ResourceMarketplace';
import { AIRecommendationCenter } from './views/AIRecommendationCenter';
import { InteractiveMap } from './views/InteractiveMap';
import { Transactions } from './views/Transactions';
import { Analytics } from './views/Analytics';
import { GovernmentDashboard } from './views/GovernmentDashboard';
import { CompanyProfile } from './views/CompanyProfile';
import { NotificationCenter } from './views/NotificationCenter';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadResource />} />
            <Route path="/marketplace" element={<ResourceMarketplace />} />
            <Route path="/ai-center" element={<AIRecommendationCenter />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/government" element={<GovernmentDashboard />} />
            <Route path="/profile" element={<CompanyProfile />} />
            <Route path="/notifications" element={<NotificationCenter />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}