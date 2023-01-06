import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#273238',color:"#4bbd5c",  display: 'flex', height: 324, padding:'2%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        textColor='#fff'
        TabIndicatorProps={{style: {background:'#4bbd5c'}}}        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', color:"#a6c" }}
      >
        <Tab sx={{color:"#fff", padding:'15%'}} label="Cptec Inpe" {...a11yProps(0)} />
        <Tab sx={{color:"#fff", padding:'15%'}} label="Precisa Cobranças" {...a11yProps(1)} />
        <Tab sx={{color:"#fff", padding:'15%'}}label="MBD Soluções" {...a11yProps(2)} />

       
      </Tabs>
      <TabPanel sx={{color:"#4bbd5c"}} value={value} index={0}>
      <div>
       <h1>Cptec Inpe</h1>
       <p>2018 - 2020</p>
       <p></p>
       </div>
      </TabPanel>
      <TabPanel sx={{color:"#4bbd5c"}} value={value} index={1}>
      <div>
       <h1>Precisa Cobranças</h1>
       <p>2020 - 2021</p>
       <p></p>
       </div>
      </TabPanel>
      <TabPanel sx={{color:"#4bbd5c"}} value={value} index={2}>
      <div>
       <h1>MBD Soluções</h1>
       <p>2021 - Atual</p>
       <p></p>
       </div>
      </TabPanel>
   
    </Box>
  );
}