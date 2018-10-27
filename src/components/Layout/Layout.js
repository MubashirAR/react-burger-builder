import React from 'react';
import {Auxiliary} from "../../HOC/Auxiliary";
import classes from "./Layout.css";
export const Layout = props => (
    <Auxiliary>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}> 
            {props.children}
        </main>
    </Auxiliary>
);
