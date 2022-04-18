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

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const currencies = [
    { value: "ANGEL_BROKER", lebel: "Angel broking" },
    { value: "FYRES", lebel: "fyres" },
    { value: "UPSTOX", lebel: "upstox" },
    { value: "zerodha", lebel: "zerodha" }

]

export default function AuthenticateBroker() {

    const [currency, setCurrency] = React.useState('ANGEL_BROKER');
    const [clientId, setClientId] = React.useState();
    const [setClientpassword, setClientPassword] = React.useState();
    const [token, setToken] = React.useState();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Container sx={{ py: 3 }} >
                    <Typography gutterBottom variant="h5" align='left' component="h1" style={{ fontWeight: 600, color: "rgba(0,0,0,0.7)", marginBottom: "30px" }}>
                        Authorize daily for uninterupted trading
                    </Typography>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}  >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1} >
                                <Grid item md={6} xs={12}  >
                                    <TextField
                                        fullWidth
                                        id="outlined-select-currency"
                                        select
                                        label="Select broker"
                                        value={currency}
                                        onChange={handleChange} >

                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.lebel}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        style={{ marginTop: "12px" }}
                                        id="outlined-basic"
                                        label="Client Id"
                                        variant="outlined"
                                        value={clientId}
                                        onChange={(event) => setClientId(event.target.value)}
                                    />
                                    <TextField
                                        type="password"
                                        fullWidth
                                        style={{ marginTop: "12px" }}
                                        id="outlined-basic"
                                        label="password / pass key"
                                        variant="outlined"
                                        value={setClientpassword}
                                        onChange={(event) => setClientPassword(event.target.value)}
                                    />

                                    <Button variant="outlined" color="primary" style={{ marginTop: "15px" }}>
                                        Athonticate
                                    </Button>

                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>

                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', marginTop: "10px" }}  >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <TextField
                                disabled
                                fullWidth 
                                id="outlined-disabled"
                                label="Refresh-token"
                                value={token}
                            />
                             <div style={{float:"right"}}>
                                <Button variant="outlined" color="error" style={{ margin: "15px", marginBottom:"0px" }}>
                                    delete token
                                </Button>

                                <Button variant="outlined" color="primary" style={{ margin: "15px",marginBottom:"0px" }}>
                                    Validate token
                                </Button> 
                             </div>
                        </CardContent>

                    </Card>

                </Container>
            </main>
            <br /><br />
        </ThemeProvider>
    );
}