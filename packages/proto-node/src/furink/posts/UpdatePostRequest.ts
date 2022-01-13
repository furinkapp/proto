// Original file: proto/posts.proto


export interface UpdatePostRequest {
  'id'?: (Buffer | Uint8Array | string);
  'title'?: (string);
  'body'?: (string);
}

export interface UpdatePostRequest__Output {
  'id': (Buffer);
  'title': (string);
  'body': (string);
}
