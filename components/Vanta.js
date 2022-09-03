import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Vanta() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setTimeout(() => {
				setVantaEffect(
					NET({
						el: myRef.current,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.0,
						minWidth: 200.0,
						scale: 1.0,
						scaleMobile: 1.0,
						points: 15.0,
						maxDistance: 35,
						spacing: 25,

						color: "#0077b2",
						backgroundColor: "#ecf0f3",
						THREE,
					})
				);
			}, 50);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div
			className="absolute top-0 left-0 w-full min-w-full min-h-screen shadow-inner pointer-events-none -z-10"
			ref={myRef}
			style={{ opacity: 0.35 }}
		/>
	);
}
