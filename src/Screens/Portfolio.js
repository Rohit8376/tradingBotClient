import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (

        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Portfolios() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container >
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Equity" {...a11yProps(0)} />
                            <Tab label="Futures and Options" {...a11yProps(1)} />
                            <Tab label="commodity" {...a11yProps(2)} />
                            <Tab label="currency" {...a11yProps(3)} />
                            <Tab label="Bonds" {...a11yProps(4)} />
                            <Tab label="Mutual funds" {...a11yProps(5)} />
                        </Tabs>
                    </Box>

                    <TabPanel value={value} index={0} >
                        <Grid container spacing={1} >
                            <Grid item md={3} xs={6}>
                                <Typography variant="h6" component="div" style={{   fontFamily: 'montserrat-bold', fontSize: '20px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)', fontWeight: '900' }}>
                                    Current portfolio value
                                </Typography>
                                <Typography variant="h6" component="div" style={{   fontFamily: 'montserrat-bold', fontSize: '20px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)', fontWeight: '900', marginTop: "10px" }}>
                                    ₹ 0.00
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs={6}  spacing={6}>
                                
                            </Grid>

                            <Grid item md={3} xs={6}  spacing={6}>
                                <Typography variant="h6" component="div" style={{  fontFamily: 'montserrat-bold', fontSize: '20px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)', fontWeight: '900' }}>
                                    Current portfolio value
                                </Typography>
                            </Grid>

                        </Grid>

                    </TabPanel>







                    <TabPanel value={value} index={1}  >
                    </TabPanel>

                    <TabPanel value={value} index={2}  >
                    </TabPanel>

                    <TabPanel value={value} index={3}  >
                    </TabPanel>

                    <TabPanel value={value} index={4}  >
                    </TabPanel>

                    <TabPanel value={value} index={5}  >
                    </TabPanel>


                </Box>
            </Container>
        </ThemeProvider>
    );
}










