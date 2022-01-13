// Original file: proto/users.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetProfileRequest as _furink_users_GetProfileRequest, GetProfileRequest__Output as _furink_users_GetProfileRequest__Output } from '../../furink/users/GetProfileRequest';
import type { GetProfileResponse as _furink_users_GetProfileResponse, GetProfileResponse__Output as _furink_users_GetProfileResponse__Output } from '../../furink/users/GetProfileResponse';
import type { Profile as _furink_users_Profile, Profile__Output as _furink_users_Profile__Output } from '../../furink/users/Profile';
import type { UpdateProfileRequest as _furink_users_UpdateProfileRequest, UpdateProfileRequest__Output as _furink_users_UpdateProfileRequest__Output } from '../../furink/users/UpdateProfileRequest';

export interface ProfileServiceClient extends grpc.Client {
  GetProfile(argument: _furink_users_GetProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  GetProfile(argument: _furink_users_GetProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  GetProfile(argument: _furink_users_GetProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  GetProfile(argument: _furink_users_GetProfileRequest, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  getProfile(argument: _furink_users_GetProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  getProfile(argument: _furink_users_GetProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  getProfile(argument: _furink_users_GetProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  getProfile(argument: _furink_users_GetProfileRequest, callback: grpc.requestCallback<_furink_users_GetProfileResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateProfile(argument: _furink_users_UpdateProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  UpdateProfile(argument: _furink_users_UpdateProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  UpdateProfile(argument: _furink_users_UpdateProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  UpdateProfile(argument: _furink_users_UpdateProfileRequest, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _furink_users_UpdateProfileRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _furink_users_UpdateProfileRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _furink_users_UpdateProfileRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  updateProfile(argument: _furink_users_UpdateProfileRequest, callback: grpc.requestCallback<_furink_users_Profile__Output>): grpc.ClientUnaryCall;
  
}

export interface ProfileServiceHandlers extends grpc.UntypedServiceImplementation {
  GetProfile: grpc.handleUnaryCall<_furink_users_GetProfileRequest__Output, _furink_users_GetProfileResponse>;
  
  UpdateProfile: grpc.handleUnaryCall<_furink_users_UpdateProfileRequest__Output, _furink_users_Profile>;
  
}

export interface ProfileServiceDefinition extends grpc.ServiceDefinition {
  GetProfile: MethodDefinition<_furink_users_GetProfileRequest, _furink_users_GetProfileResponse, _furink_users_GetProfileRequest__Output, _furink_users_GetProfileResponse__Output>
  UpdateProfile: MethodDefinition<_furink_users_UpdateProfileRequest, _furink_users_Profile, _furink_users_UpdateProfileRequest__Output, _furink_users_Profile__Output>
}
