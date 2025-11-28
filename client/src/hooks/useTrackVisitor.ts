import { useEffect } from "react";
import { useLocation } from "wouter";
import { visitorStore } from "@/lib/visitorStore";

export function useTrackVisitor() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/analytics") {
      return;
    }

    visitorStore.addVisitor(
      location || "/",
      document.referrer || null,
      navigator.userAgent
    );
  }, [location]);
}
