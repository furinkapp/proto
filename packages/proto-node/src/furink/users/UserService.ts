// Original file: proto/users.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _furink_users_CreateUserRequest, CreateUserRequest__Output as _furink_users_CreateUserRequest__Output } from '../../furink/users/CreateUserRequest';
import type { DeleteUserRequest as _furink_users_DeleteUserRequest, DeleteUserRequest__Output as _furink_users_DeleteUserRequest__Output } from '../../furink/users/DeleteUserRequest';
import type { DeleteUserResponse as _furink_users_DeleteUserResponse, DeleteUserResponse__Output as _furink_users_DeleteUserResponse__Output } from '../../furink/users/DeleteUserResponse';
import type { GetUserRequest as _furink_users_GetUserRequest, GetUserRequest__Output as _furink_users_GetUserRequest__Output } from '../../furink/users/GetUserRequest';
import type { GetUserResponse as _furink_users_GetUserResponse, GetUserResponse__Output as _furink_users_GetUserResponse__Output } from '../../furink/users/GetUserResponse';
import type { UpdateUserRequest as _furink_users_UpdateUserRequest, UpdateUserRequest__Output as _furink_users_UpdateUserRequest__Output } from '../../furink/users/UpdateUserRequest';
import type { User as _furink_users_User, User__Output as _furink_users_User__Output } from '../../furink/users/User';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _furink_users_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _furink_users_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _furink_users_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _furink_users_CreateUserRequest, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _furink_users_CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _furink_users_CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _furink_users_CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  createUser(argument: _furink_users_CreateUserRequest, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _furink_users_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _furink_users_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _furink_users_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _furink_users_DeleteUserRequest, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _furink_users_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _furink_users_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _furink_users_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _furink_users_DeleteUserRequest, callback: grpc.requestCallback<_furink_users_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _furink_users_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _furink_users_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _furink_users_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _furink_users_GetUserRequest, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _furink_users_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _furink_users_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _furink_users_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _furink_users_GetUserRequest, callback: grpc.requestCallback<_furink_users_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _furink_users_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _furink_users_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _furink_users_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _furink_users_UpdateUserRequest, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _furink_users_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _furink_users_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _furink_users_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _furink_users_UpdateUserRequest, callback: grpc.requestCallback<_furink_users_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_furink_users_CreateUserRequest__Output, _furink_users_User>;
  
  DeleteUser: grpc.handleUnaryCall<_furink_users_DeleteUserRequest__Output, _furink_users_DeleteUserResponse>;
  
  GetUser: grpc.handleUnaryCall<_furink_users_GetUserRequest__Output, _furink_users_GetUserResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_furink_users_UpdateUserRequest__Output, _furink_users_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_furink_users_CreateUserRequest, _furink_users_User, _furink_users_CreateUserRequest__Output, _furink_users_User__Output>
  DeleteUser: MethodDefinition<_furink_users_DeleteUserRequest, _furink_users_DeleteUserResponse, _furink_users_DeleteUserRequest__Output, _furink_users_DeleteUserResponse__Output>
  GetUser: MethodDefinition<_furink_users_GetUserRequest, _furink_users_GetUserResponse, _furink_users_GetUserRequest__Output, _furink_users_GetUserResponse__Output>
  UpdateUser: MethodDefinition<_furink_users_UpdateUserRequest, _furink_users_User, _furink_users_UpdateUserRequest__Output, _furink_users_User__Output>
}
