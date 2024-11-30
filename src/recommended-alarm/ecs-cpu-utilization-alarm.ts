import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { BaseService } from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an ECS CPU utilization alarm.
 */
export interface EcsCpuUtilizationAlarmProps extends CreateRecommendedAlarmProps {
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
   * The highest percentage of CPU utilization that is allowed before
   * triggering the alarm.
   *
   * @remarks
   * The service metrics for CPU utilization might exceed 100% utilization.
   * However, high CPU utilization may impact other services. It is recommended
   * to set the threshold to about 90-95%.
   *
   * @default 90
   */
  threshold?: number;
}

/**
 * This alarm is used to detect high CPU utilization for the ECS service.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#ECS}
 */
export class EcsCpuUtilizationAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: EcsCpuUtilizationAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm is used to detect high CPU utilization for the ECS service. Intent: Consistent high CPU utilization can indicate a resource bottleneck or application performance problems.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.service.metricCpuUtilization({
        period: props.period ?? Duration.minutes(1),
      }),
      threshold: props.threshold ?? 90,
    });
  }
}
