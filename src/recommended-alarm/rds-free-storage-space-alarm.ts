import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { DatabaseInstance } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an RDS free storage space alarm.
 */
export interface RdsFreeStorageSpaceAlarmProps extends CreateRecommendedAlarmProps {
  /**
   * The database instance to monitor.
   */
  database: DatabaseInstance;
  /**
   * The minimum amount of free storage space that is allowed before triggering
   * the alarm.
   *
   * @remarks
   * The threshold value will depend on the currently allocated storage space.
   * Typically, the threshold value should be 10% of the allocated storage
   * space.
   */
  threshold: number;
  /**
   * The period over which the minimum is applied.
   *
   * @default Duration.minutes(1)
   */
  period?: Duration;
}

/**
 * This alarm watches for a low amount of available storage space.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#RDS}
 */
export class RdsFreeStorageSpaceAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: RdsFreeStorageSpaceAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm watches for a low amount of available storage space. Intent: This alarm helps prevent storage full issues. This can prevent downtime that occurs when your database instance runs out of storage. We do not recommend using this alarm if you have storage auto scaling enabled, or if you frequently change the storage capacity of the database instance.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.LESS_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.database.metricFreeStorageSpace({
        statistic: 'Minimum',
        period: props.period ?? Duration.minutes(1),
      }),
    });
  }
}
