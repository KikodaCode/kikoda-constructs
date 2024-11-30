import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { IDatabaseInstance } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an RDS freeable memory alarm.
 */
export interface RdsFreeableMemoryAlarmProps extends CreateRecommendedAlarmProps {
  /**
   * The database instance to monitor.
   */
  database: IDatabaseInstance;
  /**
   * The period over which the average is applied.
   *
   * @default Duration.minutes(1)
   */
  period?: Duration;
  /**
   * The lowest percentage of freeable memory that is allowed before
   * triggering the alarm.
   *
   * @remarks
   * Depending on the workload and instance class, different values for the
   * threshold can be appropriate. Ideally, available memory should not go
   * below 25% of total memory for prolonged periods. For Aurora, you can set
   * the threshold close to 5%, because the metric approaching 0 means that the
   * DB instance has scaled up as much as it can. You can analyze the
   * historical behavior of this metric to determine sensible threshold levels.
   *
   * @default 25
   */
  threshold?: number;
}

/**
 * This alarm helps to monitor low freeable memory which can mean that there is
 * a spike in database connections or that your instance may be under high
 * memory pressure.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#RDS}
 */
export class RdsFreeableMemoryAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: RdsFreeableMemoryAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm helps to monitor low freeable memory which can mean that there is a spike in database connections or that your instance may be under high memory pressure. Intent: This alarm is used to help prevent running out of memory which can result in rejected connections.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.LESS_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 15,
      metric: props.database.metricFreeableMemory({
        period: props.period ?? Duration.minutes(1),
      }),
      threshold: props.threshold ?? 25,
    });
  }
}
