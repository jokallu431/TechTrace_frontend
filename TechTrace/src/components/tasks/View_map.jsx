// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";

// const ORS_API_KEY = "5b3ce3597851110001cf62483332b36dc3b04fa3b1c16312bdeeac7c"; // Replace with your ORS API Key
// const TASK_ID = "Task_0004"; // Replace with the actual Task ID

// const MapCenter = ({ center }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (center) {
//       map.setView(center, 13); // Keep branch as center
//     }
//   }, [center, map]);
//   return null;
// };

// const TrackTechnician = () => {
//   const { taskId } = useParams();
//   const [branchCoords, setBranchCoords] = useState(null);
//   const [taskCoords, setTaskCoords] = useState(null);
//   const [technicianCoords, setTechnicianCoords] = useState(null);
//   const [routePath, setRoutePath] = useState([]);

//   // Fetch Task Details and Branch Information
//   useEffect(() => {
//     const fetchTaskDetails = async () => {
//       try {
//         const taskResponse = await fetch(`https://tech-trace-backend.vercel.app/task/task_list/${TASK_ID}`);
//         const taskData = await taskResponse.json();

//         if (!taskData) throw new Error("No task data found");

//         const { task_Address, branch_Id } = taskData;

//         const branchResponse = await fetch("https://tech-trace-backend.vercel.app/branch/branch_list");
//         const branchData = await branchResponse.json();

//         if (!branchData || branchData.length === 0) throw new Error("No branch data found");

//         const branch = branchData.find((b) => b._id.$oid === branch_Id.$oid);
//         if (branch) {
//           plotRoute(task_Address, branch.branch_Address);
//         }
//       } catch (err) {
//         console.error("Error fetching task or branch details:", err);
//       }
//     };

//     fetchTaskDetails();
//     trackTechnician();
//   }, []);

//   // Convert Address to Coordinates
//   const getCoordinates = async (address) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
//       );
//       const data = await response.json();
//       if (data.length > 0) {
//         return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
//       }
//     } catch (err) {
//       console.error("Error fetching coordinates:", err);
//     }
//     return null;
//   };

//   // Fetch and Draw Route using OpenRouteService
//   const fetchRoute = async (branchData, taskData) => {
//     const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${branchData.lon},${branchData.lat}&end=${taskData.lon},${taskData.lat}`;
    
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.routes && data.routes.length > 0) {
//         const routeCoordinates = data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]);
//         setRoutePath(routeCoordinates);
//       }
//     } catch (err) {
//       console.error("Error fetching route:", err);
//     }
//   };

//   // Get Coordinates and Fetch Route
//   const plotRoute = async (taskAddress, branchAddress) => {
//     const branchData = await getCoordinates(branchAddress);
//     const taskData = await getCoordinates(taskAddress);

//     if (branchData && taskData) {
//       setBranchCoords(branchData);
//       setTaskCoords(taskData);
//       fetchRoute(branchData, taskData);
//     }
//   };

//   // Track Technician's Live Location
//   const trackTechnician = () => {
//     if (!navigator.geolocation) {
//       console.warn("Geolocation is not supported by this browser.");
//       return;
//     }

//     navigator.geolocation.watchPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setTechnicianCoords({ lat: latitude, lon: longitude });
//       },
//       (error) => console.error("Geolocation error:", error),
//       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
//     );
//   };

//   // Set Map Center to Branch Location
//   const mapCenter = branchCoords ? [branchCoords.lat, branchCoords.lon] : [51.505, -0.09];

//   return (
//     <div style={{ height: "60vh" }}>
//       <MapContainer center={mapCenter} zoom={13} style={{ width: "100%", height: "100%" }}>
//         <MapCenter center={mapCenter} />
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {/* Branch Marker */}
//         {branchCoords && (
//           <Marker position={[branchCoords.lat, branchCoords.lon]}>
//             <Popup>Branch Location</Popup>
//           </Marker>
//         )}

//         {/* Task Marker */}
//         {taskCoords && (
//           <Marker position={[taskCoords.lat, taskCoords.lon]}>
//             <Popup>Task Location</Popup>
//           </Marker>
//         )}

//         {/* Display Route */}
//         {routePath.length > 0 && (
//           <Polyline positions={routePath} color="blue" weight={5} />
//         )}

//         {/* Technician's Live Location Marker */}
//         {technicianCoords && (
//           <Marker position={[technicianCoords.lat, technicianCoords.lon]}>
//             <Popup>Technician's Live Location</Popup>
//           </Marker>
//         )}
//       </MapContainer>
//     </div>
//   );
// };

// export default TrackTechnician;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import ClipLoader from "react-spinners/ClipLoader"; // 🔹 Loading Spinner

const ORS_API_KEY = "5b3ce3597851110001cf62483332b36dc3b04fa3b1c16312bdeeac7c";
const TASK_ID = "Task_0004";

const MapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 13);
    }
  }, [center, map]);
  return null;
};

