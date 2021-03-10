import React from 'react';

import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { appointDoctor } from 'src/solFunctions/solFunctions';
import Toolbar from './Toolbar';
import SimpleTabs from './form';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [sign, setSign] = React.useState('');
  const [account, setAccount] = React.useState('');

  const readSignQR = (data) => {
    console.log(`indexSign: ${data}`);
    setSign(data);
  };

  const readAccountQR = (data) => {
    console.log(`indexAcc: ${data}`);
    setAccount(data);
  };

  const appointDrQR = (data) => {
    console.log(`Dr: ${data}`);
    appointDoctor(data);
  };

  return (
    <Page
      className={classes.root}
      title="Create Accounts"
    >
      <Container maxWidth={false}>
        <Toolbar readSignQR={readSignQR} readAccountQR={readAccountQR} appointDrQR={appointDrQR} />
        <SimpleTabs sign={sign} account={account} />
      </Container>
    </Page>
  );
};

export default ProductList;
