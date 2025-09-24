 import { useEffect, useState } from "react";

 export function useDeepLink(schemeUrl: string, timeout = 1500) {
   const [opened, setOpened] = useState<boolean | null>(null);

   useEffect(() => {
     const start = Date.now();
     window.location.href = schemeUrl;

     const timer = setTimeout(() => {
       setOpened(Date.now() - start > timeout);
     }, timeout);

     return () => clearTimeout(timer);
   }, [schemeUrl, timeout]);

   return opened;
 }
