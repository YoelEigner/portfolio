export  const latLongSphere = (lat, lon, radius = 6371) => {
    const latRad = lat * (Math.PI / 180);
    const lonRad = lon * (Math.PI / 180);
    const x = radius * Math.cos(latRad) * Math.cos(lonRad);
    const y = radius * Math.cos(latRad) * Math.sin(lonRad);
    const z = radius * Math.sin(latRad);
    return { x, y, z };
};