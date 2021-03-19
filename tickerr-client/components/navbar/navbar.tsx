import React from "react";
import { Link } from "react-router-dom";

import { TickerrBrand } from "../tickerrBrand/tickerrBrand";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <div id="tickerr-navbar">      
      <TickerrBrand />
      <div id="tickerr-navbar-items">
        <Link to="/" className="tickerr-navbar-item passion-one-font">Legal</Link>
      </div>
    </div>
  )
}