import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { CfnDBInstance, IDatabaseInstance } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an RDS free storage space alarm.
 */
export interface RdsFreeStorageSpaceAlarmProps extends CreateRecommendedAlarmProps {
  /**
   * The database instance to monitor.
   */
  database: IDatabaseInstance;
  /**
   * The minimum amount of free storage space that is allowed before triggering
   * the alarm.
   *
   * @remarks
   * The threshold value will depend on the currently allocated storage space.
   * Typically, the threshold value should be 10% of the allocated storage
   * space.
   *
   * @default - 10% of allocated storage (if allocated storage can be determined) or 10 GiB.
   */
  threshold?: number;
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
    function getThreshold({ database, threshold }: RdsFreeStorageSpaceAlarmProps) {
      // Return threshold if set.
      if (threshold) return threshold;

      // Attempt to calculate threshold as 10% of allocated storage.
      if (database.node.defaultChild instanceof CfnDBInstance) {
        const storage = Number(database.node.defaultChild.allocatedStorage);
        if (Number.isFinite(storage) && storage > 0) {
          // Storage in GiB (1024 MiB x 1024 KiB x 1024 bytes) x 10%
          return storage * 1024 * 1024 * 1024 * 0.1;
        }
      }

      // Default to 10 GiB (1024 MiB x 1024 KiB x 1024 bytes)
      return 10 * 1024 * 1024 * 1024;
    }
    const threshold = getThreshold(props);

    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm watches for a low amount of available storage space. Intent: This alarm helps prevent storage full issues. This can prevent downtime that occurs when your database instance runs out of storage. This alarm is not recommended if storage auto scaling is enabled, or if the storage capacity of the database instance is frequently change.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.LESS_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.database.metricFreeStorageSpace({
        statistic: 'Minimum',
        period: props.period ?? Duration.minutes(1),
      }),
      threshold,
    });
  }
}
