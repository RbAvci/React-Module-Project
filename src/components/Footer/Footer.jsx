import "./Footer.scss";
import FooterList from "./FooterList";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer">
      <FooterList />
      <p>Copyright ⓒ {year}</p>

      <p>
        Cyf Hotel by NW-6 Rabia, Zeliha, Fathi, Fikret {""}
        <a rel="noopener" href="https://github.com/RbAvci/React-Module-Project" target="_blank">
          Github Repo
        </a>
      </p>
    </footer>
  );
}
