import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{
        width: props.width,
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderRadius: '20px',
         '&:hover': {
          backgroundColor: props.backgroundColor,
          filter: 'brightness(1.8)',
         }
      }}>{props.value}</Button>
    </Stack>
  );
}