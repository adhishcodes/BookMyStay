import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import Footer from './Footer';
import './main.css';
const imageDetails = [
  {
    url: 'https://source.unsplash.com/800x600/?hotel-room',
    description: 'Luxurious Hotel Room with a View',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-lobby',
    description: 'Elegant Hotel Lobby',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-pool',
    description: 'Relaxing Hotel Pool Area',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-restaurant',
    description: 'Fine Dining Restaurant in the Hotel',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-bedroom',
    description: 'Comfortable Hotel Bedroom',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-spa',
    description: 'Spa and Wellness Center',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-gym',
    description: 'Fitness Center with Modern Equipment',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-conference',
    description: 'Conference Room for Events',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-terrace',
    description: 'Scenic Terrace with a View',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-beach',
    description: 'Private Beach Access for Guests',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-sunset',
    description: 'Breathtaking Sunset View from the Hotel',
  },
  {
    url: 'https://source.unsplash.com/800x600/?hotel-spa-pool',
    description: 'Refreshing Pool at the Spa',
  },
  // Add more image details as needed
];

const Blog = () => {
  return (

    <Container maxWidth="xl" sx={{ mt: 3, mb: 3}} className="aboutmain">
      
    <Grid container spacing={3} maxWidth="xl">
        <div className="about">
            About Us
        </div>
        <Grid className="des">
            <Typography variant="body1" paragraph style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
              Welcome to BookMyStay! We are committed to providing you with the best hotel booking experience.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
              Our website offers a curated selection of hotels with a variety of features to suit every traveler's needs.
              Explore our blog to get a glimpse of the luxurious rooms, stunning lobbies, and relaxing amenities offered by
              our partnered hotels.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
              Whether you are planning a business trip or a leisure vacation, BookMyStay ensures a seamless booking process,
              transparent pricing, and a wide range of accommodation options.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
            Navigate our sleek and modern interface with ease. The user-friendly design ensures that whether you're a tech-savvy individual or new to online booking, you'll find the platform incredibly easy to use.
Begin your journey by exploring a vast array of services, events, and activities. From restaurants and spa treatments to concert tickets and travel accommodations, BOOKMYSTAY has it all. Use our advanced search filters to find exactly what you're looking for.Once you've found the perfect option, our secure booking system makes reservations a breeze. Select your preferred date, time, and any additional preferences, and confirm your booking with confidence. Our encrypted payment gateway ensures that your transactions are safe and secure.
            </Typography>
        </Grid>

        {/* Image Grid */}
        {imageDetails.map((detail, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 3 }}>
              <img src={detail.url} alt={`Blog Image ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="body2" mt={2}>
                {detail.description}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Blog Content */}
        

        {/* Management component */}
        <Grid item xs={12} md={4}>
          {/* Management component can go here */}
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph>
      <Typography variant="body1" paragraph style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
            Navigate our sleek and modern interface with ease. The user-friendly design ensures that whether you're a tech-savvy individual or new to online booking, you'll find the platform incredibly easy to use.
Begin your journey by exploring a vast array of services, events, and activities. From restaurants and spa treatments to concert tickets and travel accommodations, BOOKMYSTAY has it all. Use our advanced search filters to find exactly what you're looking for.Once you've found the perfect option, our secure booking system makes reservations a breeze. Select your preferred date, time, and any additional preferences, and confirm your booking with confidence. Our encrypted payment gateway ensures that your transactions are safe and secure.
            </Typography>
            </Typography>
      <Footer/>
    </Container>
  );
};

export default Blog;