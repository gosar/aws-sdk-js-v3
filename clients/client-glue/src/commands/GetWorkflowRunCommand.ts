// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetWorkflowRunRequest, GetWorkflowRunResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetWorkflowRunCommand,
  serializeAws_json1_1GetWorkflowRunCommand,
} from "../protocols/Aws_json1_1";

export interface GetWorkflowRunCommandInput extends GetWorkflowRunRequest {}
export interface GetWorkflowRunCommandOutput extends GetWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for a given workflow run. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetWorkflowRunCommand extends $Command<
  GetWorkflowRunCommandInput,
  GetWorkflowRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWorkflowRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetWorkflowRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkflowRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWorkflowRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorkflowRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetWorkflowRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowRunCommandOutput> {
    return deserializeAws_json1_1GetWorkflowRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
