// Original file: proto/posts.proto

import type { Long } from '@grpc/proto-loader';

export interface Post {
  'id'?: (Buffer | Uint8Array | string);
  'title'?: (string);
  'body'?: (string);
  'author'?: (Buffer | Uint8Array | string);
  'createdAt'?: (number | string | Long);
  'updatedAt'?: (number | string | Long);
  'likes'?: (number);
  'reposts'?: (number);
  'comments'?: (number);
}

export interface Post__Output {
  'id': (Buffer);
  'title': (string);
  'body': (string);
  'author': (Buffer);
  'createdAt': (string);
  'updatedAt': (string);
  'likes': (number);
  'reposts': (number);
  'comments': (number);
}
