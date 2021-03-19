import React from "react";

interface PageProps {
  id?: string;
  children: JSX.Element | JSX.Element[];
}

export const Page: React.FC<PageProps> = (props: PageProps) => {
  return (
    <div id={props.id} className="tickerr-page">
      <div className="tickerr-page-content">
        {props.children}
      </div>
    </div>
  )
}