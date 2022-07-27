
import Header from './Header.js';
import Form from './Form.js';
import Footer from './Footer.js';
import Alert from './Alert.js';
import { useState } from 'react';
import { WBFSContext } from '../context/WBFSContext';

export default function WBFSApp() {

    // Pass in :react
    //      company for theme (header/font/colors/logo's) --> Context
    //      active language --> Context
    //      languageresource --> JSON?
    //      submitaction
    //

   function getParameter(p) // TODO : useParams???
   {
       var url = window.location.search.substring(1);
       var varUrl = url.split('&');
       for (var i = 0; i < varUrl.length; i++)
       {
           var parameter = varUrl[i].split('=');
           if (parameter[0] === p)
           {
               return parameter[1];
           }
       }
   }

    const [activeLang, setActiveLang] = useState(getParameter("Lang"));

    // if(loading) return <Spinner/>;

    return (
        <div className="container">
            <WBFSContext.Provider value={activeLang}>
                <Header/>
                <Form/>
                <Footer/>
            </WBFSContext.Provider>
        </div>
    );
}