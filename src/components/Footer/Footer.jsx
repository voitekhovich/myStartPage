import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright" >&copy; copyright avcode.ru</div>
      <div>
        <a className="footer__link"
          href="https://github.com/voitekhovich"
          target="_blank"
          rel="noreferrer">GitHub</a>
        </div>
    </footer>
  );
};

export default Footer;
