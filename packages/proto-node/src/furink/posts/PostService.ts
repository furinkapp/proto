// Original file: proto/posts.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreatePostRequest as _furink_posts_CreatePostRequest, CreatePostRequest__Output as _furink_posts_CreatePostRequest__Output } from '../../furink/posts/CreatePostRequest';
import type { DeletePostRequest as _furink_posts_DeletePostRequest, DeletePostRequest__Output as _furink_posts_DeletePostRequest__Output } from '../../furink/posts/DeletePostRequest';
import type { DeletePostRespose as _furink_posts_DeletePostRespose, DeletePostRespose__Output as _furink_posts_DeletePostRespose__Output } from '../../furink/posts/DeletePostRespose';
import type { GetPostRequest as _furink_posts_GetPostRequest, GetPostRequest__Output as _furink_posts_GetPostRequest__Output } from '../../furink/posts/GetPostRequest';
import type { GetPostResponse as _furink_posts_GetPostResponse, GetPostResponse__Output as _furink_posts_GetPostResponse__Output } from '../../furink/posts/GetPostResponse';
import type { Post as _furink_posts_Post, Post__Output as _furink_posts_Post__Output } from '../../furink/posts/Post';
import type { UpdatePostRequest as _furink_posts_UpdatePostRequest, UpdatePostRequest__Output as _furink_posts_UpdatePostRequest__Output } from '../../furink/posts/UpdatePostRequest';

export interface PostServiceClient extends grpc.Client {
  CreatePost(argument: _furink_posts_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _furink_posts_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _furink_posts_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _furink_posts_CreatePostRequest, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  createPost(argument: _furink_posts_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  createPost(argument: _furink_posts_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  createPost(argument: _furink_posts_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  createPost(argument: _furink_posts_CreatePostRequest, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  
  DeletePost(argument: _furink_posts_DeletePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _furink_posts_DeletePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _furink_posts_DeletePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _furink_posts_DeletePostRequest, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _furink_posts_DeletePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _furink_posts_DeletePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _furink_posts_DeletePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _furink_posts_DeletePostRequest, callback: grpc.requestCallback<_furink_posts_DeletePostRespose__Output>): grpc.ClientUnaryCall;
  
  GetPost(argument: _furink_posts_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _furink_posts_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _furink_posts_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _furink_posts_GetPostRequest, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _furink_posts_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _furink_posts_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _furink_posts_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _furink_posts_GetPostRequest, callback: grpc.requestCallback<_furink_posts_GetPostResponse__Output>): grpc.ClientUnaryCall;
  
  UpdatePost(argument: _furink_posts_UpdatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _furink_posts_UpdatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _furink_posts_UpdatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _furink_posts_UpdatePostRequest, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _furink_posts_UpdatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _furink_posts_UpdatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _furink_posts_UpdatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _furink_posts_UpdatePostRequest, callback: grpc.requestCallback<_furink_posts_Post__Output>): grpc.ClientUnaryCall;
  
}

export interface PostServiceHandlers extends grpc.UntypedServiceImplementation {
  CreatePost: grpc.handleUnaryCall<_furink_posts_CreatePostRequest__Output, _furink_posts_Post>;
  
  DeletePost: grpc.handleUnaryCall<_furink_posts_DeletePostRequest__Output, _furink_posts_DeletePostRespose>;
  
  GetPost: grpc.handleUnaryCall<_furink_posts_GetPostRequest__Output, _furink_posts_GetPostResponse>;
  
  UpdatePost: grpc.handleUnaryCall<_furink_posts_UpdatePostRequest__Output, _furink_posts_Post>;
  
}

export interface PostServiceDefinition extends grpc.ServiceDefinition {
  CreatePost: MethodDefinition<_furink_posts_CreatePostRequest, _furink_posts_Post, _furink_posts_CreatePostRequest__Output, _furink_posts_Post__Output>
  DeletePost: MethodDefinition<_furink_posts_DeletePostRequest, _furink_posts_DeletePostRespose, _furink_posts_DeletePostRequest__Output, _furink_posts_DeletePostRespose__Output>
  GetPost: MethodDefinition<_furink_posts_GetPostRequest, _furink_posts_GetPostResponse, _furink_posts_GetPostRequest__Output, _furink_posts_GetPostResponse__Output>
  UpdatePost: MethodDefinition<_furink_posts_UpdatePostRequest, _furink_posts_Post, _furink_posts_UpdatePostRequest__Output, _furink_posts_Post__Output>
}
