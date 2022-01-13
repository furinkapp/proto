// Original file: proto/users.proto

import type { Long } from '@grpc/proto-loader';

export interface Profile {
  'id'?: (Buffer | Uint8Array | string);
  'username'?: (string);
  'displayname'?: (string);
  'bio'?: (string);
  'avatar'?: (string);
  'cover'?: (string);
  'location'?: (string);
  'birthday'?: (number | string | Long);
}

export interface Profile__Output {
  'id': (Buffer);
  'username': (string);
  'displayname': (string);
  'bio': (string);
  'avatar': (string);
  'cover': (string);
  'location': (string);
  'birthday': (string);
}
