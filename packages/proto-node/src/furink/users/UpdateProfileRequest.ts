// Original file: proto/users.proto

import type { Long } from '@grpc/proto-loader';

export interface UpdateProfileRequest {
  'displayname'?: (string);
  'bio'?: (string);
  'avatar'?: (string);
  'cover'?: (string);
  'location'?: (string);
  'birthday'?: (number | string | Long);
}

export interface UpdateProfileRequest__Output {
  'displayname': (string);
  'bio': (string);
  'avatar': (string);
  'cover': (string);
  'location': (string);
  'birthday': (string);
}
