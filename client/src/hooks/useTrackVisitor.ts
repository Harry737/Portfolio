import { useEffect } from "react";
import { useLocation } from "wouter";

function getGeolocation(): Promise<{ latitude: number; longitude: number } | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        resolve(null);
      },
      { timeout: 5000, maximumAge: 600000 }
    );
  });
}

export function useTrackVisitor() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/analytics") {
      return;
    }

    const trackVisitor = async () => {
      try {
        const coords = await getGeolocation();

        await fetch("/api/track-visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: location || "/",
            referrer: document.referrer || null,
            userAgent: navigator.userAgent,
            latitude: coords?.latitude || null,
            longitude: coords?.longitude || null,
          }),
        });
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, [location]);
}
