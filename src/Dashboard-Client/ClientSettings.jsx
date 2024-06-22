import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';



export const ClientSettings = () => {
  const [userData, setUserData] = useState({
    id: '',
    fullName: '',
    gender: '',
    city: '',
    email: '',
    phone: '',
    password: '',

  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const getClient = async () => {
    try {
      const response = await axios.get('http://localhost:5000/client/clientdata', {
        withCredentials: true
      });

      if (response.status === 200) {


        setUserData(response.data.result);


      } else {
        console.error('Failed to fetch Client data:', response.statusText);
        alert('Error getting client data ');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedData = { ...userData, [name]: value };
    setUserData(updatedData);
    setIsUpdated(true);
  };

  const updateClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/client/updateClientprofile', userData, {
        withCredentials: true // Ensure credentials are included in the request
      });
      console.log('Response:', response.data);
      alert('Profile updated successfully');
      if (userData.email || userData.password) {
        window.location.href = 'http://localhost:3000';
      } else if (userData.fullName || userData.phone) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error or other issue occurred');
    }
  };
  useEffect(() => {
    getClient();
  }, []);

  return (
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>

      <form onSubmit={updateClient}>
        <Card>
          <CardContent>
            <Stack spacing={2} sx={{ alignItems: 'center' }}>
              <Avatar
                src={selectedFile ? URL.createObjectURL(selectedFile) : userData.avatar}
                alt="Avatar"
                sx={{ height: '80px', width: '80px' }}
              >
                {userData.fullName ? userData.fullName[0] : ""}
              </Avatar>
              <Stack spacing={1} sx={{ textAlign: 'center' }}>
                <Typography variant="h5">{userData.fullName} </Typography>
                <Typography color="text.secondary" variant="body2">
                </Typography>
                <Typography color="text.secondary" variant="body2">
                </Typography>
              </Stack>
              <div>
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} id="avatar-upload" />
                <label htmlFor="avatar-upload">
                  <Button component="span" variant="text">
                    Upload picture
                  </Button>
                </label>
              </div>
            </Stack>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'center' }}>
          </CardActions>
        </Card>

        <Card>
          <CardHeader subheader="The information can be edited" title="Profile" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Full name</InputLabel>
                  <OutlinedInput
                    value={userData.fullName}
                    label="Full name"
                    name="fullName"
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
              </Grid>

              <Grid md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Email address</InputLabel>
                  <OutlinedInput value={userData.email} label="Email address" name="email" onChange={handleInputChange}
                    required
                    type="email"
                  />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>city</InputLabel>
                  <OutlinedInput value={userData.city} label="city" name="city" onChange={handleInputChange} required />
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Phone</InputLabel>
                  <OutlinedInput value={userData.phone} label="Phone" name="phone" onChange={handleInputChange} 
                  required
                  type="text"
                  inputProps={{ pattern: "[0-9]{3}[0-9]{3}[0-9]{4}" }}/>
                </FormControl>
              </Grid>
              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput value={userData.password} label="Password" name="password" type="password" onChange={handleInputChange}required />
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" type='submit' disabled={!isUpdated}>Save details</Button>
          </CardActions>
        </Card>

        <Card>
          <CardHeader subheader="Manage the notifications" title="Notifications" />
          <Divider />
          <CardContent>
            <Grid container spacing={6} wrap="wrap">
              <Grid item md={4} sm={6} xs={12}>
                <Stack spacing={1}>
                  <Typography variant="h6">Email</Typography>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Product updates" />
                    <FormControlLabel control={<Checkbox />} label="Security updates" />
                  </FormGroup>
                </Stack>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Stack spacing={1}>
                  <Typography variant="h6">Phone</Typography>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                    <FormControlLabel control={<Checkbox />} label="Security updates" />
                  </FormGroup>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" >Save changes</Button>
          </CardActions>
        </Card>
      </form>



    </div>
  );
}
