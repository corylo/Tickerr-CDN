import React from "react";

import { Page } from "../page/page";

import { useLoadLegalPolicyEffect, useUpdatePageTitleEffect } from "../../effects/appEffects";

interface CookiesPageProps {
  
}

export const CookiesPage: React.FC<CookiesPageProps> = (props: CookiesPageProps) => {
  useUpdatePageTitleEffect("Tickerr | Cookie Policy");

  useLoadLegalPolicyEffect();

  return(
    <Page id="tickerr-cookies-page">      
      <div id="tickerr-cookie-policy" className="tickerr-legal-policy">
        { //@ts-ignore
          <div name="termly-embed" data-id="aa05a99b-3b6b-41f2-a9a6-5b9d84fa73f9" data-type="iframe" />
        }
      </div>
    </Page>
  )
}