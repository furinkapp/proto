import * as grpc from "@grpc/grpc-js";
import * as grpcLoader from "@grpc/proto-loader";

import { resolve } from "path";
// If this is erroring, run `yarn prepare`.
import { ProtoGrpcType } from "./furink";

const packageDefinition = grpcLoader.loadSync(
	resolve(__dirname, "../proto/furink.proto"),
	{
		keepCase: true,
		longs: String,
		enums: String,
		defaults: true,
		oneofs: true,
	}
);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

export default protoDescriptor as unknown as ProtoGrpcType;
