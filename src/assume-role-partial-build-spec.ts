import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';

/**
 * The partial buildspec that includes commands to assume a role and pass credentials to a docker build call.
 * This is designed to be used with CodePipelineProps.assetPublishingCodeBuildDefaults.partialBuildSpec.
 *
 * @export
 * @class AssumeRolePartialBuildSpec
 * @typedef {AssumeRolePartialBuildSpec}
 */
export class AssumeRolePartialBuildSpec {
  /**
   * The partial buildspec. This is designed to be used with CodePipelineProps.assetPublishingCodeBuildDefaults.partialBuildSpec.
   *
   * @public
   * @type {BuildSpec}
   */
  public partialBuildSpec: BuildSpec;
  /**
   * Creates an instance of AssumeRolePartialBuildSpec.
   *
   * @constructor
   * @param {string} roleArn
   */
  constructor(roleArn: string) {
    this.partialBuildSpec = BuildSpec.fromObject({
      phases: {
        install: {
          commands: [
            `export $(printf "AWS_ACCESS_KEY_ID=%s AWS_SECRET_ACCESS_KEY=%s AWS_SESSION_TOKEN=%s" $(aws sts assume-role --role-arn ${roleArn} --role-session-name test --query "Credentials.[AccessKeyId,SecretAccessKey, SessionToken]" --output text))`,
          ],
        },
      },
    });
  }
}
