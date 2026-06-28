import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Anshuman Jaiswal',
    company: 'Nexus Infra Corp',
    role: 'Enterprise Partner',
    type: 'Industrial/Builder',
    location: 'Kurukshetra, HR',
    verified: true
  });
  
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Global Simulated Data Stores
  const [resources, setResources] = useState([
    { 
      id: 'R-101', 
      title: 'Excess Structural Drywall', 
      category: 'Solids', 
      quantity: '4.5 Tons', 
      location: 'Sector 7, Construction Zone',
      coordinates: { lat: 29.9695, lng: 76.8783 } // Centered at map anchor
    },
    { 
      id: 'R-102', 
      title: 'High-Volume AC Condensate Water', 
      category: 'Liquids', 
      quantity: '1,200 Lt', 
      location: 'Sector 3, Processing Plant',
      coordinates: { lat: 29.9750, lng: 76.8910 } // Slightly northeast
    },
    { 
      id: 'R-103', 
      title: 'Low-Grade Industrial Exhaust Heat', 
      category: 'Energy', 
      quantity: '45 kWh', 
      location: 'Sector 10, Power Station',
      coordinates: { lat: 29.9580, lng: 76.8650 } // Slightly southwest
    },
    { 
      id: 'R-104', 
      title: 'Organic Kitchen Residue & Coffee Grounds', 
      category: 'Organics', 
      quantity: '850 kg', 
      location: 'Sector 5, Commercial Hub',
      coordinates: { lat: 29.9620, lng: 76.8840 } // Near city center
    }
  ]);
  
  const [recommendations, setRecommendations] = useState([
    { id: 'REC-01', type: 'Instant Match', primaryText: 'Route 1,200L AC Condensate from Vanguard Realty to your Sector 3 Concrete Batching Plant.', impact: 'Diverts 1.2kL potable water loss, saves ₹600/day on raw supply logs.', status: 'Active' },
    { id: 'REC-02', type: 'Infrastructure Symbiosis', primaryText: 'Install shared liquid-to-air heat exchanger with Delta Bakeries (Adjacent Plot).', impact: 'Pre-heats industrial laundry intake water by 22°C; reduces carbon footprint by 14%.', status: 'Pending Review' }
  ]);

  const [transactions, setTransactions] = useState([
    { id: 'TXN-9021', resource: 'Excess Structural Drywall', partner: 'Alpha Builders', type: 'Inbound Claim', status: 'Dispatched', date: '2026-06-25', impact: '1.2 Tons Diverted' },
    { id: 'TXN-8841', resource: 'Non-Potable Greywater Batch', partner: 'Municipal Park Zone B', type: 'Outbound Supply', status: 'Completed', date: '2026-06-22', impact: '4,000L Circularized' }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'AI Recommendation Engine Alert', message: 'New optimized industrial heat loop found matching adjacent grid parameters.', time: '10 mins ago', read: false },
    { id: 2, title: 'Asset Claimed Successfully', message: 'Your listed resource [High-Volume AC Condensate] has been claimed by Om Logistics.', time: '2 hours ago', read: false },
    { id: 3, title: 'Government Regulatory Compliance Check', message: 'Annual ESG certification carbon-offset dynamic credits generated.', time: '2 days ago', read: true }
  ]);

  return (
    <AppContext.Provider value={{
      user, setUser, toast, showToast, loading, setLoading,
      resources, setResources, recommendations, setRecommendations,
      transactions, setTransactions, notifications, setNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};