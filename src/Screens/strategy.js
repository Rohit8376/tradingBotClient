import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = ["EagleTrading", "Intrmax", "dynamic trade", "randomTrade", "super trade", "random trade"];

const theme = createTheme();

export default function Strategy() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>


                <Container sx={{ py: 2 }} >

                    <Typography gutterBottom variant="h4" align='left' component="h1" style={{ fontWeight: 600, color: "rgba(0,0,0,0.7)", marginBottom: "30px" }}>
                        Welcome back, Rohit pandey
                    </Typography>
 
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={3}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}  > 
                                    <CardContent sx={{ flexGrow: 1 }}> 
                                        <Typography gutterBottom align='center' variant="h5" component="h2" style={{ fontWeight: 600, color: "rgba(0,0,0,0.7)" }} >
                                            {card} 
                                        </Typography> 
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <CardMedia
                                                component="img"
                                                image="https://source.unsplash.com/random"
                                                alt="random"
                                                sx={{ py: 2 }}
                                                style={{ width: '100px', height: "100px", borderRadius: "10px" }}
                                            />
                                        </div>  
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                       </CardContent>
                                       <CardActions sx={{ py: 1 }} style={{ display: "flex", justifyContent: "space-around" }}>
                                        <Button variant="contained" color="primary">
                                            Deploy
                                        </Button>
                                        <Button variant="outlined" color="error">
                                            Delete
                                        </Button>
                                      </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <br/><br/>          
            <br/><br/>          
            <br/><br/>         
        </ThemeProvider>
    );
}