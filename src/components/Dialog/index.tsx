import { Slide, useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import { useTheme } from '@mui/system';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export type DialogState = { isLoading: boolean, setSubmitLoad: (newState: boolean) => void }
type AlertDialogProps = {
    children: React.ReactElement | React.ReactElement[],
    open: boolean,
    setClose?: () => void,
    title?: string,
}
export default function AlertDialog(props: AlertDialogProps) {
    const { open, setClose, title, children } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                maxWidth={"sm"}
                fullWidth={true}
                sx={{
                    margin: theme => theme.spacing(2),
                }}
                open={open}
                onClose={setClose}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.title ?? "Dialog"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}