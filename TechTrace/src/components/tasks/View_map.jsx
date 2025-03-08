import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const TrackTechnician = () => {
  const [branchCoords, setBranchCoords] = useState(null);
  const [taskCoords, setTaskCoords] = useState(null);
  const [technicianCoords, setTechnicianCoords] = useState(null);
  const [taskAddress, setTaskAddress] = useState('');
  const [branchAddress, setBranchAddress] = useState('');

  // Fetch task and branch details from API
  const fetchTaskAndBranchDetails = async () => {
    try {
      const taskResponse = await fetch('http://localhost:4000/task/task_list');
      const taskData = await taskResponse.json();
      const task = taskData[0]; // Assuming only one task is needed; adjust if necessary
      setTaskAddress(task.task_Address);

      const branchResponse = await fetch('http://localhost:4000/branch/branch_list');
      const branchData = await branchResponse.json();
      const branch = branchData.find(branch => branch.branch_Id === task.branch_Id); // Find the branch based on the task's branch ID
      setBranchAddress(branch.branch_Address);

      console.log('Task Address:', task.task_Address);
      console.log('Branch Address:', branch.branch_Address);

      // Fetch the coordinates for both addresses
      plotRoute(task.task_Address, branch.branch_Address);
    } catch (err) {
      console.error('Error fetching task and branch details:', err);
    }
  };

  // Fetch Coordinates from geocoding API
  const getCoordinates = async (address) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json&limit=1`);
      const data = await response.json();
      const { lat, lon } = data[0];
      console.log(`Coordinates for "${address}":`, { lat, lon });
      return { lat: parseFloat(lat), lon: parseFloat(lon) };
    } catch (err) {
      console.error('Error fetching coordinates:', err);
      return null;
    }
  };

  // Set up route on the map (branch -> task)
  const plotRoute = async (taskAddress, branchAddress) => {
    const branchData = await getCoordinates(branchAddress);
    const taskData = await getCoordinates(taskAddress);

    if (branchData && taskData) {
      setBranchCoords(branchData);
      setTaskCoords(taskData);
    }
  };

  // Track technician location
  const trackTechnician = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        setTechnicianCoords({ lat: latitude, lon: longitude });
      }, (error) => {
        console.error('Geolocation error:', error);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    fetchTaskAndBranchDetails();  // Fetch task and branch data
    trackTechnician();  // Start tracking technician
  }, []);

  return (
    <div style={{ height: '60vh' }}>
      <MapContainer
        center={branchCoords ? [branchCoords.lat, branchCoords.lon] : [51.505, -0.09]} // Center the map to the branch or fallback to default
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {branchCoords && taskCoords && (
          <>
            <Marker position={[branchCoords.lat, branchCoords.lon]}>
              <Popup>Branch Location</Popup>
            </Marker>
            <Marker position={[taskCoords.lat, taskCoords.lon]}>
              <Popup>Task Location</Popup>
            </Marker>
            <Polyline
              positions={[
                [branchCoords.lat, branchCoords.lon],
                [taskCoords.lat, taskCoords.lon],
              ]}
              color="blue"
            />
          </>
        )}
        {technicianCoords && (
          <Marker position={[technicianCoords.lat, technicianCoords.lon]}>
            <Popup>Technician Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default TrackTechnician;
