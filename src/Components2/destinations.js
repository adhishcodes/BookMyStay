import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
        <Container sx={{ py: 10 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/1282107313/photo/adiyogi-lord-shiva-statue-from-unique-different-angles.jpg?s=612x612&w=0&k=20&c=7BVZGajZoiTzmUrf1T58U0ir7jJM_XJfZP_iL5vXNoA="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Coimbatore
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Coimbatore, often referred to as the "Manchester of South India," has a rich industrial heritage dating back to the textile boom in the 19th century. 
                    Today, it is a major hub for manufacturing, education, and healthcare.

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://t3.ftcdn.net/jpg/04/10/13/22/240_F_410132299_FcexXOF2dC0j73CGr4lm9jY9oNhNEpsK.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Ooty
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Ooty, a popular hill station, was a favored summer retreat during the British colonial era. 
                    Its heritage is marked by colonial architecture, tea gardens, and the Nilgiri Mountain Railway, a UNESCO World Heritage Site that reflects the engineering marvels of the 19th century.

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://images.unsplash.com/photo-1527334134460-f21a05ef62f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29kYWlrYW5hbHxlbnwwfHwwfHx8MA%3D%3D"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Kodaikanal
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Kodaikanal, another scenic hill station, was established by American missionaries in the 1840s. 
                    Its heritage is characterized by charming churches, a picturesque lake, and lush greenery, making it a serene retreat in the Western Ghats.


                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://images.unsplash.com/photo-1580818135730-ebd11086660b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVubmFyfGVufDB8fDB8fHww"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Munnar
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Munnar, known for its sprawling tea plantations, has a colonial legacy tied to the British who cultivated tea here. 
                    The heritage of Munnar is embedded in its tea estates, colonial bungalows, and the remnants of the past, showcasing the region's historical significance.


                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.gettyimages.com/id/1194206060/photo/puratchi-thalaivar-dr-mgr-central-railway-station.jpg?s=612x612&w=0&k=20&c=oqzLssBs09Z2P8KCn2PAgFsIGcaOG06SxE4WFqEZK4k="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chennai
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Formerly known as Madras, Chennai is a city with a rich cultural heritage that dates back to the British East India Company. 
                    Its heritage is reflected in landmarks like Fort St. George, ancient temples, and the vibrant arts and music scene that has flourished for centuries.

                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/1293974653/photo/golden-lotus-tank-and-gopurams-meenakshi-amman-temple-is-a-historic-hindu-temple-located-in.jpg?s=612x612&w=0&k=20&c=YNVfZH4T-nmfIFowTKauad0ijOI62IZDpdNBD5aOh4Q="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Madurai
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Madurai is one of the oldest continuously inhabited cities in the world, boasting a rich cultural and religious heritage. 
                    The Meenakshi Amman Temple, with its stunning architecture, stands as a testament to the city's historical significance and its role as a center of Tamil culture and spirituality.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/450980961/photo/big-balancing-rock-at-mahabalipuram.jpg?s=612x612&w=0&k=20&c=OR7cU37619UXbsbZfft7ra0K6ngvDadGbXYVBIYliKU="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Mamallapuram
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Mamallapuram, a UNESCO World Heritage site, was a bustling seaport during the Pallava dynasty. 
                    The Shore Temple and the famous rock-cut sculptures, such as Arjuna's Penance, showcase the artistic and architectural brilliance of the ancient Pallava civilization.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://images.unsplash.com/photo-1610902552120-c577dbde88a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Kanniyakumari
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Kanyakumari, also known as Cape Comorin, is a town at the southernmost tip of the Indian subcontinent, in the state of Tamil Nadu. It holds significance for its geographical location, cultural heritage, and natural beauty
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
             <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media.istockphoto.com/id/1218883812/photo/train-moving-through-the-pamban-bridge.jpg?s=612x612&w=0&k=20&c=G326yngPHtCPYqI32ZwxSkNGUyZlLDZHzgBEAXyet2s="
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Rameshwaram
                    </Typography>
                    <Typography style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Rameswaram, a town on Pamban Island in the state of Tamil Nadu, India, is a place of great religious and historical significance. Here are some features of Rameswaram
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
     
    </ThemeProvider>
  );
}