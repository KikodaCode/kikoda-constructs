import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { Cluster } from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an ECS CPU reservation alarm.
 */
export interface EcsCpuReservationAlarmProps extends CreateRecommendedAlarmProps {
  /**
   * The ECS cluster to monitor.
   */
  cluster: Cluster;
  /**
   * The period over which the average is applied.
   *
   * @default Duration.minutes(1)
   */
  period?: Duration;
  /**
   * The highest percentage of CPU reservation that is allowed before
   * triggering the alarm.
   *
   * @remarks
   * The recommended threshold for CPU reservation is 90%. Alternatively, a
   * lower value can be chosen based on cluster characteristics.
   *
   * @default 90
   */
  threshold?: number;
}

/**
 * This alarm helps detect a high CPU reservation of the ECS cluster.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#ECS}
 */
export class EcsCpuReservationAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: EcsCpuReservationAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm helps detect a high CPU reservation of the ECS cluster. High CPU reservation might indicate that the cluster is running out of registered CPUs for the task. Intent: The alarm is used to detect whether the total number of CPU units reserved by tasks on the cluster is reaching the total CPU units registered for the cluster. Reaching the total CPU units for the cluster can result in running out of CPU for tasks. This alarm is not recommended if EC2 capacity providers managed scaling is turned on or if Fargate is associated as a capacity provider.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.cluster.metricCpuReservation({
        period: props.period ?? Duration.minutes(1),
      }),
      threshold: props.threshold ?? 90,
    });
  }
}
