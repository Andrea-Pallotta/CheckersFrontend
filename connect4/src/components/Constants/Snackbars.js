import { useSnackbar } from 'notistack';

const { enqueueSnackbar, closeSnackbar } = useSnackbar();

const success = (message) => {
  return enqueueSnackbar(message, {
    variant: 'success',
  });
};

const error = (message) => {
  return enqueueSnackbar(message, {
    variant: 'error',
  });
};

const warning = (message) => {
  return enqueueSnackbar(message, {
    variant: 'warning',
  });
};

const info = (message) => {
  return enqueueSnackbar(message, {
    variant: 'info',
  });
};

const Snackbars = {
  success,
  error,
  warning,
  info,
};

export default Snackbars;
