import { Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ComparisonOperator } from 'aws-cdk-lib/aws-cloudwatch';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import {
  Cluster,
  Compatibility,
  ContainerImage,
  FargateService,
  TaskDefinition,
} from 'aws-cdk-lib/aws-ecs';
import {
  EcsCpuReservationAlarm,
  EcsCpuUtilizationAlarm,
  EcsErrorCountAlarm,
  EcsMemoryReservationAlarm,
  EcsMemoryUtilizationAlarm,
  EcsTargetResponseTimeAlarm,
} from '../src/recommended-alarm';

function initializeCluster() {
  const stack = new Stack();
  const vpc = new Vpc(stack, 'VPC');
  const cluster = new Cluster(stack, 'Cluster', { vpc });

  return { cluster, stack, vpc };
}

function initializeFargateService() {
  const { cluster, stack, vpc } = initializeCluster();
  const taskDefinition = new TaskDefinition(stack, 'TaskDefinition', {
    compatibility: Compatibility.FARGATE,
    cpu: '256',
    memoryMiB: '512',
  });
  taskDefinition.addContainer('Container', {
    image: ContainerImage.fromRegistry('public.ecr.aws/amazonlinux/amazonlinux:latest'),
  });
  const service = new FargateService(stack, 'FargateService', { cluster, taskDefinition });

  return { cluster, service, stack, taskDefinition, vpc };
}

describe('EcsCpuReservationAlarm', () => {
  test('with default props', () => {
    const { cluster, stack } = initializeCluster();

    new EcsCpuReservationAlarm(stack, 'EcsCpuReservationAlarm', { cluster });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'ClusterName' }],
      MetricName: 'CPUReservation',
      Namespace: 'AWS/ECS',
      Statistic: 'Average',
      Threshold: 90,
    });
  });

  test('with specific props', () => {
    const { cluster, stack } = initializeCluster();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 60,
    };

    new EcsCpuReservationAlarm(stack, 'EcsCpuReservationAlarm', { cluster, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'ClusterName' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'CPUReservation',
      Namespace: 'AWS/ECS',
      Period: props.period.toSeconds(),
      Threshold: props.threshold,
    });
  });
});

describe('EcsCpuUtilizationAlarm', () => {
  test('with default props', () => {
    const { service, stack } = initializeFargateService();

    new EcsCpuUtilizationAlarm(stack, 'EcsCpuUtilizationAlarm', { service });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      MetricName: 'CPUUtilization',
      Namespace: 'AWS/ECS',
      Statistic: 'Average',
      Threshold: 90,
    });
  });

  test('with specific props', () => {
    const { service, stack } = initializeFargateService();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 600,
    };

    new EcsCpuUtilizationAlarm(stack, 'EcsCpuUtilizationAlarm', { service, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'CPUUtilization',
      Namespace: 'AWS/ECS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});

describe('EcsErrorCountAlarm', () => {
  test('with default props', () => {
    const { service, stack } = initializeFargateService();
    const threshold = 10;

    new EcsErrorCountAlarm(stack, 'EcsErrorCountAlarm', { service, threshold });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      MetricName: 'HTTPCode_Target_5XX_Count',
      Namespace: 'AWS/ECS',
      Statistic: 'Sum',
      Threshold: threshold,
    });
  });

  test('with specific props', () => {
    const { service, stack } = initializeFargateService();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 50,
    };

    new EcsErrorCountAlarm(stack, 'EcsErrorCountAlarm', { service, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'HTTPCode_Target_5XX_Count',
      Namespace: 'AWS/ECS',
      Period: props.period.toSeconds(),
      Statistic: 'Sum',
      Threshold: props.threshold,
    });
  });
});

describe('EcsMemoryReservationAlarm', () => {
  test('with default props', () => {
    const { cluster, stack } = initializeCluster();

    new EcsMemoryReservationAlarm(stack, 'EcsMemoryReservationAlarm', { cluster });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'ClusterName' }],
      MetricName: 'MemoryReservation',
      Namespace: 'AWS/ECS',
      Statistic: 'Average',
      Threshold: 90,
    });
  });

  test('with specific props', () => {
    const { cluster, stack } = initializeCluster();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 60,
    };

    new EcsMemoryReservationAlarm(stack, 'EcsMemoryReservationAlarm', { cluster, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'ClusterName' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'MemoryReservation',
      Namespace: 'AWS/ECS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});

describe('EcsMemoryUtilizationAlarm', () => {
  test('with default props', () => {
    const { service, stack } = initializeFargateService();

    new EcsMemoryUtilizationAlarm(stack, 'EcsMemoryUtilizationAlarm', { service });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      MetricName: 'MemoryUtilization',
      Namespace: 'AWS/ECS',
      Statistic: 'Average',
      Threshold: 90,
    });
  });

  test('with specific props', () => {
    const { service, stack } = initializeFargateService();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 60,
    };

    new EcsMemoryUtilizationAlarm(stack, 'EcsMemoryUtilizationAlarm', { service, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'MemoryUtilization',
      Namespace: 'AWS/ECS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});

describe('EcsTargetResponseTimeAlarm', () => {
  test('with default props', () => {
    const { service, stack } = initializeFargateService();
    const threshold = 100;

    new EcsTargetResponseTimeAlarm(stack, 'EcsTargetResponseTimeAlarm', { service, threshold });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      ComparisonOperator: ComparisonOperator.GREATER_THAN_THRESHOLD,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      MetricName: 'TargetResponseTime',
      Namespace: 'AWS/ECS',
      Statistic: 'Average',
      Threshold: threshold,
    });
  });

  test('with specific props', () => {
    const { service, stack } = initializeFargateService();
    const props = {
      alarmDescription: 'alarmDescription',
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      evaluationPeriods: 1,
      period: Duration.minutes(5),
      threshold: 60,
    };

    new EcsTargetResponseTimeAlarm(stack, 'EcsTargetResponseTimeAlarm', { service, ...props });
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmDescription: props.alarmDescription,
      ComparisonOperator: props.comparisonOperator,
      Dimensions: [{ Name: 'ClusterName' }, { Name: 'ServiceName' }],
      EvaluationPeriods: props.evaluationPeriods,
      MetricName: 'TargetResponseTime',
      Namespace: 'AWS/ECS',
      Period: props.period.toSeconds(),
      Statistic: 'Average',
      Threshold: props.threshold,
    });
  });
});
