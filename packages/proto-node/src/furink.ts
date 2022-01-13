import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PostServiceClient as _furink_posts_PostServiceClient, PostServiceDefinition as _furink_posts_PostServiceDefinition } from './furink/posts/PostService';
import type { KeyValueStoreClient as _furink_session_KeyValueStoreClient, KeyValueStoreDefinition as _furink_session_KeyValueStoreDefinition } from './furink/session/KeyValueStore';
import type { ProfileServiceClient as _furink_users_ProfileServiceClient, ProfileServiceDefinition as _furink_users_ProfileServiceDefinition } from './furink/users/ProfileService';
import type { UserServiceClient as _furink_users_UserServiceClient, UserServiceDefinition as _furink_users_UserServiceDefinition } from './furink/users/UserService';

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
    session: {
      GetKeyValueRequest: MessageTypeDefinition
      GetKeyValueResponse: MessageTypeDefinition
      KeyValueStore: SubtypeConstructor<typeof grpc.Client, _furink_session_KeyValueStoreClient> & { service: _furink_session_KeyValueStoreDefinition }
      SetKeyValueRequest: MessageTypeDefinition
    }
    users: {
      CreateUserRequest: MessageTypeDefinition
      DeleteUserRequest: MessageTypeDefinition
      DeleteUserResponse: MessageTypeDefinition
      GetProfileRequest: MessageTypeDefinition
      GetProfileResponse: MessageTypeDefinition
      GetUserRequest: MessageTypeDefinition
      GetUserResponse: MessageTypeDefinition
      Profile: MessageTypeDefinition
      ProfileService: SubtypeConstructor<typeof grpc.Client, _furink_users_ProfileServiceClient> & { service: _furink_users_ProfileServiceDefinition }
      UpdateProfileRequest: MessageTypeDefinition
      UpdateUserRequest: MessageTypeDefinition
      User: MessageTypeDefinition
      UserService: SubtypeConstructor<typeof grpc.Client, _furink_users_UserServiceClient> & { service: _furink_users_UserServiceDefinition }
    }
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

