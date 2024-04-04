import { useRef } from "react";
import { useGsapFooterHeadline } from "../Hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadline}>Hello</h1>
      <p>
        &copy; {new Date().getFullYear()} Visual Voyage.
      </p>
    </section>
  );
};

export default Footer;
