import React, { useState, useEffect } from "react";

import RoomIcon from '@material-ui/icons/Room'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

export default function FileItem(props) {
    const { file, handleClick } = props;

    const status = {
        '-2': 'Erro ao importar arquivo.',
        '-1': 'Erro ao fazer o download do arquivo',
        '1': 'Processando',
        '2': 'Fazendo Download',
        '3': 'Aguardando importação',
        '4': 'Importando',
        '5': 'Concluído',
    }

    const getTooltip = () => {
        return (
            <React.Fragment>
                <Typography variant="button" display="block" color="inherit">{file.filename}</Typography>
                <Typography variant="overline" display="block" color="inherit">{status[file.status]}</Typography>
                <Typography variant="caption" display="block" color="inherit">{file.path}</Typography>
            </React.Fragment>
        )
    }

    return (
        <div>
            <Tooltip title={getTooltip()}>
                <ListItem button onClick={() => handleClick(file.id)} key={file.id}>
                    <ListItemIcon><RoomIcon /></ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography type="body2">{file.filename}</Typography>}
                    />
                </ListItem>
            </Tooltip>
        </div>
    )
}