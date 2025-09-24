 import React from "react";
 import { useDeepLink } from "../hooks/useDeepLink";

 interface Props {
   groupId: string;
   userId: string;
   type: string;
   groupName: string;
 }

 const DeepLinkHandler: React.FC<Props> = ({
   groupId,
   userId,
   type,
   groupName,
 }) => {
   const schemeUrl = `fitexgo://group?groupId=${groupId}&userId=${userId}&type=${type}&name=${encodeURIComponent(
     groupName
   )}`;

   const opened = useDeepLink(schemeUrl);

   const handleDownload = () => {
     const ua = navigator.userAgent;
     if (/android/i.test(ua)) {
       window.location.href =
         "https://play.google.com/store/apps/details?id=com.fitexgo";
     } else if (/iPhone|iPad|iPod/i.test(ua)) {
       window.location.href = "https://apps.apple.com/app/fitexgo";
     } else {
       window.location.href = "https://fitexgo.com/download";
     }
   };

   return (
     <div style={{ textAlign: "center", padding: "2rem" }}>
       {opened === null && <h2>Opening in FitExGo app…</h2>}
       {opened === false && (
         <>
           <h2>App not installed</h2>
           <button onClick={handleDownload}>Download FitExGo</button>
         </>
       )}
     </div>
   );
 };

 export default DeepLinkHandler;
