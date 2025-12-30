import { useEffect, useRef } from 'react';

function useAutoClose() {
  const domNode = useRef<HTMLDivElement | null>(null);

  const useClickOutside = (handler: () => void) => {
    useEffect(() => {
      const maybeHandler = (e: MouseEvent) => {
        // Sjekk at domNode.current faktisk finnes
        if (domNode.current && !domNode.current.contains(e.target as Node)) {
          handler();
        }
      };

      document.addEventListener('click', maybeHandler, true);
      return () => {
        document.removeEventListener('click', maybeHandler, true);
      };
    }, [handler]);

    return domNode;
  };

  return [useClickOutside] as const;
}

export default useAutoClose;
