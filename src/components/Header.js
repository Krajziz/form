import { useContext } from 'react';
import { WBFSContext } from '../context/WBFSContext';

export default function Header() {
    const activeLang = useContext(WBFSContext);

    return (
        <div>
            <img src="img.png"/>
        <hr/>
        </div>
    );
}