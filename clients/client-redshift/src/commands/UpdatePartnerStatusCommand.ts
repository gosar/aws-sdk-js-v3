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

import { PartnerIntegrationOutputMessage, UpdatePartnerStatusInputMessage } from "../models/models_0";
import {
  deserializeAws_queryUpdatePartnerStatusCommand,
  serializeAws_queryUpdatePartnerStatusCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface UpdatePartnerStatusCommandInput extends UpdatePartnerStatusInputMessage {}
export interface UpdatePartnerStatusCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * <p>Updates the status of a partner integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, UpdatePartnerStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, UpdatePartnerStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new UpdatePartnerStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartnerStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class UpdatePartnerStatusCommand extends $Command<
  UpdatePartnerStatusCommandInput,
  UpdatePartnerStatusCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePartnerStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePartnerStatusCommandInput, UpdatePartnerStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "UpdatePartnerStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePartnerStatusInputMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PartnerIntegrationOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePartnerStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdatePartnerStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePartnerStatusCommandOutput> {
    return deserializeAws_queryUpdatePartnerStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
