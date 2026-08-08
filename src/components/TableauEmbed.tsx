'use client';

import { useEffect, useRef } from 'react';

const TABLEAU_PARAMS = {
  host_url: 'https%3A%2F%2Fpublic.tableau.com%2F',
  embed_code_version: '3',
  site_root: '',
  name: 'AASDashboard1%2FDashboard1',
  tabs: 'no',
  toolbar: 'yes',
  static_image: 'https://public.tableau.com/static/images/AA/AASDashboard1/Dashboard1/1.png',
  animate_transition: 'yes',
  display_static_image: 'yes',
  display_spinner: 'yes',
  display_overlay: 'yes',
  display_count: 'yes',
  language: 'en-GB',
};

export default function TableauEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();

    const placeholder = document.createElement('div');
    placeholder.className = 'tableauPlaceholder';
    placeholder.style.position = 'relative';

    const vizObject = document.createElement('object');
    vizObject.className = 'tableauViz';
    vizObject.style.display = 'none';
    vizObject.style.width = '100%';
    vizObject.style.height = '520px';

    Object.entries(TABLEAU_PARAMS).forEach(([name, value]) => {
      const param = document.createElement('param');
      param.name = name;
      param.value = value;
      vizObject.appendChild(param);
    });

    placeholder.appendChild(vizObject);
    container.appendChild(placeholder);

    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    vizObject.parentNode?.insertBefore(script, vizObject);

    return () => container.replaceChildren();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[420px] w-full overflow-hidden rounded-xl bg-white"
      aria-label="Embedded Tableau dashboard"
    />
  );
}
