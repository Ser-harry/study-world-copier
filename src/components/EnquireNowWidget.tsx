import { Link } from "react-router-dom";

const EnquireNowWidget = () => (
  <Link
    to="/contact"
    id="enquire-now-widget"
    aria-label="Enquire Now – Contact us"
    style={{
      position: "fixed",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      background: "linear-gradient(180deg, #f97316 0%, #ea580c 100%)",
      color: "#ffffff",
      fontWeight: 700,
      fontSize: "0.82rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "18px 10px",
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
      boxShadow: "none",
      textDecoration: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: "background 0.25s ease, box-shadow 0.25s ease, padding 0.2s ease",
      userSelect: "none",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.background = "linear-gradient(180deg, #ea580c 0%, #c2410c 100%)";
      el.style.boxShadow = "none";
      el.style.paddingRight = "14px";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLAnchorElement;
      el.style.background = "linear-gradient(180deg, #f97316 0%, #ea580c 100%)";
      el.style.boxShadow = "none";
      el.style.paddingRight = "10px";
    }}
  >
    {/* Small arrow icon (rotated to point right since writing-mode is vertical) */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: "rotate(90deg)", flexShrink: 0 }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
    Enquire Now
  </Link>
);

export default EnquireNowWidget;
