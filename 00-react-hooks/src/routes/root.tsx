import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/use-state/`}>UseState Hook Example</Link>
            </li>
            <li>
              <Link to={`/use-effect-basic`}>UseEffect Basic</Link>
            </li>
            <li>
              <Link to={`/use-effect-mouse`}>UseEffect Mouse</Link>
            </li>




          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
