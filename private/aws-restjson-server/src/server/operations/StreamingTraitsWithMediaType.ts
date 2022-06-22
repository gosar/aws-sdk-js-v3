// smithy-typescript generated code
import { NodeHttpHandler, streamCollector } from "@aws-sdk/node-http-handler";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-node";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import {
  httpbinding,
  InternalFailureException as __InternalFailureException,
  isFrameworkException as __isFrameworkException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";

import { StreamingTraitsWithMediaTypeInputOutput } from "../../models/models_0";
import {
  deserializeStreamingTraitsWithMediaTypeRequest,
  serializeFrameworkException,
  serializeStreamingTraitsWithMediaTypeResponse,
} from "../../protocols/Aws_restJson1";
import { RestJsonService } from "../RestJsonService";

export type StreamingTraitsWithMediaType<Context> = __Operation<
  StreamingTraitsWithMediaTypeServerInput,
  StreamingTraitsWithMediaTypeServerOutput,
  Context
>;

type StreamingTraitsWithMediaTypeServerInputType = Omit<StreamingTraitsWithMediaTypeInputOutput, "blob"> & {
  /**
   * For *`StreamingTraitsWithMediaTypeInputOutput["blob"]`*, see {@link StreamingTraitsWithMediaTypeInputOutput.blob}.
   */
  blob?: StreamingTraitsWithMediaTypeInputOutput["blob"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `StreamingTraitsWithMediaTypeInputOutput` interface. There are more parameters than `blob` defined in {@link StreamingTraitsWithMediaTypeInputOutput}
 */
export interface StreamingTraitsWithMediaTypeServerInput extends StreamingTraitsWithMediaTypeServerInputType {}
export namespace StreamingTraitsWithMediaTypeServerInput {
  /**
   * @internal
   */
  export const validate: (
    obj: Parameters<typeof StreamingTraitsWithMediaTypeInputOutput.validate>[0]
  ) => __ValidationFailure[] = StreamingTraitsWithMediaTypeInputOutput.validate;
}
export interface StreamingTraitsWithMediaTypeServerOutput extends StreamingTraitsWithMediaTypeInputOutput {}

export type StreamingTraitsWithMediaTypeErrors = never;

export class StreamingTraitsWithMediaTypeSerializer
  implements
    __OperationSerializer<RestJsonService<any>, "StreamingTraitsWithMediaType", StreamingTraitsWithMediaTypeErrors>
{
  serialize = serializeStreamingTraitsWithMediaTypeResponse;
  deserialize = deserializeStreamingTraitsWithMediaTypeRequest;

  isOperationError(error: any): error is StreamingTraitsWithMediaTypeErrors {
    return false;
  }

  serializeError(error: StreamingTraitsWithMediaTypeErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    throw error;
  }
}

export const getStreamingTraitsWithMediaTypeHandler = <Context>(
  operation: __Operation<StreamingTraitsWithMediaTypeServerInput, StreamingTraitsWithMediaTypeServerOutput, Context>,
  customizer: __ValidationCustomizer<"StreamingTraitsWithMediaType">
): __ServiceHandler<Context, __HttpRequest, __HttpResponse> => {
  const mux = new httpbinding.HttpBindingMux<"RestJson", "StreamingTraitsWithMediaType">([
    new httpbinding.UriSpec<"RestJson", "StreamingTraitsWithMediaType">(
      "POST",
      [{ type: "path_literal", value: "StreamingTraitsWithMediaType" }],
      [],
      { service: "RestJson", operation: "StreamingTraitsWithMediaType" }
    ),
  ]);
  return new StreamingTraitsWithMediaTypeHandler(
    operation,
    mux,
    new StreamingTraitsWithMediaTypeSerializer(),
    serializeFrameworkException,
    customizer
  );
};

const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true,
};
async function handle<S, O extends keyof S & string, Context>(
  request: __HttpRequest,
  context: Context,
  operationName: O,
  serializer: __OperationSerializer<S, O, __ServiceException>,
  operation: __Operation<__OperationInput<S[O]>, __OperationOutput<S[O]>, Context>,
  serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
  validationFn: (input: __OperationInput<S[O]>) => __ValidationFailure[],
  validationCustomizer: __ValidationCustomizer<O>
): Promise<__HttpResponse> {
  let input;
  try {
    input = await serializer.deserialize(request, {
      endpoint: () => Promise.resolve(request),
      ...serdeContextBase,
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    }
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    const validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      const validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    const output = await operation(input, context);
    return serializer.serialize(output, serdeContextBase);
  } catch (error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log("Received an unexpected error", error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class StreamingTraitsWithMediaTypeHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<
    StreamingTraitsWithMediaTypeServerInput,
    StreamingTraitsWithMediaTypeServerOutput,
    Context
  >;
  private readonly mux: __Mux<"RestJson", "StreamingTraitsWithMediaType">;
  private readonly serializer: __OperationSerializer<
    RestJsonService<Context>,
    "StreamingTraitsWithMediaType",
    StreamingTraitsWithMediaTypeErrors
  >;
  private readonly serializeFrameworkException: (
    e: __SmithyFrameworkException,
    ctx: __ServerSerdeContext
  ) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"StreamingTraitsWithMediaType">;
  /**
   * Construct a StreamingTraitsWithMediaType handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for StreamingTraitsWithMediaType
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for StreamingTraitsWithMediaType that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<StreamingTraitsWithMediaTypeServerInput, StreamingTraitsWithMediaTypeServerOutput, Context>,
    mux: __Mux<"RestJson", "StreamingTraitsWithMediaType">,
    serializer: __OperationSerializer<
      RestJsonService<Context>,
      "StreamingTraitsWithMediaType",
      StreamingTraitsWithMediaTypeErrors
    >,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"StreamingTraitsWithMediaType">
  ) {
    this.operation = operation;
    this.mux = mux;
    this.serializer = serializer;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      console.log(
        "Received a request that did not match aws.protocoltests.restjson#RestJson.StreamingTraitsWithMediaType. This indicates a misconfiguration."
      );
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(
      request,
      context,
      "StreamingTraitsWithMediaType",
      this.serializer,
      this.operation,
      this.serializeFrameworkException,
      StreamingTraitsWithMediaTypeServerInput.validate,
      this.validationCustomizer
    );
  }
}
