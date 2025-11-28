import { useEffect } from "react";
import { useLocation } from "wouter";
import { visitorStore } from "@/lib/visitorStore";

async function sendToDiscord(ipData: any, locationData: any, page: string, userAgent: string) {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("Discord webhook URL not configured");
    return;
  }

  try {
    const message = {
      content: `🔍 **New Visitor**\n**IP:** ${ipData.ip}\n**Country:** ${locationData.country_name || "Unknown"}\n**City:** ${locationData.city || "Unknown"}\n**Region:** ${locationData.region || "Unknown"}\n**Page:** ${page}\n**Browser:** ${userAgent.substring(0, 100)}\n**Time:** ${new Date().toISOString()}`
    };

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });
  } catch (error) {
    console.error("Failed to send to Discord:", error);
  }
}

function disableInspect() {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || (e.ctrlKey && e.key === "u")) {
      e.preventDefault();
    }
  });
}

export function useTrackVisitor() {
  const [location] = useLocation();

  useEffect(() => {
    disableInspect();
  }, []);

  useEffect(() => {
    if (location === "/analytics") {
      return;
    }

    const trackVisitor = async () => {
      try {
        // Track locally
        visitorStore.addVisitor(
          location || "/",
          document.referrer || null,
          navigator.userAgent
        );

        // Get IP and location
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        const locationResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const locationData = await locationResponse.json();

        // Send to Discord
        await sendToDiscord(ipData, locationData, location || "/", navigator.userAgent);
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    };

    trackVisitor();
  }, [location]);
}
