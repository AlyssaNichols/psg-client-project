//Imports used in component
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Typography, Container, CardContent, Paper } from "@mui/material";
//Imports used for tables and data
import GroupDetailsCard from "../GroupDetailsCard/GroupDetailsCard";
import ActiveFundraiserItem from "../ActiveFundraiserItem/ActiveFundraiserItem";
import ClosedFundraiserItem from "../ClosedFundraiserItem/ClosedFundraiserItem";



//Function for the component
export default function GroupDetails() {
    //Used to get the group id number and display the correct fundraiser information 
    const id = Number(useParams().id);
    //Instanciates dispatch for use in component
    const dispatch = useDispatch();
    //Store used to get the group and fundraiser data
    const groupDetails = useSelector((store) => store.group)
    const fundraisers = useSelector((store) => store.fundraisers)

    //Use Effect that runs on page load to fetch the group details
    useEffect(() => {
        dispatch({ type: "FETCH_GROUP_DETAILS", payload: id })
    }, [])
    //Use Effect that runs after group details are fetched. Grabs the fundraisers tied to the group id number
    useEffect(() => {
        dispatch({ type: "FETCH_FUNDRAISERS", payload: id })
    }, [groupDetails])
    //Console logs for testing
    console.log(groupDetails)
    console.log(fundraisers)

    //Elements used in component. Displays data based on the components that are called and has the headers for both open fundraisers and closed fundarisers tables
    return (
        <>
            <Container>
                <br />
                {groupDetails.map(group => {
                    return (
                        <GroupDetailsCard key={id} group={group} />
                    )
                })}
            </Container>
            <br />
            <br />
            <Paper elevation={6} style={{ margin: "10px", padding: "10px", paddingBottom: "40px", height: "80%" }}>
                <TableContainer style={{ width: "95%", margin: "auto" }} >
                    <Typography variant="h6">Active Campaigns</Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow style={{ border: "2px solid black" }}>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px"}}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold" }}>Title</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Description</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Books Requested</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px" , fontWeight: "bold" }} variant="body2">Books Checked Out</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Books Out Value</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Books Checked In</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Books Sold</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Money Received</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Start Date</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">End Date</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Year</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px" , fontWeight: "bold" }} variant="body2">Outstanding Balance</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px", width: "100px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }}>Actions</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fundraisers.map(fundraiser => {
                                return (
                                    <ActiveFundraiserItem key={fundraiser.id} fundraiser={fundraiser} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <br />
                <TableContainer style={{ width: "95%", margin: "auto" }}>
                    <Typography variant="h6">Closed Campaigns</Typography>
                    <Table size="small">
                        <TableHead>
                            <TableRow style={{ border: "2px solid black" }}>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Title</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Description</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Photo</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Books Sold</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Money Received</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Start Date</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">End Date</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Year</Typography></TableCell>
                                <TableCell style={{ border: "2px solid black", height: "50px", width: "100px", padding: "10px" }}><Typography style={{ fontSize: "15px", width: "100px", fontWeight: "bold"  }} variant="body2">Outstanding Balance</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fundraisers.map(fundraiser => {
                                return (
                                    <ClosedFundraiserItem key={fundraiser.id} fundraiser={fundraiser} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )


}
