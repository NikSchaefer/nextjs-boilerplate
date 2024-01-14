"use client";

import { IS_PRODUCTION, MIXPANEL_TOKEN } from "../../config";
import Script from "next/script";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function AnalyticScripts() {
	useEffect(() => {
		mixpanel.init(MIXPANEL_TOKEN, {
			track_pageview: true,
			persistence: "localStorage",
			debug: !IS_PRODUCTION,
		});
	}, []);

	if (!IS_PRODUCTION) return <></>;

	return (
		<Script
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
!function(a,b){var c=window;c.SessionStackKey=a,c[a]=c[a]||{t:b,
q:[]};for(var d=["start","stop","identify","getSessionId","log","setOnDataCallback","trackEvent"],e=0;e<d.length;e++)!function(b){
c[a][b]=c[a][b]||function(){c[a].q.push([b].concat([].slice.call(arguments,0)));
}}(d[e]);var f=document.createElement("script");f.async=1,f.crossOrigin="anonymous",
f.src="https://cdn.sessionstack.com/sessionstack.js";var g=document.getElementsByTagName("script")[0];
g.parentNode.insertBefore(f,g)}("SessionStack","abed4f88c14446ef88144ed350195b15");
`,
			}}
		/>
	);
}