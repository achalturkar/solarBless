'use client'; 

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function AOSWrapper({ children }) {
    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        once: true,
      });
    }, []);
    
    return <>{children}</>;
}