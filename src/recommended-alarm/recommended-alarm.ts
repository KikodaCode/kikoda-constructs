import { IAlarmAction, Alarm, AlarmProps, CreateAlarmOptions } from 'aws-cdk-lib/aws-cloudwatch';
import { Construct } from 'constructs';

/**
 * Properties needed to create a recommended alarm from a metric.
 */
export interface RecommendedAlarmProps extends AlarmProps, AddAlarmActions {}

/**
 * Properties needed to create a recommended alarm.
 */
export interface CreateRecommendedAlarmProps extends Partial<CreateAlarmOptions>, AddAlarmActions {}

interface AddAlarmActions {
  /**
   * Actions to trigger if the alarm fires.
   *
   * Typical action to trigger include SNS topics or AutoScaling policies.
   *
   * @default - none
   */
  readonly alarmActions?: IAlarmAction[];
}

/**
 * AWS recommended alarms to set for various services.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html}
 */
export abstract class RecommendedAlarm extends Alarm {
  constructor(scope: Construct, id: string, props: RecommendedAlarmProps) {
    super(scope, id, props);

    if (props.alarmActions) {
      this.addAlarmAction(...props.alarmActions);
    }
  }
}
