'use client'

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"40min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="40min"
    calLink="faizan-khan-n3vlyp/40min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />;
};