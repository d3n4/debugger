function hex(v: string): string;
function hex(v: number): string;
function hex(v: boolean): string;
function hex(v: Buffer): string;
function hex(v: number[]): string;
function hex(v: any): string {
  if (typeof v === 'string' || Array.isArray(v)) {
    return hex(Buffer.from(v));
  }

  if (typeof v === 'boolean') {
    return hex(+v);
  }

  if (typeof v === 'number') {
    return v.toString(16);
  }

  if (Buffer.isBuffer(v)) {
    return (v as Buffer).toString('hex').match(/.{2}/g).join(' ');
  }

  return '??';
}

export default hex;
