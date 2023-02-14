import React from "react";

const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>made with 💖 by 🦊</p>
      <p>Copyright {year}</p>
    </footer>
  );
}

export default Footer;