const TrackTechnician = () => {
  const { taskId } = useParams();
  const [branchCoords, setBranchCoords] = useState(null);
  const [taskCoords, setTaskCoords] = useState(null);
  const [technicianCoords, setTechnicianCoords] = useState(null);
  const [routePath, setRoutePath] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const [taskRes, branchRes] = await Promise.all([
          fetch(`https://tech-trace-backend.vercel.app/task/task_list/${TASK_ID}`),
          fetch("https://tech-trace-backend.vercel.app/branch/branch_list")
        ]);
        
        const taskData = await taskRes.json();
        const branchData = await branchRes.json();
        if (!taskData || !branchData) throw new Error("No data available");

        const branch = branchData.find((b) => b._id.$oid === taskData.branch_Id.$oid);
        if (branch) {
          await plotRoute(taskData.task_Address, branch.branch_Address);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTaskDetails();
    trackTechnician();
  }, []);

  const getCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
      );
      const data = await response.json();
      return data.length > 0 ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) } : null;
    } catch (err) {
      console.error("Error fetching coordinates:", err);
    }
    return null;
  };

  const fetchRoute = async (branchData, taskData) => {
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${branchData.lon},${branchData.lat}&end=${taskData.lon},${taskData.lat}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.routes) {
        setRoutePath(data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]));
      }
    } catch (err) {
      console.error("Error fetching route:", err);
    }
  };

  const plotRoute = async (taskAddress, branchAddress) => {
    const [branchData, taskData] = await Promise.all([
      getCoordinates(branchAddress),
      getCoordinates(taskAddress)
    ]);

    if (branchData && taskData) {
      setBranchCoords(branchData);
      setTaskCoords(taskData);
      fetchRoute(branchData, taskData);
    }
  };

  const trackTechnician = () => {
    if (!navigator.geolocation) return console.warn("Geolocation not supported.");
    navigator.geolocation.watchPosition(
      (position) => setTechnicianCoords({ lat: position.coords.latitude, lon: position.coords.longitude }),
      (error) => console.error("Geolocation error:", error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <ClipLoader size={50} color="#007bff" loading={true} />
      </div>
    );
  }

  return (
    <div style={{ height: "60vh" }}>
      <MapContainer center={[branchCoords.lat, branchCoords.lon]} zoom={13} style={{ width: "100%", height: "100%" }}>
        <MapCenter center={[branchCoords.lat, branchCoords.lon]} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />

        {branchCoords && <Marker position={[branchCoords.lat, branchCoords.lon]}><Popup>Branch Location</Popup></Marker>}
        {taskCoords && <Marker position={[taskCoords.lat, taskCoords.lon]}><Popup>Task Location</Popup></Marker>}
        {routePath.length > 0 && <Polyline positions={routePath} color="blue" weight={5} />}
        {technicianCoords && <Marker position={[technicianCoords.lat, technicianCoords.lon]}><Popup>Technician's Location</Popup></Marker>}
      </MapContainer>
    </div>
  );
};

export default TrackTechnician;
