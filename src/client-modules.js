// Add class to body when on design-system page
(function() {
  if (typeof window === 'undefined') return;
  
  const checkDesignSystemPage = () => {
    const path = window.location.pathname;
    const isDesignSystemPage = path.includes('/design-system');
    
    if (isDesignSystemPage) {
      document.documentElement.classList.add('on-design-system-page');
      document.body.classList.add('on-design-system-page');
    } else {
      document.documentElement.classList.remove('on-design-system-page');
      document.body.classList.remove('on-design-system-page');
    }
  };

  // Check immediately if DOM is ready
  if (document.body) {
    checkDesignSystemPage();
  } else {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkDesignSystemPage);
    }
  }

  // Check on navigation (for client-side routing)
  window.addEventListener('popstate', checkDesignSystemPage);
  
  // Listen for Docusaurus route changes using history API
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    setTimeout(checkDesignSystemPage, 0);
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    setTimeout(checkDesignSystemPage, 0);
  };
  
  // Use MutationObserver as fallback to detect route changes
  if (document.body) {
    const observer = new MutationObserver(() => {
      checkDesignSystemPage();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }
})();

