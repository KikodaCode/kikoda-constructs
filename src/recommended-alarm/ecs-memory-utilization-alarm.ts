import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { BaseService } from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an ECS memory utilization alarm.
 */
export interface EcsMemoryUtilizationAlarmProps extends CreateRecommendedAlarmProps {
  /**
   * The ECS (`Ec2Service` or `FargateService`) service to monitor.
   */
  service: BaseService;
  /**
   * The period over which the average is applied.
   *
   * @default Duration.minutes(1)
   */
  period?: Duration;
  /**
   * The highest percentage of memory utilization that is allowed before
   * triggering the alarm.
   *
   * @remarks
   * The recommended threshold for memory utilization is 90%. Alternatively, a
   * lower value can be chosen based on cluster characteristics.
   *
   * @default 90
   */
  threshold?: number;
}

/**
 * This alarm is used to detect high memory utilization for the ECS service.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#ECS}
 */
export class EcsMemoryUtilizationAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: EcsMemoryUtilizationAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm is used to detect high memory utilization for the ECS service. Intent: Consistent high memory utilization can indicate a resource bottleneck or application performance problems.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.service.metricMemoryUtilization({
        period: props.period ?? Duration.minutes(1),
      }),
      threshold: props.threshold ?? 90,
    });
  }
}
