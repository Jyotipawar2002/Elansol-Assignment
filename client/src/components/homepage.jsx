import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from "react-router-dom";

function Homepage () {
   
   



    return (

        <>

            <div style={{ width: "1310px", marginTop: "4px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                    <div className="container-fluid">
                       

                        <div className="d-flex" role="search">
                            <NavLink to={"/admin"}><a className="navbar-brand" href="#">Admin</a></NavLink>

                        </div>

                    </div>
                </nav >

            </div>


        </>

    );
};

export default Homepage;
