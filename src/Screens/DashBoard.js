import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';




const columns = [
    { id: 'index', label: 'Index' },
    { id: 'cmp', label: 'CMP', },
    { id: 'change', label: 'Population' },
];

const columns2 = [
    { id: 'name', label: 'name' },
    { id: 'code', label: 'code', },
    { id: 'population', label: 'Population' },
    { id: 'size', label: 'size' },
    { id: 'density', label: 'density', }, 
];

function createData2(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows2 = [
    createData2('India', 'IN', 1324171354, 3287263),
    createData2('China', 'CN', 1403500365, 9596961),
    createData2('Italy', 'IT', 60483973, 301340),
    createData2('United States', 'US', 327167434, 9833520),
    createData2('Canada', 'CA', 37602103, 9984670),
    createData2('Australia', 'AU', 25475400, 7692024),
    createData2('Germany', 'DE', 83019200, 357578),
    createData2('Ireland', 'IE', 4857000, 70273),
    createData2('Mexico', 'MX', 126577691, 1972550),
    createData2('Japan', 'JP', 126317000, 377973),
    createData2('France', 'FR', 67022000, 640679),
    createData2('United Kingdom', 'GB', 67545757, 242495),
    createData2('Russia', 'RU', 146793744, 17098246),
    createData2('Nigeria', 'NG', 200962417, 923768),
    createData2('Brazil', 'BR', 210147125, 8515767),
];




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


function a11yProps2(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function createData(index, cmp, change) {
    return { index, cmp, change };
}

const rows = [
    createData("Nifty 50", "17,530.30", "-144.65(-0.82%)"),
    createData("Nifty IT", "34,379.50", "-516.40(-1.48%)"),
    createData("Nifty Bank", "37,747.40", "133.60(0.36%)"),
    createData("Nifty 100", "17,877.55", "-154.85(-0.86%)"),
    createData("Nifty FMCG", "37,931.40", "-304.85(-0.80%)"),
    createData("BSE Sensex", "58,576.37", "-388.20(-0.66%)"),
    createData("BSE IT Sector", "34,638.55", "-539.32(-1.53%)")
]



const DashBoard = () => {



    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        
        setValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        
        setValue2(newValue);
    };



    return (
        <Container style={{ marginTop: "10px" }}>
            <Box sx={{ flexGrow: 1 }} margin={"none"}>

                <Grid container spacing={1} >

                    <Grid item md={3} xs={6}>
                        <Item>
                            <Typography align="left" variant="h6" component="div" style={{ color: "black", marginLeft: "0px", paddingLeft: '0px;' }}>
                                NIFTY
                            </Typography>
                            <Typography align="left" variant="p" component="div" >
                                17,674.95 <span style={{ color: "red" }}>-109.40(-0.62%)</span>
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item md={3} xs={6}  >
                        <Item>
                            <Typography align="left" variant="h6" component="div" style={{ color: "black", marginLeft: "0px", paddingLeft: '0px;' }}>
                                BSE Sensex
                            </Typography>
                            <Typography align="left" variant="p" component="div" >
                                17,674.95 <span style={{ color: "green" }}>-109.40(-0.62%)</span>
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item md={3} xs={6}  >
                        <Item>
                            <Typography align="left" variant="h6" component="div" style={{ color: "black", marginLeft: "0px", paddingLeft: '0px;' }}>
                                BANKNIFTY
                            </Typography>
                            <Typography align="left" variant="p" component="div" >
                                17,674.95 <span style={{ color: "red" }}>-109.40(-0.62%)</span>
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item md={3} xs={6}  >
                        <Item>
                            <Typography align="left" variant="h6" component="div" style={{ color: "black", marginLeft: "0px", paddingLeft: '0px;' }}>
                                INDIAVIX
                            </Typography>
                            <Typography align="left" variant="p" component="div" >
                                18.27 <span style={{ color: "green" }}>-0.58(3.28%)</span>
                            </Typography>
                        </Item>
                    </Grid>

                </Grid>

                <Grid container spacing={1} style={{ marginTop: "10px" }}>

                    <Grid item md={4} xs={12}  >
                        <Item>
                            <Typography align='left' variant="h6" component="div" style={{ fontFamily: 'montserrat-bold', fontSize: '20px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)', fontWeight: '900', paddingLeft: "10px" }}>
                                Indices
                            </Typography>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="India" {...a11yProps(0)} />
                                    <Tab label="Global" {...a11yProps(1)} />
                                </Tabs>
                                <TabPanel style={{ padding: "0px", margin: "0px" }} value={value} index={0} >

                                    <TableContainer sx={{ maxHeight: 350 }} style={{ padding: "0px", margin: "0px" }}>
                                        <Table stickyHeader aria-label="simple table" style={{ overflowY: 'hidden', borderBottom: "0px" }}>
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell key={column.id} style={{}} >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.index}>
                                                            <TableCell key={row.index}  >
                                                                {row.index}
                                                            </TableCell>
                                                            <TableCell   >
                                                                {row.cmp}
                                                            </TableCell>
                                                            <TableCell    >
                                                                {row.change}
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>




                                </TabPanel>
                                <TabPanel value={value} index={1}  >
                                    one
                                </TabPanel>
                            </Box>
                        </Item>
                    </Grid>



                    <Grid item md={8} xs={12}  >
                        <Item>
                            <Typography variant="h6" align="left" component="div" style={{ fontFamily: 'montserrat-bold', fontSize: '20px', lineHeight: '20px', color: 'rgba(0, 0, 0, 0.6)', fontWeight: '900', paddingLeft: "10px" }}>
                                Equity Summary
                            </Typography>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value2} onChange={handleChange2} aria-label="basic tabs example">

                                <Tab label="Top Gainers" {...a11yProps2(2)} />
                                <Tab label="Top losers" {...a11yProps2(3)} />
                                <Tab label="Most active by value" {...a11yProps2(4)} />
                                <Tab label="Most Active by Volume" {...a11yProps2(5)} />
                            </Tabs>
                            </Box>
                            <TabPanel value={value2} index={0}  >
                            <TableContainer sx={{ maxHeight: 350 }} style={{ padding: "0px", margin: "0px" }}>
                                        <Table stickyHeader aria-label="simple table" style={{ overflowY: 'hidden', borderBottom: "0px" }}>
                                            <TableHead>
                                                <TableRow>
                                                    {columns2.map((column) => (
                                                        <TableCell key={column.id} style={{}} >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows2.map((row,index) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                           
                                                            <TableCell   >
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell   >
                                                                {row.code}
                                                            </TableCell>
                                                            <TableCell    >
                                                                {row.population}
                                                            </TableCell>
                                                            <TableCell    >
                                                                {row.size}
                                                            </TableCell>
                                                            <TableCell    >
                                                                {row.density}
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                            </TabPanel>

                            <TabPanel value={value2} index={1}  >
                                three
                            </TabPanel>

                            <TabPanel value={value2} index={2}  >
                                four
                            </TabPanel>

                            <TabPanel value={value2} index={3}  >
                                five
                            </TabPanel>

                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
export default DashBoard;















