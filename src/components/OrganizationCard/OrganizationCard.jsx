import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
  Button,
} from "@mui/material";
import "./OrganizationCard.css";
import Swal from "sweetalert2";
import EditOrganizationModal from "../EditOrgModal/EditOrganizationModal";

function OrganizationCard({ organization }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const organizationsList = useSelector((store) => store.organizations);

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = () => {
    setEditModalOpen(true);
  };


  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  const handleArchive = (organizationId) => {
    Swal.fire({
      title: "Are you sure you want to Archive this Organization?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Archive It",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "DELETE_ORGANIZATION", payload: organizationId });
        dispatch({ type: "FETCH_ORGANIZATIONS" });
        Swal.fire("Organization Successfully Archived!");
      }
    });
  };

  return (
    <div className="organizationCardContainer">
      <Card
        elevation={4}
        onClick={() => history.push(`/orgDetails/${organization.id}`)}
        className="organizationCard"
      >
        <CardMedia
          style={{ objectFit: "cover", height: "240px", width: "100%", }}
          className="cardMedia"
          component="img"
          image={organization.organization_logo}
        />
        <CardContent>
          <center>
          <Typography style={{ fontSize: "1.7em" }} gutterBottom>
            {organization.organization_name}
          </Typography>
          <Typography style={{ fontSize: "1.2em" }} gutterBottom>
            {organization.city}, {organization.state} {organization.zip}
          </Typography>
          </center>
        </CardContent>
      </Card>
      <center>
        <Button onClick={() => handleArchive(organization.id)}>Archive</Button>
        <Button onClick={() => handleEdit(organization.id)}>Edit</Button>
      </center>
      <EditOrganizationModal
        open={isEditModalOpen}
        handleClose={handleEditClose}
        organization={organization}
      />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default OrganizationCard;
