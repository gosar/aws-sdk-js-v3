// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Integration } from "../models/models_0";
import { ModifyIntegrationMessage } from "../models/models_1";
import { de_ModifyIntegrationCommand, se_ModifyIntegrationCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyIntegrationCommand}.
 */
export interface ModifyIntegrationCommandInput extends ModifyIntegrationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyIntegrationCommand}.
 */
export interface ModifyIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * <p>Modifies a zero-ETL integration with Amazon Redshift.</p>
 *          <note>
 *             <p>Currently, you can only modify integrations that have Aurora MySQL source DB clusters. Integrations with Aurora PostgreSQL and RDS sources currently don't support modifying the integration.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyIntegrationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyIntegrationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyIntegrationMessage
 *   IntegrationIdentifier: "STRING_VALUE", // required
 *   IntegrationName: "STRING_VALUE",
 *   DataFilter: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new ModifyIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // Integration
 * //   SourceArn: "STRING_VALUE",
 * //   TargetArn: "STRING_VALUE",
 * //   IntegrationName: "STRING_VALUE",
 * //   IntegrationArn: "STRING_VALUE",
 * //   KMSKeyId: "STRING_VALUE",
 * //   AdditionalEncryptionContext: { // EncryptionContextMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Status: "creating" || "active" || "modifying" || "failed" || "deleting" || "syncing" || "needs_attention",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreateTime: new Date("TIMESTAMP"),
 * //   Errors: [ // IntegrationErrorList
 * //     { // IntegrationError
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DataFilter: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyIntegrationCommandInput - {@link ModifyIntegrationCommandInput}
 * @returns {@link ModifyIntegrationCommandOutput}
 * @see {@link ModifyIntegrationCommandInput} for command's `input` shape.
 * @see {@link ModifyIntegrationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link IntegrationConflictOperationFault} (client fault)
 *  <p>A conflicting conditional operation is currently in progress against this resource.
 *             Typically occurs when there are multiple requests being made to the same resource at the same time,
 *             and these requests conflict with each other.</p>
 *
 * @throws {@link IntegrationNotFoundFault} (client fault)
 *  <p>The specified integration could not be found.</p>
 *
 * @throws {@link InvalidIntegrationStateFault} (client fault)
 *  <p>The integration is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class ModifyIntegrationCommand extends $Command
  .classBuilder<
    ModifyIntegrationCommandInput,
    ModifyIntegrationCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ModifyIntegration", {})
  .n("RDSClient", "ModifyIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIntegrationCommand)
  .de(de_ModifyIntegrationCommand)
  .build() {}
