import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HeaderStyled } from "./Layout.styled";



 export const Layout = () => {
    
    return (<>
        <HeaderStyled>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tweets">Tweets</NavLink>
            </nav>
        </HeaderStyled>
         
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <Outlet />
            </main>
        </Suspense>
    
    </>)
};
