import React from "react";

import { AnalyticsUtility } from "../../utilities/analyticsUtility";

interface TickerrBrandProps {
  showBrandText?: boolean;
}

export const TickerrBrand: React.FC<TickerrBrandProps> = (props: TickerrBrandProps) => {
  const getBrandText = (): JSX.Element | null => {
    if(props.showBrandText !== undefined && props.showBrandText === false) {
      return null;
    }

    return (
      <h1 className="bangers-font">Tickerr</h1>
    );
  }

  const handleOnClick = (): void => AnalyticsUtility.log("tickerr_brand_click");
  
  return(
    <a className="tickerr-brand" href="https://tickerr.tv" onClick={handleOnClick}>
      <i className="far fa-heart-rate" />
      {getBrandText()}
    </a>
  )
}