import { useEffect } from "react";
import { useLocation } from "wouter";

export function useTrackVisitor() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/analytics") {
      return;
    }

    const trackVisitor = async () => {
      try {
        await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: location || "/",
            referrer: document.referrer || null,
            userAgent: navigator.userAgent,
          }),
        });
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, [location]);
}
