import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    const [state, setState] = React.useState(false)
    const onCloseButton = () => {
        setState(!state)
    }
    return (
        <DialogTitle sx={ { m: 0, p: 2 } } { ...other }>
            { children }
            { onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={ onClose }
                    sx={ {
                        position: 'absolute',
                        right: -200,
                        top: -2,
                        color: (theme) => theme.palette.grey[ 500 ],
                    } }
                >
                    <CloseIcon onClick={ onCloseButton }/>
                </IconButton>
            ) : null }
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({children}) {
    const [ open, setOpen ] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <div>
            {/* <Button variant="outlined" onClick={ handleClickOpen }>
                Open dialog
            </Button> */}
            <BootstrapDialog
                onClose={ handleClose }
                aria-labelledby="customized-dialog-title"
                open={ open }
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={ handleClose }>
                    Come on in
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
               
            </BootstrapDialog>
        </div>
    );
}
