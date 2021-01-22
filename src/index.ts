import debug from 'debug';
import hexFormat from './formats/hex';

debug.formatters.h = hexFormat;
debug.formatters.H = (v) => '<' + hexFormat(v).toUpperCase() + '>';

export const createLogger = (namespace: string = 'default') => debug(namespace);
export const log = createLogger();
export default createLogger;
