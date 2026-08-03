(function () {
  const params = new URLSearchParams(window.location.search);
  const tracked = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
  const calendly = new URL("https://calendly.com/d/ds6d-3gf-dr8");

  tracked.forEach((key) => {
    const value = params.get(key);
    if (value) calendly.searchParams.set(key, value);
  });

  calendly.searchParams.set("hide_gdpr_banner", "1");
  calendly.searchParams.set("background_color", "ffffff");
  calendly.searchParams.set("text_color", "121416");
  calendly.searchParams.set("primary_color", "c8102e");

  const widget = document.querySelector(".calendly-inline-widget");
  const fallback = document.querySelector("#calendly-fallback");
  if (widget) widget.dataset.url = calendly.toString();
  if (fallback) fallback.href = calendly.toString();

  window.addEventListener("message", (event) => {
    if (event.origin !== "https://calendly.com" || !event.data || typeof event.data.event !== "string") return;
    if (event.data.event === "calendly.event_scheduled" && typeof window.fbq === "function") {
      window.fbq("track", "Schedule");
    }
  });
})();
