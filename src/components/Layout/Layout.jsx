import { Suspense } from "react";
import {  Outlet } from "react-router-dom";
import { HeaderStyled, LinkStyled,NavStyled } from "./Layout.styled";



 export const Layout = () => {
    
    return (<>
        <HeaderStyled>
            <NavStyled>
                <LinkStyled to="/">Home</LinkStyled>
                <LinkStyled to="/tweets">Tweets</LinkStyled>
            </NavStyled>
        </HeaderStyled>
         
        <Suspense fallback={<div>Loading...</div>}>
            <main>
                <Outlet />
            </main>
        </Suspense>
    
    </>)
};
