import { Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import {
  DatabaseInstance,
  DatabaseInstanceEngine,
  PostgresEngineVersion,
} from 'aws-cdk-lib/aws-rds';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { getLogicalId } from './util';
import {
  RdsConnectionsAlarm,
  RdsCpuUtilizationAlarm,
  RdsFreeStorageSpaceAlarm,
  RdsFreeableMemoryAlarm,
} from '../src/recommended-alarm';

function initialize() {
  const stack = new Stack();
  const vpc = new Vpc(stack, 'VPC');
  const database = new DatabaseInstance(stack, 'Database', {
    engine: DatabaseInstanceEngine.postgres({ version: PostgresEngineVersion.VER_15_2 }),
    vpc,
  });

  return { database, stack, vpc };
}

function initializeImported() {
  const stack = new Stack();
  const databaseImported = DatabaseInstance.fromDatabaseInstanceAttributes(
    stack,
    'DatabaseImported',
    {
      instanceEndpointAddress: 'instanceEndpointAddress',
      instanceIdentifier: 'instanceIdentifier',
      port: 0,
      securityGroups: [],
    },
  );

  return { databaseImported, stack };
}

describe('RdsConnectionsAlarm', () => {
  test('with default props', () => {
    const { database, stack } = initialize();

    new RdsConnectionsAlarm(stack, 'RdsConnectionsAlarm', { database });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      MetricName: 'DatabaseConnections',
      Namespace: 'AWS/RDS',
      Statistic: 'Average',
      Threshold: 100,
    });
  });

  test('with alarm actions', () => {
    const { database, stack } = initialize();
    const topic = new Topic(stack, 'Topic');
    const alarmActions = [new SnsAction(topic)];

    new RdsConnectionsAlarm(stack, 'RdsConnectionsAlarm', { database, alarmActions });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmActions: [{ Ref: getLogicalId(stack, topic) }],
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      MetricName: 'DatabaseConnections',
      Namespace: 'AWS/RDS',
      Statistic: 'Average',
      Threshold: 100,
    });
  });

  test('with specific props', () => {
    const { database, stack } = initialize();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 600,
    };

    new RdsConnectionsAlarm(stack, 'RdsConnectionsAlarm', { database, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'DatabaseConnections',
      Namespace: 'AWS/RDS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});

describe('RdsCpuUtilizationAlarm', () => {
  test('with default props', () => {
    const { database, stack } = initialize();

    new RdsCpuUtilizationAlarm(stack, 'RdsCpuUtilizationAlarm', { database });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      MetricName: 'CPUUtilization',
      Namespace: 'AWS/RDS',
      Statistic: 'Average',
      Threshold: 90,
    });
  });

  test('with specific props', () => {
    const { database, stack } = initialize();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 60,
    };

    new RdsCpuUtilizationAlarm(stack, 'RdsCpuUtilizationAlarm', { database, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'CPUUtilization',
      Namespace: 'AWS/RDS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});

describe('RdsFreeStorageSpaceAlarm', () => {
  test('with default props', () => {
    const { database, stack } = initialize();

    new RdsFreeStorageSpaceAlarm(stack, 'RdsFreeStorageSpaceAlarm', { database });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      MetricName: 'FreeStorageSpace',
      Namespace: 'AWS/RDS',
      Statistic: 'Minimum',
      Threshold: 10 * 1024 * 1024 * 1024,
    });
  });

  test('with specific props', () => {
    const { database, stack } = initialize();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.LESS_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 1 * 1024 * 1024 * 1024, // 1 GiB
    };

    new RdsFreeStorageSpaceAlarm(stack, 'RdsFreeStorageSpaceAlarm', { database, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'FreeStorageSpace',
      Namespace: 'AWS/RDS',
      Period: props.period.toSeconds(),
      Statistic: 'Minimum',
      Threshold: props.threshold,
    });
  });

  test('from imported database', () => {
    const { databaseImported, stack } = initializeImported();

    new RdsFreeStorageSpaceAlarm(stack, 'RdsFreeStorageSpaceAlarm', { database: databaseImported });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      MetricName: 'FreeStorageSpace',
      Namespace: 'AWS/RDS',
      Statistic: 'Minimum',
      Threshold: 10 * 1024 * 1024 * 1024,
    });
  });
});

describe('RdsFreeableMemoryAlarm', () => {
  test('with default props', () => {
    const { database, stack } = initialize();

    new RdsFreeableMemoryAlarm(stack, 'RdsFreeableMemoryAlarm', { database });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      MetricName: 'FreeableMemory',
      Namespace: 'AWS/RDS',
      Statistic: 'Average',
      Threshold: 25,
    });
  });

  test('with specific props', () => {
    const { database, stack } = initialize();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.LESS_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 5,
    };

    new RdsFreeableMemoryAlarm(stack, 'RdsFreeableMemoryAlarm', { database, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'DBInstanceIdentifier' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'FreeableMemory',
      Namespace: 'AWS/RDS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});
