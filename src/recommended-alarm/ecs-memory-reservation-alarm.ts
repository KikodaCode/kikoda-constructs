import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { Cluster } from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an ECS memory reservation alarm.
 */
export interface EcsMemoryReservationAlarmProps extends CreateRecommendedAlarmProps {
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
   * The highest percentage of memory reservation that is allowed before
   * triggering the alarm.
   *
   * @remarks
   * The recommended threshold for memory reservation is 90%. Alternatively, a
   * lower value can be chosen based on cluster characteristics.
   *
   * @default 90
   */
  threshold?: number;
}

/**
 * This alarm helps detect a high memory reservation of the ECS cluster.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#ECS}
 */
export class EcsMemoryReservationAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: EcsMemoryReservationAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm helps detect a high memory reservation of the ECS cluster. High memory reservation might indicate a resource bottleneck for the cluster. Intent: The alarm is used to detect whether the total memory units reserved by tasks on the cluster is reaching the total memory units registered for the cluster. Reaching the total memory units for the cluster can cause the cluster to be unable to launch new tasks. This alarm is not recommended if EC2 capacity providers managed scaling is turned on or if Fargate is associated as a capacity provider.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.cluster.metricMemoryReservation({
        period: props.period ?? Duration.minutes(1),
      }),
      threshold: props.threshold ?? 90,
    });
  }
}
