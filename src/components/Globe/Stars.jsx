import React from "react";
import { useGetStars } from "./hooks/GetStars";


export const Stars = React.memo(() => {
    const { points: stars } = useGetStars({ numStars: 4000 });
    return <primitive object={stars} />;
});