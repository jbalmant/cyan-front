import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function UploadFile(props) {
  const { showModal, onClose } = props;

  return (
    <div>
      <Dialog open={showModal} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enviar Arquivo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Entre com o endereço do arquivo para upload, esse processo pode demorar um pouco.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Endereço do arquivo"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}