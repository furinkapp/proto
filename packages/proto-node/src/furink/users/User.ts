// Original file: proto/users.proto


export interface User {
  'id'?: (Buffer | Uint8Array | string);
  'username'?: (string);
  'email'?: (string);
}

export interface User__Output {
  'id': (Buffer);
  'username': (string);
  'email': (string);
}
