import { Duration } from 'aws-cdk-lib';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { BaseService } from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';
import { CreateRecommendedAlarmProps, RecommendedAlarm } from './recommended-alarm';

/**
 * Properties needed to create an ECS target response time alarm.
 */
export interface EcsTargetResponseTimeAlarmProps extends CreateRecommendedAlarmProps {
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
   * The largest target response time that is allowed before triggering the
   * alarm.
   *
   * @remarks
   * The recommended threshold value for this alarm is highly dependent on use
   * case. Review the criticality and requirements of the target response time
   * of the service and analyze the historical behavior of this metric to
   * determine sensible threshold levels.
   */
  threshold: number;
}

/**
 * This alarm helps detect a high target response time for ECS service requests.
 *
 * @see {@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Best_Practice_Recommended_Alarms_AWS_Services.html#ECS}
 */
export class EcsTargetResponseTimeAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: EcsTargetResponseTimeAlarmProps) {
    super(scope, id, {
      ...props,
      alarmDescription:
        props.alarmDescription ??
        'This alarm helps detect a high target response time for ECS service requests. This can indicate that there are problems that cause the service to be unable to serve requests in time.',
      comparisonOperator: props.comparisonOperator ?? ComparisonOperator.GREATER_THAN_THRESHOLD,
      evaluationPeriods: props.evaluationPeriods ?? 5,
      metric: props.service.metric('TargetResponseTime', {
        period: props.period ?? Duration.minutes(1),
      }),
    });
  }
}
