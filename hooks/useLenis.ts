import { useContext } from 'react';
import { LenisContext } from '../context/LenisProvider';

const useLenis = () => {
  return useContext(LenisContext);
};

export default useLenis;