import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { KeyValueStoreClient as _furink_session_KeyValueStoreClient, KeyValueStoreDefinition as _furink_session_KeyValueStoreDefinition } from './furink/session/KeyValueStore';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  furink: {
    session: {
      GetKeyValueRequest: MessageTypeDefinition
      GetKeyValueResponse: MessageTypeDefinition
      KeyValueStore: SubtypeConstructor<typeof grpc.Client, _furink_session_KeyValueStoreClient> & { service: _furink_session_KeyValueStoreDefinition }
      SetKeyValueRequest: MessageTypeDefinition
    }
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

