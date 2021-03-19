import React from "react";
import { Link } from "react-router-dom";

import { Page } from "../page/page";

import { useUpdatePageTitleEffect } from "../../effects/appEffects";

interface LegalPageProps {
  
}

export const LegalPage: React.FC<LegalPageProps> = (props: LegalPageProps) => {
  useUpdatePageTitleEffect("Tickerr | Legal");

  return(
    <Page id="tickerr-legal-page">    
      <div id="tickerr-legal-page-links">
        <Link to="/privacy" className="legal-page-link passion-one-font">Privacy Policy</Link>
        <Link to="/terms" className="legal-page-link passion-one-font">{"Terms & Conditions"}</Link>
        <Link to="/cookies" className="legal-page-link passion-one-font">Cookie Policy</Link>
      </div>
    </Page>
  )
}