import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever a new route is activated
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
