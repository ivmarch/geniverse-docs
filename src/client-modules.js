// Add class to body when on design-system page
(function() {
  if (typeof window === 'undefined') return;
  
  const checkDesignSystemPage = () => {
    const path = window.location.pathname;
    if (path.includes('/design-system')) {
      document.body.classList.add('on-design-system-page');
    } else {
      document.body.classList.remove('on-design-system-page');
    }
  };

  // Check on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkDesignSystemPage);
  } else {
    checkDesignSystemPage();
  }

  // Check on navigation (for client-side routing)
  window.addEventListener('popstate', checkDesignSystemPage);
  
  // Listen for Docusaurus route changes
  if (window.docusaurus) {
    window.docusaurus.routeUpdate = window.docusaurus.routeUpdate || [];
    window.docusaurus.routeUpdate.push(checkDesignSystemPage);
  }
  
  // Use MutationObserver as fallback to detect route changes
  const observer = new MutationObserver(() => {
    checkDesignSystemPage();
  });
  
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();

