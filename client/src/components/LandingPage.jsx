import React from "react";
import {Link} from 'react-router-dom'

export default function LandingPage(){
    return(
        <div>
            <h1>Wellcome to the Recipe's World</h1>
            <Link to ='/home'>
                <button>Access</button>
            </Link>
        </div>

    )
}