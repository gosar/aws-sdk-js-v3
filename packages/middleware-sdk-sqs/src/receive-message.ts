import {
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";
import { toHex } from "@smithy/util-hex-encoding";
import { toUint8Array } from "@smithy/util-utf8";

import { PreviouslyResolved } from "./configurations";

interface ReceiveMessageResult {
  Messages: Array<Message>;
}

interface Message {
  Body: string | undefined;
  MD5OfBody: string | undefined;
  MessageId: string | undefined;
}

export function receiveMessageMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const resp = await next({ ...args });
      if (options.md5 === false) {
        return resp;
      }
      const output = resp.output as unknown as ReceiveMessageResult;
      const messageIds = [];
      if (output.Messages !== undefined) {
        for (const message of output.Messages) {
          const md5 = message.MD5OfBody;
          const hash = new options.md5();
          hash.update(toUint8Array(message.Body || ""));
          if (md5 !== toHex(await hash.digest())) {
            messageIds.push(message.MessageId);
          }
        }
      }
      if (messageIds.length > 0) {
        throw new Error("Invalid MD5 checksum on messages: " + messageIds.join(", "));
      }

      return resp;
    };
}

export const receiveMessageMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["VALIDATE_BODY_MD5"],
  name: "receiveMessageMiddleware",
  override: true,
};

export const getReceiveMessagePlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(receiveMessageMiddleware(config), receiveMessageMiddlewareOptions);
  },
});
