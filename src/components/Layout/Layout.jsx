import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";


 export const Layout = () => {
    
    return (<>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tweets">Tweets</NavLink>
            </nav>
        </header>
         
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <Outlet />
            </main>
        </Suspense>
    
    </>)
};
