// Original file: proto/session.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { GetKeyValueRequest as _furink_session_GetKeyValueRequest, GetKeyValueRequest__Output as _furink_session_GetKeyValueRequest__Output } from '../../furink/session/GetKeyValueRequest';
import type { GetKeyValueResponse as _furink_session_GetKeyValueResponse, GetKeyValueResponse__Output as _furink_session_GetKeyValueResponse__Output } from '../../furink/session/GetKeyValueResponse';
import type { SetKeyValueRequest as _furink_session_SetKeyValueRequest, SetKeyValueRequest__Output as _furink_session_SetKeyValueRequest__Output } from '../../furink/session/SetKeyValueRequest';

export interface KeyValueStoreClient extends grpc.Client {
  GetKeyValue(argument: _furink_session_GetKeyValueRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  GetKeyValue(argument: _furink_session_GetKeyValueRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  GetKeyValue(argument: _furink_session_GetKeyValueRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  GetKeyValue(argument: _furink_session_GetKeyValueRequest, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  getKeyValue(argument: _furink_session_GetKeyValueRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  getKeyValue(argument: _furink_session_GetKeyValueRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  getKeyValue(argument: _furink_session_GetKeyValueRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  getKeyValue(argument: _furink_session_GetKeyValueRequest, callback: grpc.requestCallback<_furink_session_GetKeyValueResponse__Output>): grpc.ClientUnaryCall;
  
  SetKeyValue(argument: _furink_session_SetKeyValueRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SetKeyValue(argument: _furink_session_SetKeyValueRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SetKeyValue(argument: _furink_session_SetKeyValueRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SetKeyValue(argument: _furink_session_SetKeyValueRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setKeyValue(argument: _furink_session_SetKeyValueRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setKeyValue(argument: _furink_session_SetKeyValueRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setKeyValue(argument: _furink_session_SetKeyValueRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  setKeyValue(argument: _furink_session_SetKeyValueRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface KeyValueStoreHandlers extends grpc.UntypedServiceImplementation {
  GetKeyValue: grpc.handleUnaryCall<_furink_session_GetKeyValueRequest__Output, _furink_session_GetKeyValueResponse>;
  
  SetKeyValue: grpc.handleUnaryCall<_furink_session_SetKeyValueRequest__Output, _google_protobuf_Empty>;
  
}

export interface KeyValueStoreDefinition extends grpc.ServiceDefinition {
  GetKeyValue: MethodDefinition<_furink_session_GetKeyValueRequest, _furink_session_GetKeyValueResponse, _furink_session_GetKeyValueRequest__Output, _furink_session_GetKeyValueResponse__Output>
  SetKeyValue: MethodDefinition<_furink_session_SetKeyValueRequest, _google_protobuf_Empty, _furink_session_SetKeyValueRequest__Output, _google_protobuf_Empty__Output>
}
