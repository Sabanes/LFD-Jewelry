"use client";
import { useRouter } from 'next/navigation';
import { useTransition } from '../components/PageTransition/PageTransition';

export const usePageTransition = () => {
  const router = useRouter();
  const { startTransition } = useTransition();

  const navigateWithTransition = (href) => {
    if (window.location.pathname === href) return;
    
    startTransition();
    
    // Navigate after a short delay to show the transition
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return {
    navigateWithTransition
  };
};