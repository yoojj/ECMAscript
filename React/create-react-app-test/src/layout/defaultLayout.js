import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from '@/_common/appRoute';
import URL from '@/_common/router';
import Logo from '@/component/logo';
import SideNav from '@/component/sideNav';
import './_layout.css';



const DefaultLayout = (props) => {
    return (
        <>
            <BrowserRouter>
            <header class="common-header-layout">
                <div className="common-wrap">
                <h1><Logo /></h1>
                <SideNav />
                </div>
            </header>

            <main>
                <div className="common-wrap common-content-wrap">
                <Switch>
                { URL.map( (route, i) => (
                    <AppRoute key = {i} {...route} />
                ))}
                </Switch>
                </div>
            </main>
            </BrowserRouter>

            <footer className="common-footer-layout">
                <div className="common-wrap">
                <h2>하단</h2>
                </div>
            </footer>
        </>
    );
}



export default DefaultLayout;
