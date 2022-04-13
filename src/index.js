let initialized = false;

export const initialize = (pixelId) => {
  initialized = typeof window !== "undefined" && !!window.fbq;
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  if (!pixelId) {
    throw new TypeError("Add the pixel ID");
  } else {
    fbq("init", pixelId);
    initialized = true;
  }
};

export const track = (trackType, options) => {
  if (typeof window !== "undefined" && initialized && "fbq" in window) {
    if (options) window.fbq("track", trackType, options);
    else window.fbq("track", trackType);
    return true;
  } else {
    return false;
  }
};

export const trackCustom = (trackType, options) => {
  if (typeof window !== "undefined" && initialized && "fbq" in window) {
    if (options) window.fbq("trackCustom", trackType, options);
    else window.fbq("trackCustom", trackType);
    return true;
  } else {
    return false;
  }
};
