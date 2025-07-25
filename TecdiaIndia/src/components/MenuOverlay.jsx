import { useState } from "react";

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="menu-button" onClick={() => setOpen(!open)}>
        <div className="bar" />
        <div className="bar" />
        <div className="menu-label">MENU</div>
      </div>

      {open && (
        <div className="overlay">
          <div className="close-btn" onClick={() => setOpen(false)}>×</div>
          <ul className="overlay-menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}
