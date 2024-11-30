import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { IDatabaseInstance } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an RDS connections alarm.
 */
export interface RdsConnectionsAlarmProps extends CreateRecommendedAlarmProps {
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
   * The number of connections to allow before triggering the alarm.
   *
   * @remarks
   * The number of connections allowed depends on the size of your DB instance
   * class and database engine-specific parameters related to processes /
   * connections. You should calculate a value between 90-95% of the maximum
   * number of connections for your database and use that result as the
   * threshold value.
   *
   * @default 100
   */
  threshold?: number;
}

/**
 * This alarm detects a high number of connections.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#RDS}
 */
export class RdsConnectionsAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: RdsConnectionsAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm detects a high number of connections. Intent: This alarm is used to help prevent rejected connections when the maximum number of DB connections is reached. This alarm is not recommended if you frequently change DB instance class, because doing so changes the memory and default maximum number of connections.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.database.metricDatabaseConnections({
        period: props.period ?? Duration.minutes(1),
      }),
      threshold: props.threshold ?? 100,
    });
  }
}
