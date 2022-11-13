import {useEffect, useState} from 'react';

export const useMediaQuery = (query) => {
  const isBrowser = typeof window !== "undefined"
  
  const mediaMatch = isBrowser ? window.matchMedia(query): true;
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};