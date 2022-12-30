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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'darkcyan' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
         textColor="inherit"
         indicatorColor="inherit"
         centered>
          <Tab label="Cptec Inpe" {...a11yProps(0)} />
          <Tab label="Precisa Cobranças" {...a11yProps(1)} />
          <Tab label="MBD Soluções" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      Desenvolvi um projeto que tinha como objetivo monitorar as principais bacias hidrográficas do Brasil, utilizava de linguagens de programação e ferramentas especificas (Shell Script, Fortran90 e Grads). </TabPanel>
      <TabPanel value={value} index={1}>
      Suporte ao usuário, administração de redes e infraestrutura, tratativa de dados, manutenção do CRM da empresa, manutenção de computadores, configuração de acesso remoto, Windows Server, administração e monitoramento de rede Voip, configuração de servidores de e-mail (Pop, Imap).      </TabPanel>
      <TabPanel value={value} index={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TabPanel>
    </Box>
  );
}
