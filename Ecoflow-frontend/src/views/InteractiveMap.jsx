import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, Badge, Button } from '../components/UI';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix default marker icon glitch in Leaflet + React builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Helper component to dynamically change map view center point when a node is clicked
function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

export const InteractiveMap = () => {
  const { resources } = useApp();
  // Safe fallback coordinates if your state array is empty (NIT Kurukshetra area bounds)
  const defaultCenter = [29.9695, 76.8783]; 
  const [selectedNode, setSelectedNode] = useState(resources?.[0] || null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
    if (node?.coordinates) {
      setMapCenter([node.coordinates.lat, node.coordinates.lng]);
    }
  };

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-120px)] text-slate-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">Spatial Grid Infrastructure Engine</h1>
          <p className="text-sm text-slate-400 font-medium">Hyper-local tracking of geometric resource nodes and physical routing barriers.</p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-7 border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
        {/* Real Geographical Map Engine Container Area */}
        <div className="lg:col-span-5 relative h-full w-full min-h-[400px] z-10">
          <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
            {/* Real OpenStreetMap Tile Provider */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Auto center component updater trigger */}
            <ChangeMapView center={mapCenter} />

            {/* Render real map pins dynamically from your database array */}
            {resources?.map((node, index) => (
              node.coordinates && (
                <Marker 
                  key={node._id || index} 
                  position={[node.coordinates.lat, node.coordinates.lng]}
                  eventHandlers={{ click: () => handleNodeSelect(node) }}
                >
                  <Popup>
                    <div className="text-slate-900 p-1 font-sans">
                      <strong className="block text-sm">{node.title}</strong>
                      <span className="text-xs text-slate-500">{node.category}</span>
                    </div>
                  </Popup>
                </Marker>
              )
            ))}
          </MapContainer>

          {/* Floating Coordinate Badge */}
          <div className="absolute bottom-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-200 px-3 py-1.5 rounded-md shadow-lg font-mono">
            📍 Center Axis: {mapCenter[0].toFixed(4)}° N, {mapCenter[1].toFixed(4)}° E
          </div>
        </div>

        {/* Selected Spatial Node Inspection Sidebar Description Panel */}
        <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/40 p-5 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            <span>Node Metadata Scanner</span>
          </div>

          {selectedNode ? (
            <div className="flex flex-col gap-4">
              {selectedNode.image && (
                <img src={selectedNode.image} alt={selectedNode.title} className="w-full h-32 object-cover rounded-xl border border-slate-800" />
              )}
              <div>
                <Badge className="mb-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{selectedNode.category}</Badge>
                <h3 className="text-lg font-bold text-white">{selectedNode.title}</h3>
                <p className="text-xs text-slate-400">Discharged by: {selectedNode.ownerName || 'Unknown Entity'}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                <div className="text-slate-400">MASS VOLUME:</div>
                <div className="text-right text-white font-semibold">{selectedNode.quantity || 'N/A'}</div>
                <div className="text-slate-400">SPATIAL RANGE:</div>
                <div className="text-right text-white font-semibold truncate">{selectedNode.location || 'N/A'}</div>
              </div>
              
              <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-2 rounded-xl mt-2 shadow-lg shadow-indigo-600/10">
                LOCK ALLOCATION VECTOR
              </Button>
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic mt-4 text-center">Select an infrastructure coordinate pin node map marker to verify vector values.</p>
          )}
        </div>
      </div>
    </div>
  );
};