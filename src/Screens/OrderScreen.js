import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

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

function createData(Action, SymbolName, ProductType, Ordertype, AvgPrice, Quantity, Status) {
  return { Action, SymbolName, ProductType, Ordertype, AvgPrice, Quantity, Status };
}

const rows = [
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('BUY', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT', 10, 'Rejected'),
  createData('SELL', 'SBINNSE', 'INTRADAY', 'MARKET', 'MKT',10, 'Rejected'),
];

export default function Orders() {
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
              <Tab label="OrderBook" {...a11yProps(0)} />
              <Tab label="Positions" {...a11yProps(1)} />
              <Tab label="GTT OrderBook" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} className="card">

            <Typography variant="h5" style={{ marginBottom: "5px" }} component="div">
              Pending Order
            </Typography>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="right"> Symbol Name</TableCell>
                  <TableCell align="right">Product Type</TableCell>
                  <TableCell align="right">Order type</TableCell>
                  <TableCell align="right">Avg. Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name} >
                    <TableCell component="th" scope="row">

                      <Typography variant="subtitle1" style={{ color: row.Action === "SELL" ? 'red' : "green" }} component="div">
                        {row.Action}
                      </Typography>

                    </TableCell>
                    <TableCell align="right" component="th" scope="row">{row.SymbolName}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.ProductType}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Ordertype}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.AvgPrice}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Quantity}</TableCell>
                    <TableCell align="center" component="th" scope="row"><Button variant="outlined" color="error" className="hideShowOnhover" size="small">CANCEl</Button></TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Status}</TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>


            <Typography variant="h5" style={{ marginBottom: "5px", marginTop: "30px" }} component="div">
              Executed order
            </Typography>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="right"> Symbol Name</TableCell>
                  <TableCell align="right">Product Type</TableCell>
                  <TableCell align="right">Order type</TableCell>
                  <TableCell align="right">Avg. Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name} >
                    <TableCell component="th" scope="row">
                      <Typography variant="subtitle1" style={{ color: row.Action === "SELL" ? 'red' : "green" }} component="div">
                        {row.Action}
                      </Typography>

                    </TableCell>
                    <TableCell align="right" component="th" scope="row">{row.SymbolName}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.ProductType}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Ordertype}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.AvgPrice}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Quantity}</TableCell>
                    <TableCell align="center" component="th" scope="row"><Button variant="outlined" color="primary" size="small">REORDER</Button></TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Status}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>


          </TabPanel>
          <TabPanel value={value} index={1} className="card">

            <Typography variant="h5" style={{ marginBottom: "5px" }} component="div">
              Open positions
            </Typography>

            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="right"> Symbol Name</TableCell>
                  <TableCell align="right">Product Type</TableCell>
                  <TableCell align="right">Order type</TableCell>
                  <TableCell align="right">Avg. Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name} >
                    <TableCell component="th" scope="row">

                      <Typography variant="subtitle1" style={{ color: row.Action === "SELL" ? 'red' : "green" }} component="div">
                        {row.Action}
                      </Typography>

                    </TableCell>
                    <TableCell align="right" component="th" scope="row">{row.SymbolName}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.ProductType}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Ordertype}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.AvgPrice}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Quantity}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Status}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>


            <Typography variant="h5" style={{ marginBottom: "5px", marginTop: "30px" }} component="div">
              Close positions
            </Typography>

            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="right"> Symbol Name</TableCell>
                  <TableCell align="right">Product Type</TableCell>
                  <TableCell align="right">Order type</TableCell>
                  <TableCell align="right">Avg. Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name} >
                    <TableCell component="th" scope="row">
                      <Typography variant="subtitle1" style={{ color: row.Action === "SELL" ? 'red' : "green" }} component="div">
                        {row.Action}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" component="th" scope="row">{row.SymbolName}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.ProductType}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Ordertype}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.AvgPrice}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Quantity}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>


          </TabPanel>
          <TabPanel value={value} index={2} className="card">

            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="right"> Symbol Name</TableCell>
                  <TableCell align="right">Product Type</TableCell>
                  <TableCell align="right">Order type</TableCell>
                  <TableCell align="right">Avg. Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name} >
                    <TableCell component="th" scope="row">

                      <Typography variant="subtitle1" style={{ color: row.Action === "SELL" ? 'red' : "green" }} component="div">
                        {row.Action}
                      </Typography>

                    </TableCell>
                    <TableCell align="right" component="th" scope="row">{row.SymbolName}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.ProductType}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Ordertype}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.AvgPrice}</TableCell>
                    <TableCell align="right" component="th" scope="row">{row.Quantity}</TableCell>

                   <TableCell align="center" component="th" scope="row"><Button variant="outlined" color="primary" className="hideShowOnhover" style={{marginRight:'2px'}}size="small">MODIFY</Button><Button variant="outlined" color="error" className="hideShowOnhover" size="small">CANCEl</Button></TableCell>
                    
                    
                    
                    <TableCell align="right" component="th" scope="row">{row.Status}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </TabPanel>
        </Box>
      </Container>
    </ThemeProvider>
  );
}










