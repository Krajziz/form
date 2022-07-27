import { useContext } from 'react';
import { WBFSContext } from '../context/WBFSContext';

export default function Footer() {
    const activeLang = useContext(WBFSContext);

    return (
        <div>
            <br/>
            <hr/>
            <span className="float-end">Disclaimer | Cookies | Privacy Policy | Company - Year</span>
        </div>
    );
}