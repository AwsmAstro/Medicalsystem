/* eslint-disable */
import React from 'react';
import{ Modal, Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import QrScanner from '../../node_modules/qr-scanner/qr-scanner.min.js';
import QrScannerWorkerPath from '!!file-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
QrScanner.WORKER_PATH = QrScannerWorkerPath;

const useStyles = makeStyles((theme) => ({
    root: {},
    importButton: {
      marginRight: theme.spacing(1)
    },
    qrtitle: {
        color: 'white',
        marginBottom: '10px'
    },
    qrdiv: {
        margin: 'auto',
        textAlign: 'center',
        border: 0,
        marginTop: '10px'
    },
  }));

const ScanQR = ({ className, title, readCode, ...rest }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleCode = (_code) => {
        if(readCode){
            readCode(_code);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function scanQRCode(){
        const qrvideo = document.getElementById('qrcode');
    
        QrScanner.hasCamera().then(hasCamera => console.log(hasCamera));
        let qrScanner = new QrScanner(qrvideo, (result) => {
            qrScanner.stop();
            handleClose();
            qrScanner.destroy();
            qrScanner = null;
            handleCode(result);
        });
        qrScanner.start();
    }    

    const body = (
        <div className={classes.qrdiv}>
            <h2 className={classes.qrtitle}>
                Scan Medical Card
            </h2> 
            <video id='qrcode' width="400" height="400"></video>
        </div>
    );

    return(
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Button className={classes.importButton} onClick={handleOpen}>
                {title}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                onRendered={scanQRCode}
            >
                {body}
            </Modal>
        </div>
        
    );
};

ScanQR.PropTypes = {
    title: PropTypes.string,
    readCode: PropTypes.func
}
export default ScanQR;