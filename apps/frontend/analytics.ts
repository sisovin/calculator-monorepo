import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Analytics: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log('Tracking page view for:', url);
      // Add your analytics tracking code here
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default Analytics;
