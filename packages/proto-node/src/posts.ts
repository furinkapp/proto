import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PostServiceClient as _furink_posts_PostServiceClient, PostServiceDefinition as _furink_posts_PostServiceDefinition } from './furink/posts/PostService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  furink: {
    posts: {
      CreatePostRequest: MessageTypeDefinition
      DeletePostRequest: MessageTypeDefinition
      DeletePostRespose: MessageTypeDefinition
      GetPostRequest: MessageTypeDefinition
      GetPostResponse: MessageTypeDefinition
      Post: MessageTypeDefinition
      PostService: SubtypeConstructor<typeof grpc.Client, _furink_posts_PostServiceClient> & { service: _furink_posts_PostServiceDefinition }
      UpdatePostRequest: MessageTypeDefinition
    }
  }
}

