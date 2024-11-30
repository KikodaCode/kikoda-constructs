import { Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import { getLogicalId } from './util';
import { RecommendedAlarm, RecommendedAlarmProps } from '../src/recommended-alarm';

class TestRecommendedAlarm extends RecommendedAlarm {
  constructor(scope: Construct, id: string, props: RecommendedAlarmProps) {
    super(scope, id, props);
  }
}

describe('RecommendedAlarm', () => {
  test('with alarm actions', () => {
    const stack = new Stack();
    const topic = new Topic(stack, 'Topic');
    const alarmActions = [new SnsAction(topic)];

    new TestRecommendedAlarm(stack, 'TestRecommendedAlarm', {
      alarmActions,
      evaluationPeriods: 1,
      metric: new Metric({ metricName: 'MetricName', namespace: 'Namespace' }),
      threshold: 100,
    });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmActions: [{ Ref: getLogicalId(stack, topic) }],
      Dimensions: Match.absent(),
      EvaluationPeriods: 1,
      MetricName: 'MetricName',
      Namespace: 'Namespace',
      Threshold: 100,
    });
  });
});
