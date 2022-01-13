// Original file: proto/posts.proto


export interface CreatePostRequest {
  'title'?: (string);
  'body'?: (string);
  'author'?: (Buffer | Uint8Array | string);
}

export interface CreatePostRequest__Output {
  'title': (string);
  'body': (string);
  'author': (Buffer);
}
