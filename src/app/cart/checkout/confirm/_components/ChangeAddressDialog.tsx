'use client'
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"
import Button, {ButtonProps} from '@mui/material/Button';


interface Address {
    name: string;
    address: string;
}
interface Props{
    data: Address;
    setData: {
        setName: (arg0: string) => void;
        setAddress: (arg0: string) => void;
    };
    handleClose : () => void;
    open: boolean;
}
export default function ChangeAddressDialog(props: Props) {
    const [name, setName] = useState(props.data.name)
    const [address, setAddress] = useState(props.data.address)

    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const [addressErrorMessage, setAddressErrorMessage] = useState("")
    const nameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        nameValidate(event.target.value)
    }
    const addressOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
        addressValidate(event.target.value)
    }
    const nameValidate = (str : string) =>{
        if(str === ""){
            setNameErrorMessage("お届け先の名前を入力してください")
            return false
        }
        setNameErrorMessage("")
        return true
    }
    const addressValidate = (str : string) =>{
        if(str === ""){
            setAddressErrorMessage("お届け先の住所を入力してください")
            return false
        }
        setAddressErrorMessage("")
        return true
    }


    const submit = () =>{
        if(!nameValidate(name) || !addressValidate(address)) return;
        props.setData.setName(name)
        props.setData.setAddress(address)
        props.handleClose()
    }

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>お届け先の変更</DialogTitle>
            <DialogContent>
                <Box>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        label="名前"
                        type="name"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={nameOnChange}
                        error={Boolean(nameErrorMessage)}
                        helperText={nameErrorMessage}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        label="住所"
                        type="address"
                        fullWidth
                        variant="standard"
                        value={address}
                        onChange={addressOnChange}
                        error={Boolean(addressErrorMessage)}
                        helperText={addressErrorMessage}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>キャンセル</Button>
                <Button onClick={submit}>変更</Button>
            </DialogActions>
        </Dialog>
    )
}