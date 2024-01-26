import { useEffect, useState } from "react";

/**
 * Return boolean if media matches with query string
 * @param {string} query media query "(min-width: 640px)"
 * @returns boolean
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [matches, query]);

  return matches;
}
