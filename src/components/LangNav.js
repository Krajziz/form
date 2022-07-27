import { useContext } from 'react';
import { WBFSContext } from '../context/WBFSContext';

export default function LangNav(props) {
    const { langs } = props;
    const activeLang = useContext(WBFSContext);

    function isActiveLang(lang) {
        if (lang.toUpperCase() === activeLang.toUpperCase())
            return true;
        return false;
    }


    // TODO : Replace <a> by <Link>
    return (
        <ul className="nav nav-pills justify-content-end">
        {langs.map(title => {
            return (
              <li key={title} className="nav-item">
                <a className={`nav-link ${isActiveLang(title) ? "active" : ""}`} href={`?Lang=${title}`}>{title}</a>
              </li>
            )
        })}
        </ul>
    );
}