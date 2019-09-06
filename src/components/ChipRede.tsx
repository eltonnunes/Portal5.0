import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { 
        IconButton,
        Typography,
        Chip,
        Avatar
       } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddIcon from '@material-ui/icons/Add';

interface ChipData {
  key: number;
  label: string;
  select: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      padding: theme.spacing(0.5),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    fab: {
      margin: theme.spacing(0.5),
    },
    extendedIcon: {
      marginRight: theme.spacing(0.5),
    },
    rede: {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: 9,
      color: '#626262'
    },
    typography: {
      fontSize: 9,
    },
    button: {
      backgroundColor: 'white',

    }
  }),
);

export default function ChipRede() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'JAGUAR', select: false},
    { key: 1, label: 'PETROX', select: true },
    { key: 2, label: 'JAGUAR', select: false },
    { key: 3, label: 'GAMA', select: false },
    { key: 4, label: 'SAMAM', select: false },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    if (chipToDelete.select === true) {
      alert('Você não pode remover do filtro da Rede selecionada!');
      return;
    }
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleClickSelected = (chipToSelected: ChipData) => () => {
    setChipData(chips => chips.map(chip => {
        if (chip.select === true && chip.key !== chipToSelected.key) {
          chip = { ...chip, select: false };
        }else if (chip.select === false && chip.key === chipToSelected.key) {
          chip = { ...chip, select: true };
        }
        return chip;
      })
    );
  };

  return (
    <div className={classes.root}>
      {chipData.map((data, index) => {
        return (
          <Chip
            key={data.key}
            clickable={true}
            onClick={handleClickSelected(data)}
            label={ (<span> <strong className={classes.rede}>REDE</strong> {data.label}</span>)}
            onDelete={handleDelete(data)}
            className={classes.chip}
            avatar={ (data.select)?<Avatar><CheckCircleIcon /></Avatar>: undefined }
          />
        );
      })}
        <Typography className={classes.typography}>
          Abrir Outro Grupo
        </Typography>
        <IconButton className={classes.button} aria-label="delete">
          <AddIcon fontSize="small" />
        </IconButton>
    </div>
  );
}