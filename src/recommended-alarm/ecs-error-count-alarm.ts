import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { BaseService } from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an ECS error count alarm.
 */
export interface EcsErrorCountAlarmProps extends CreateRecommendedAlarmProps {
  /**
   * The ECS (`Ec2Service` or `FargateService`) service to monitor.
   */
  service: BaseService;
  /**
   * The period over which the summation is applied.
   *
   * @default Duration.minutes(1)
   */
  period?: Duration;
  /**
   * The total number of server-side errors that are allowed before triggering
   * the alarm.
   *
   * @remarks
   * Calculate the value of about 5% of the average traffic and use this value
   * as a starting point for the threshold. The average traffic by determined
   * using the RequestCount metric. Historical data can also be analyzed to
   * determine the acceptable error rate for the application workload.
   * Frequently occurring 5XX errors need to be alarmed on. However, setting a
   * very low value for the threshold can cause the alarm to be too sensitive.
   */
  threshold: number;
}

/**
 * This alarm helps detect a high server-side error count for the ECS service.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#ECS}
 */
export class EcsErrorCountAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: EcsErrorCountAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm helps detect a high server-side error count for the ECS service. This can indicate that there are errors that cause the server to be unable to serve requests.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.service.metric('HTTPCode_Target_5XX_Count', {
        period: props.period ?? Duration.minutes(1),
        statistic: 'Sum',
      }),
    });
  }
}
