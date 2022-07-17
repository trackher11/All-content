import React from "react";

function Footer() {
    var time = new Date().getFullYear();
  return (
      <footer><p>Copyright © {time}</p></footer>
    
  );
}
export default Footer;
