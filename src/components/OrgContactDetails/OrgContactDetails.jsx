import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// Helpers
import {
  centeredStyle,
  formatPhoneNumber,
  listItemStyle,
} from "../Utils/helpers";
// Styles
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import "./OrgContactDetails.css";
// Component
import OrgContactEdit from "../OrgContactEdit/OrgContactEdit";

export default function OrgContactDetails({ info }) {
  const dispatch = useDispatch();
  const contactPhone = formatPhoneNumber(info.primary_contact_phone);
  const isSmallScreen = useMediaQuery("(max-width:400px)");

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = (editedItem) => {
    // Dispatch action to update the state or save data
    console.log("New Contact Info:", editedItem);
    dispatch({ type: "EDIT_CONTACT_INFO", payload: editedItem });
    setIsEditing(false);
  };

  return (
    <>
      <div className="org-details">
        <div className="org-address-container">
          <div>
            <center>
              <Typography variant="h6">{info.organization_name}</Typography>
              <Typography>{info.type}</Typography>
            </center>
          </div>
          <div className="org-address">
            <center>
              <Typography>{info.address}</Typography>
              <Typography>
                {info.city}, {info.state} {info.zip}
              </Typography>
            </center>
          </div>
        </div>

        <Card
          elevation={5}
          sx={{
            maxWidth: 360,
            bgcolor: "background.paper",
            ...(isSmallScreen && {
              maxWidth: "100%", // Adjust styles for smaller screens
            }),
          }}
        >
          <List style={{ width: "60%" }}>
            <ListItem disablePadding style={listItemStyle}>
              <ListItemIcon style={centeredStyle}>
                <AccountBoxIcon />
              </ListItemIcon>
              <Typography>{`${info.primary_contact_first_name}, ${info.primary_contact_last_name}`}</Typography>
            </ListItem>
            <ListItem disablePadding style={listItemStyle}>
              <ListItemIcon style={centeredStyle}>
                <PhoneIcon />
              </ListItemIcon>
              <Typography>{contactPhone}</Typography>
            </ListItem>
            <ListItem disablePadding style={listItemStyle}>
              <ListItemIcon style={centeredStyle}>
                <EmailIcon />
              </ListItemIcon>
              <Typography>{info.primary_contact_email}</Typography>
            </ListItem>
            <div>
              {/* <OrgContactEdit
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                editedContactInfo={info}
                onSaveChanges={(editedItem) => {
                  // Handle saving changes (make API call, dispatch action, etc.)
                  console.log("New Contact Info:", editedItem);
                  dispatch({ type: "EDIT_CONTACT_INFO", payload: editedItem });
                  setIsEditing(false);
                }}
              /> */}
              <OrgContactEdit
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                info={info}
                onSaveChanges={handleSaveChanges}
              />
              <Button onClick={handleEdit}>Edit</Button>
            </div>
          </List>
          <Divider />
        </Card>
        <Box sx={{ flexGrow: 1 }}></Box>
      </div>
    </>
  );
}
