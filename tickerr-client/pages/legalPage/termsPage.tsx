import React from "react";

import { Page } from "../page/page";

import { useLoadLegalPolicyEffect, useUpdatePageTitleEffect } from "../../effects/appEffects";

interface TermsPageProps {
  
}

export const TermsPage: React.FC<TermsPageProps> = (props: TermsPageProps) => {
  useUpdatePageTitleEffect("Tickerr | Terms & Conditions");

  useLoadLegalPolicyEffect();

  return(
    <Page id="tickerr-terms-page">      
      <div id="tickerr-terms-and-conditions" className="tickerr-legal-policy">
        { //@ts-ignore
          <div name="termly-embed" data-id="9b28de68-438e-44ce-8456-3db6a5ce2795" data-type="iframe" />
        }
      </div>
    </Page>
  )
}