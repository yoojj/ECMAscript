import { Suspense } from 'react';
import { Route } from 'react-router-dom';



const AppRoute = (route) => {
    return (
        <Route
            path = { route.path }
            render = { (props) => (
                <Suspense fallback = { <p>loading</p> }>
                    <route.component {...props} />
                </Suspense>
            )}
        />
    );
}



export default AppRoute;
