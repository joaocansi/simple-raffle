import { ErrorRequestHandler } from 'express';
import ServerError from './ServerError';

const serverError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ServerError) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
}

export default serverError;