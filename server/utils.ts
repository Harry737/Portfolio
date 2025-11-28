export function parseUserAgent(userAgent: string): { browser: string; os: string } {
  let browser = "Unknown";
  let os = "Unknown";

  if (userAgent) {
    if (/Edg/.test(userAgent)) {
      browser = "Edge";
    } else if (/Chrome/.test(userAgent)) {
      browser = "Chrome";
    } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
      browser = "Safari";
    } else if (/Firefox/.test(userAgent)) {
      browser = "Firefox";
    } else if (/MSIE|Trident/.test(userAgent)) {
      browser = "IE";
    }

    if (/Windows/.test(userAgent)) {
      os = "Windows";
    } else if (/Macintosh|Mac OS X/.test(userAgent)) {
      os = "Mac";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
      os = "iOS";
    } else if (/Linux/.test(userAgent)) {
      os = "Linux";
    }
  }

  return { browser, os };
}

async function getLocationFromIp(ip: string): Promise<string | null> {
  if (ip === "unknown" || ip === "::1" || ip === "127.0.0.1") {
    return "Local";
  }

  try {
    const response = await fetch(`https://ipwho.is/?ip=${ip}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (response.ok) {
      const data: any = await response.json();
      if (data.success && data.city && data.country) {
        return `${data.city}, ${data.country}`;
      } else if (data.success && data.country) {
        return data.country;
      }
    }
  } catch (error) {
    console.error("Error fetching location from ipwho:", error);
  }

  try {
    const response = await fetch(`https://ip-api.com/json/${ip}?fields=country,city`, {
      signal: AbortSignal.timeout(5000),
    });
    if (response.ok) {
      const data: any = await response.json();
      if (data.status === "success") {
        if (data.city && data.country) {
          return `${data.city}, ${data.country}`;
        } else if (data.country) {
          return data.country;
        }
      }
    }
  } catch (error) {
    console.error("Error fetching location from ip-api:", error);
  }

  return null;
}

export { getLocationFromIp };
