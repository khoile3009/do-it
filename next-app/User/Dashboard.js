// Dashboard.js

import { React, useState } from "react";
import { Button, Card, CardContent, CardHeader, makeStyles, Typography, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import customTheme from "../theme/theme";
import clsx from "clsx";

// Dashboard dependencies

// Styling
const useStyles = makeStyles((theme) => ({
    dashboardWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },

    root: {
        maxWidth: '500px',
        minWidth: '85vw',
        minHeight: '50vh'
    }
}))

function WorkerDashboard(props) {
    return (
        <div>
            <h1>This is worker dashboard</h1>
        </div>
    )
}
function CustomerDashboard(props) {
    return (
        <div>
            <h1>This is customer dashboard</h1>
        </div>
    )
}

export default function Dashboard(props) {
    const classes = useStyles();
    const theme = useTheme();

    // for testing only
    const [userType, setUserType] = useState('worker');
    const handleUserType = (event) => {
        event.preventDefault();
        if (userType == 'worker') {
            setUserType('customer');
        } else {
            setUserType('worker')
        }
    }
    // ---------------------------------------
    
    return (
        <div className={classes.dashboardWrapper}>
            <Card className={classes.root}>
                <Button color="primary" onClick={ handleUserType }>
                    Click me to change userType
                </Button>
                { userType == 'worker' ? <WorkerDashboard/> : <CustomerDashboard/>}
            </Card>
        </div>
    )
}