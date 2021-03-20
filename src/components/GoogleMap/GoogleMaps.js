// import React from 'react';
// import GoogleMapReact from "google-map-react";


// const GoogleMaps = ({ latitude, longitude }) => {
//   const ModelsMap = (map, maps) => {
//     //instantiate array that will hold your Json Data
//     let dataArray = [];
//     //push your Json Data in the array
//     // {
//     //   data.map((markerJson) => dataArray.push(markerJson));
//     // }

//     //Loop through the dataArray to create a marker per data using the coordinates in the json
//     for (let i = 0; i < dataArray.length; i++) {
//       let marker = new maps.Marker({
//         position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
//         map,
//         label: dataArray[i].id,
//       });
//     }
//   };
//   return (
//     <div style={{ height: "400px", width: "100%" }}>
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
//       defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//       defaultZoom={10}
//       yesIWantToUseGoogleMapApiInternals
//       onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
//     ></GoogleMapReact>
//   </div>
//   );
// };

// export default GoogleMaps;

