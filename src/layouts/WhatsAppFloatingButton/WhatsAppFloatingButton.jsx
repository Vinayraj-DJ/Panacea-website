import React from "react";
import styles from "./WhatsAppFloatingButton.module.css";

export default function WhatsAppFloatingButton() {
  const whatsappNumber = "919347959436"; // your fixed number
  const message = "Hi! I'm excited to connect with Panacea It Services.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
    >
      {/* Official WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={styles.icon}
      >
        <path
          fill="currentColor"
          d="M16 .5C7.439.5.5 7.44.5 16c0 2.82.737 5.588 2.136 8.028L.5 31.5l7.636-2.07A15.425 15.425 0 0 0 16 31.5c8.561 0 15.5-6.94 15.5-15.5S24.561.5 16 .5zm0 28c-2.607 0-5.151-.688-7.371-1.993l-.528-.311-4.532 1.229 1.213-4.647-.344-.575A13.375 13.375 0 0 1 2.5 16c0-7.456 6.044-13.5 13.5-13.5S29.5 8.544 29.5 16 23.456 28.5 16 28.5zm7.332-10.529c-.401-.2-2.37-1.17-2.737-1.302-.368-.134-.636-.2-.904.2-.268.4-1.037 1.302-1.271 1.57-.234.267-.468.3-.869.1-.401-.2-1.693-.623-3.228-1.985-1.192-1.062-2-2.372-2.234-2.772-.234-.4-.025-.616.176-.816.18-.18.401-.468.602-.702.2-.234.268-.401.401-.668.134-.267.067-.502-.033-.702-.1-.2-.904-2.178-1.237-2.985-.325-.781-.656-.676-.904-.688-.234-.012-.502-.015-.77-.015-.268 0-.702.1-1.07.502-.368.401-1.402 1.37-1.402 3.338s1.434 3.87 1.634 4.138c.2.267 2.818 4.3 6.829 6.018.954.411 1.697.657 2.278.84.957.305 1.828.262 2.516.159.768-.114 2.37-.968 2.703-1.902.334-.934.334-1.736.234-1.902-.101-.165-.367-.267-.768-.467z"
        />
      </svg>
    </a>
  );
}
