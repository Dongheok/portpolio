import React, { useEffect, useRef } from "react";

const { kakao } = window;

export const MapApiComponent = (props) => {
  const mapRef = useRef();
  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.6047395, 127.0946629),
      level: 3,
    };

    var markerPosition = new kakao.maps.LatLng(37.6047395, 127.0946629);

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    const map = new kakao.maps.Map(container, options);

    var infowindow = new kakao.maps.InfoWindow({
      content:
        '<div style="width:150px;text-align:center;padding:6px 0;">집</div>',
    });
    infowindow.open(map, marker);

    marker.setMap(map);
  }, []);
  return (
    <div className="popup">
      <div
        id="map"
        ref={mapRef}
        style={{
          width: "100%",
          height: "500px",
        }}
      />
    </div>
  );
};
