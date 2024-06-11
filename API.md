# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeSource <a name="CodeSource" id="@kikoda/cdk-constructs.CodeSource"></a>

Configuration properties for the code source repository.

Currently supports CodeCommit and GitHub Sources.
GitHub source requrires a preexisting CodeStarConnection.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.CodeSource.Initializer"></a>

```typescript
import { CodeSource } from '@kikoda/cdk-constructs'

new CodeSource(scope: Construct, branchName: string, config: CodeCommitSourceConfig | GitHubSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.Initializer.parameter.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@kikoda/cdk-constructs.CodeCommitSourceConfig">CodeCommitSourceConfig</a> \| <a href="#@kikoda/cdk-constructs.GitHubSourceConfig">GitHubSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.CodeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@kikoda/cdk-constructs.CodeSource.Initializer.parameter.branchName"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdk-constructs.CodeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.CodeCommitSourceConfig">CodeCommitSourceConfig</a> | <a href="#@kikoda/cdk-constructs.GitHubSourceConfig">GitHubSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.CodeSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.CodeSource.isConstruct"></a>

```typescript
import { CodeSource } from '@kikoda/cdk-constructs'

CodeSource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.CodeSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdk-constructs.CodeSource.property.source">source</a></code> | <code>aws-cdk-lib.pipelines.CodePipelineSource</code> | The Source of the pipeline. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.CodeSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `source`<sup>Required</sup> <a name="source" id="@kikoda/cdk-constructs.CodeSource.property.source"></a>

```typescript
public readonly source: CodePipelineSource;
```

- *Type:* aws-cdk-lib.pipelines.CodePipelineSource

The Source of the pipeline.

---


### ComponentPipelineStack <a name="ComponentPipelineStack" id="@kikoda/cdk-constructs.ComponentPipelineStack"></a>

An individual component deployment pipeline stack.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.ComponentPipelineStack.Initializer"></a>

```typescript
import { ComponentPipelineStack } from '@kikoda/cdk-constructs'

new ComponentPipelineStack(scope: Construct, id: string, props: ComponentPipelineStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps">ComponentPipelineStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.ComponentPipelineStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdk-constructs.ComponentPipelineStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.ComponentPipelineStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps">ComponentPipelineStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.ComponentPipelineStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@kikoda/cdk-constructs.ComponentPipelineStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@kikoda/cdk-constructs.ComponentPipelineStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@kikoda/cdk-constructs.ComponentPipelineStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@kikoda/cdk-constructs.ComponentPipelineStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@kikoda/cdk-constructs.ComponentPipelineStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@kikoda/cdk-constructs.ComponentPipelineStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@kikoda/cdk-constructs.ComponentPipelineStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@kikoda/cdk-constructs.ComponentPipelineStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@kikoda/cdk-constructs.ComponentPipelineStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@kikoda/cdk-constructs.ComponentPipelineStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@kikoda/cdk-constructs.ComponentPipelineStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@kikoda/cdk-constructs.ComponentPipelineStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@kikoda/cdk-constructs.ComponentPipelineStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@kikoda/cdk-constructs.ComponentPipelineStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@kikoda/cdk-constructs.ComponentPipelineStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@kikoda/cdk-constructs.ComponentPipelineStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@kikoda/cdk-constructs.ComponentPipelineStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@kikoda/cdk-constructs.ComponentPipelineStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@kikoda/cdk-constructs.ComponentPipelineStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@kikoda/cdk-constructs.ComponentPipelineStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@kikoda/cdk-constructs.ComponentPipelineStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@kikoda/cdk-constructs.ComponentPipelineStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@kikoda/cdk-constructs.ComponentPipelineStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@kikoda/cdk-constructs.ComponentPipelineStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@kikoda/cdk-constructs.ComponentPipelineStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@kikoda/cdk-constructs.ComponentPipelineStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@kikoda/cdk-constructs.ComponentPipelineStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@kikoda/cdk-constructs.ComponentPipelineStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@kikoda/cdk-constructs.ComponentPipelineStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@kikoda/cdk-constructs.ComponentPipelineStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@kikoda/cdk-constructs.ComponentPipelineStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@kikoda/cdk-constructs.ComponentPipelineStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@kikoda/cdk-constructs.ComponentPipelineStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@kikoda/cdk-constructs.ComponentPipelineStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@kikoda/cdk-constructs.ComponentPipelineStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@kikoda/cdk-constructs.ComponentPipelineStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.ComponentPipelineStack.isConstruct"></a>

```typescript
import { ComponentPipelineStack } from '@kikoda/cdk-constructs'

ComponentPipelineStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.ComponentPipelineStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@kikoda/cdk-constructs.ComponentPipelineStack.isStack"></a>

```typescript
import { ComponentPipelineStack } from '@kikoda/cdk-constructs'

ComponentPipelineStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.ComponentPipelineStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@kikoda/cdk-constructs.ComponentPipelineStack.of"></a>

```typescript
import { ComponentPipelineStack } from '@kikoda/cdk-constructs'

ComponentPipelineStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@kikoda/cdk-constructs.ComponentPipelineStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack.property.codePipeline">codePipeline</a></code> | <code>aws-cdk-lib.pipelines.CodePipeline</code> | Instance of the CDK.CodePipeline created. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `codePipeline`<sup>Required</sup> <a name="codePipeline" id="@kikoda/cdk-constructs.ComponentPipelineStack.property.codePipeline"></a>

```typescript
public readonly codePipeline: CodePipeline;
```

- *Type:* aws-cdk-lib.pipelines.CodePipeline

Instance of the CDK.CodePipeline created.

---


### ConfiguredStage <a name="ConfiguredStage" id="@kikoda/cdk-constructs.ConfiguredStage"></a>

A Stage that has a specific configuration.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.ConfiguredStage.Initializer"></a>

```typescript
import { ConfiguredStage } from '@kikoda/cdk-constructs'

new ConfiguredStage(scope: Construct, id: string, props: ConfiguredStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope of the construct. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct's id. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps">ConfiguredStageProps</a></code> | - The configuration based upon a generic type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.ConfiguredStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdk-constructs.ConfiguredStage.Initializer.parameter.id"></a>

- *Type:* string

The construct's id.

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.ConfiguredStage.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.ConfiguredStageProps">ConfiguredStageProps</a>

The configuration based upon a generic type.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.ConfiguredStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="@kikoda/cdk-constructs.ConfiguredStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="@kikoda/cdk-constructs.ConfiguredStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.of">of</a></code> | Return the stage this construct is contained with, if available. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.extOf">extOf</a></code> | Return the `ConfiguredStage` this construct is contained with, if available. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.isConfiguredStage">isConfiguredStage</a></code> | Test whether the given construct is a ConfiguredStage. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.ConfiguredStage.isConstruct"></a>

```typescript
import { ConfiguredStage } from '@kikoda/cdk-constructs'

ConfiguredStage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.ConfiguredStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="@kikoda/cdk-constructs.ConfiguredStage.isStage"></a>

```typescript
import { ConfiguredStage } from '@kikoda/cdk-constructs'

ConfiguredStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.ConfiguredStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@kikoda/cdk-constructs.ConfiguredStage.of"></a>

```typescript
import { ConfiguredStage } from '@kikoda/cdk-constructs'

ConfiguredStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="@kikoda/cdk-constructs.ConfiguredStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `extOf` <a name="extOf" id="@kikoda/cdk-constructs.ConfiguredStage.extOf"></a>

```typescript
import { ConfiguredStage } from '@kikoda/cdk-constructs'

ConfiguredStage.extOf(construct: IConstruct)
```

Return the `ConfiguredStage` this construct is contained with, if available.

If called
on a nested stage, returns its parent. This method is most useful when you need to
load the configuration in a nested construct. This works exactly like Stage.of() but
returns the ConfiguredStage instead of the Stage.

###### `construct`<sup>Required</sup> <a name="construct" id="@kikoda/cdk-constructs.ConfiguredStage.extOf.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isConfiguredStage` <a name="isConfiguredStage" id="@kikoda/cdk-constructs.ConfiguredStage.isConfiguredStage"></a>

```typescript
import { ConfiguredStage } from '@kikoda/cdk-constructs'

ConfiguredStage.isConfiguredStage(x: any)
```

Test whether the given construct is a ConfiguredStage.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.ConfiguredStage.isConfiguredStage.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStage.property.config">config</a></code> | <code>any</code> | The configuration for the stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.ConfiguredStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@kikoda/cdk-constructs.ConfiguredStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="@kikoda/cdk-constructs.ConfiguredStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@kikoda/cdk-constructs.ConfiguredStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="@kikoda/cdk-constructs.ConfiguredStage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@kikoda/cdk-constructs.ConfiguredStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="@kikoda/cdk-constructs.ConfiguredStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="@kikoda/cdk-constructs.ConfiguredStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="@kikoda/cdk-constructs.ConfiguredStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdk-constructs.ConfiguredStage.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

The configuration for the stage.

---


### InstanceAutoStart <a name="InstanceAutoStart" id="@kikoda/cdk-constructs.InstanceAutoStart"></a>

`InstanceAutoStart` creates an AWS CloudWatch Event Rule that starts an EC2 instance on a schedule.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.InstanceAutoStart.Initializer"></a>

```typescript
import { InstanceAutoStart } from '@kikoda/cdk-constructs'

new InstanceAutoStart(scope: Construct, id: string, props: InstanceAutoStartProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStart.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStart.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.InstanceAutoStartProps">InstanceAutoStartProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.InstanceAutoStart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdk-constructs.InstanceAutoStart.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.InstanceAutoStart.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.InstanceAutoStartProps">InstanceAutoStartProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStart.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.InstanceAutoStart.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.InstanceAutoStart.isConstruct"></a>

```typescript
import { InstanceAutoStart } from '@kikoda/cdk-constructs'

InstanceAutoStart.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.InstanceAutoStart.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.InstanceAutoStart.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### InstanceAutoStop <a name="InstanceAutoStop" id="@kikoda/cdk-constructs.InstanceAutoStop"></a>

`InstanceAutoStop` creates an AWS CloudWatch Event Rule that stops an EC2 instance on a schedule.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.InstanceAutoStop.Initializer"></a>

```typescript
import { InstanceAutoStop } from '@kikoda/cdk-constructs'

new InstanceAutoStop(scope: Construct, id: string, props: InstanceAutoStopProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStop.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStop.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStop.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.InstanceAutoStopProps">InstanceAutoStopProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.InstanceAutoStop.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdk-constructs.InstanceAutoStop.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.InstanceAutoStop.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.InstanceAutoStopProps">InstanceAutoStopProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStop.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.InstanceAutoStop.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStop.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.InstanceAutoStop.isConstruct"></a>

```typescript
import { InstanceAutoStop } from '@kikoda/cdk-constructs'

InstanceAutoStop.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.InstanceAutoStop.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStop.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.InstanceAutoStop.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### StageAlarmTopic <a name="StageAlarmTopic" id="@kikoda/cdk-constructs.StageAlarmTopic"></a>

An alarm topic and optional cfn export of the topic name.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.StageAlarmTopic.Initializer"></a>

```typescript
import { StageAlarmTopic } from '@kikoda/cdk-constructs'

new StageAlarmTopic(scope: Construct, id: string, props: StageAlarmTopicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope of the construct. |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | - The construct's id. |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.StageAlarmTopicProps">StageAlarmTopicProps</a></code> | - The configuration for the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.StageAlarmTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdk-constructs.StageAlarmTopic.Initializer.parameter.id"></a>

- *Type:* string

The construct's id.

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.StageAlarmTopic.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.StageAlarmTopicProps">StageAlarmTopicProps</a>

The configuration for the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.StageAlarmTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.StageAlarmTopic.isConstruct"></a>

```typescript
import { StageAlarmTopic } from '@kikoda/cdk-constructs'

StageAlarmTopic.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.StageAlarmTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | The SNS Topic. |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopic.property.cfnOutput">cfnOutput</a></code> | <code>aws-cdk-lib.CfnOutput</code> | The CFN Export, will be populated if createCfnExport is true. |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.StageAlarmTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `topic`<sup>Required</sup> <a name="topic" id="@kikoda/cdk-constructs.StageAlarmTopic.property.topic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

The SNS Topic.

---

##### `cfnOutput`<sup>Optional</sup> <a name="cfnOutput" id="@kikoda/cdk-constructs.StageAlarmTopic.property.cfnOutput"></a>

```typescript
public readonly cfnOutput: CfnOutput;
```

- *Type:* aws-cdk-lib.CfnOutput

The CFN Export, will be populated if createCfnExport is true.

---


### Website <a name="Website" id="@kikoda/cdk-constructs.Website"></a>

Deploy a single page app with a standard static website architecture to AWS using CloudFront, S3, and Route53.

This is typically
coupled with the `configProvider` hooks in the `@kikoda/delivery-hooks` package using the `generateWebConfig`
and `generateWebConfigProps` options.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.Website.Initializer"></a>

```typescript
import { Website } from '@kikoda/cdk-constructs'

new Website(scope: Construct, id: string, props: WebsiteProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.Website.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.Website.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.Website.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.WebsiteProps">WebsiteProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.Website.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@kikoda/cdk-constructs.Website.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.Website.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.WebsiteProps">WebsiteProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.Website.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@kikoda/cdk-constructs.Website.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.Website.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@kikoda/cdk-constructs.Website.isConstruct"></a>

```typescript
import { Website } from '@kikoda/cdk-constructs'

Website.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@kikoda/cdk-constructs.Website.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.Website.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@kikoda/cdk-constructs.Website.property.endpoint">endpoint</a></code> | <code>string</code> | Full website endpoint w/protocol. |
| <code><a href="#@kikoda/cdk-constructs.Website.property.generatedWebConfig">generatedWebConfig</a></code> | <code>@kikoda/generated-config.GeneratedConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.Website.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@kikoda/cdk-constructs.Website.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Full website endpoint w/protocol.

---

##### `generatedWebConfig`<sup>Optional</sup> <a name="generatedWebConfig" id="@kikoda/cdk-constructs.Website.property.generatedWebConfig"></a>

```typescript
public readonly generatedWebConfig: GeneratedConfig;
```

- *Type:* @kikoda/generated-config.GeneratedConfig

---


## Structs <a name="Structs" id="Structs"></a>

### BranchPipelinesProps <a name="BranchPipelinesProps" id="@kikoda/cdk-constructs.BranchPipelinesProps"></a>

Configuration for the BranchPipelines construct.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.BranchPipelinesProps.Initializer"></a>

```typescript
import { BranchPipelinesProps } from '@kikoda/cdk-constructs'

const branchPipelinesProps: BranchPipelinesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.component">component</a></code> | <code><a href="#@kikoda/cdk-constructs.ComponentConfig">ComponentConfig</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.deploymentBranches">deploymentBranches</a></code> | <code><a href="#@kikoda/cdk-constructs.IDeploymentBranch">IDeploymentBranch</a>[]</code> | An interface representing the configutation for each branch and its related stage. |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@kikoda/cdk-constructs.PipelineConfig">PipelineConfig</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps.property.repository">repository</a></code> | <code><a href="#@kikoda/cdk-constructs.RepositoryConfig">RepositoryConfig</a></code> | Configuration for the source code repository. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `component`<sup>Required</sup> <a name="component" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.component"></a>

```typescript
public readonly component: ComponentConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.ComponentConfig">ComponentConfig</a>

---

##### `deploymentBranches`<sup>Required</sup> <a name="deploymentBranches" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.deploymentBranches"></a>

```typescript
public readonly deploymentBranches: IDeploymentBranch[];
```

- *Type:* <a href="#@kikoda/cdk-constructs.IDeploymentBranch">IDeploymentBranch</a>[]

An interface representing the configutation for each branch and its related stage.

---

##### `pipelineConfig`<sup>Required</sup> <a name="pipelineConfig" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: PipelineConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.PipelineConfig">PipelineConfig</a>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@kikoda/cdk-constructs.BranchPipelinesProps.property.repository"></a>

```typescript
public readonly repository: RepositoryConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.RepositoryConfig">RepositoryConfig</a>

Configuration for the source code repository.

Currently supports GitHub and CodeArtifacts.

---

### CodeCommitSourceConfig <a name="CodeCommitSourceConfig" id="@kikoda/cdk-constructs.CodeCommitSourceConfig"></a>

Configuration for specifying a codecommit repository as the source.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.CodeCommitSourceConfig.Initializer"></a>

```typescript
import { CodeCommitSourceConfig } from '@kikoda/cdk-constructs'

const codeCommitSourceConfig: CodeCommitSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.CodeCommitSourceConfig.property.codeCommitArn">codeCommitArn</a></code> | <code>string</code> | ARN of the CodeCommit repository to use. |

---

##### `codeCommitArn`<sup>Required</sup> <a name="codeCommitArn" id="@kikoda/cdk-constructs.CodeCommitSourceConfig.property.codeCommitArn"></a>

```typescript
public readonly codeCommitArn: string;
```

- *Type:* string

ARN of the CodeCommit repository to use.

---

### ComponentConfig <a name="ComponentConfig" id="@kikoda/cdk-constructs.ComponentConfig"></a>

Configuration for the component to be deployed.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.ComponentConfig.Initializer"></a>

```typescript
import { ComponentConfig } from '@kikoda/cdk-constructs'

const componentConfig: ComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ComponentConfig.property.componentName">componentName</a></code> | <code>string</code> | The name of this component. |
| <code><a href="#@kikoda/cdk-constructs.ComponentConfig.property.componentType">componentType</a></code> | <code>aws-cdk-lib.Stage</code> | A class that extends Stage. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@kikoda/cdk-constructs.ComponentConfig.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

The name of this component.

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@kikoda/cdk-constructs.ComponentConfig.property.componentType"></a>

```typescript
public readonly componentType: Stage;
```

- *Type:* aws-cdk-lib.Stage

A class that extends Stage.

This class will be used to create the individual component stages for each specified stage configuration.

---

### ComponentPipelineStackProps <a name="ComponentPipelineStackProps" id="@kikoda/cdk-constructs.ComponentPipelineStackProps"></a>

The properties for the ComponentPipelineStack construct.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.Initializer"></a>

```typescript
import { ComponentPipelineStackProps } from '@kikoda/cdk-constructs'

const componentPipelineStackProps: ComponentPipelineStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.branch">branch</a></code> | <code><a href="#@kikoda/cdk-constructs.IDeploymentBranch">IDeploymentBranch</a></code> | The deployment branch that this stack represents. |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.component">component</a></code> | <code><a href="#@kikoda/cdk-constructs.ComponentConfig">ComponentConfig</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.pipelineConfig">pipelineConfig</a></code> | <code><a href="#@kikoda/cdk-constructs.PipelineConfig">PipelineConfig</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStackProps.property.repository">repository</a></code> | <code><a href="#@kikoda/cdk-constructs.RepositoryConfig">RepositoryConfig</a></code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `branch`<sup>Required</sup> <a name="branch" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.branch"></a>

```typescript
public readonly branch: IDeploymentBranch;
```

- *Type:* <a href="#@kikoda/cdk-constructs.IDeploymentBranch">IDeploymentBranch</a>

The deployment branch that this stack represents.

---

##### `component`<sup>Required</sup> <a name="component" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.component"></a>

```typescript
public readonly component: ComponentConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.ComponentConfig">ComponentConfig</a>

---

##### `pipelineConfig`<sup>Required</sup> <a name="pipelineConfig" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.pipelineConfig"></a>

```typescript
public readonly pipelineConfig: PipelineConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.PipelineConfig">PipelineConfig</a>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@kikoda/cdk-constructs.ComponentPipelineStackProps.property.repository"></a>

```typescript
public readonly repository: RepositoryConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.RepositoryConfig">RepositoryConfig</a>

---

### ConfiguredStageProps <a name="ConfiguredStageProps" id="@kikoda/cdk-constructs.ConfiguredStageProps"></a>

Configured Stage Properties.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.ConfiguredStageProps.Initializer"></a>

```typescript
import { ConfiguredStageProps } from '@kikoda/cdk-constructs'

const configuredStageProps: ConfiguredStageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which to emit synthesized artifacts. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps.property.stageName">stageName</a></code> | <code>string</code> | Name of this stage. |
| <code><a href="#@kikoda/cdk-constructs.ConfiguredStageProps.property.config">config</a></code> | <code>any</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="@kikoda/cdk-constructs.ConfiguredStageProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing
from its env will use the corresponding field given here.

If either `region` or `account`is is not configured for `Stack` (either on
the `Stack` itself or on the containing `Stage`), the Stack will be
*environment-agnostic*.

Environment-agnostic stacks can be deployed to any environment, may not be
able to take advantage of all features of the CDK. For example, they will
not be able to use environmental context lookups, will not automatically
translate Service Principals to the right format based on the environment's
AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this Stage to
new Stage(app, 'Stage1', {
  env: { account: '123456789012', region: 'us-east-1' },
});

// Use the CLI's current credentials to determine the target environment
new Stage(app, 'Stage2', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```


##### `outdir`<sup>Optional</sup> <a name="outdir" id="@kikoda/cdk-constructs.ConfiguredStageProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is
specified and this stage is nested within another stage, an error will be
thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@kikoda/cdk-constructs.ConfiguredStageProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="policyValidationBeta1" id="@kikoda/cdk-constructs.ConfiguredStageProps.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@kikoda/cdk-constructs.ConfiguredStageProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* Derived from the id.

Name of this stage.

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdk-constructs.ConfiguredStageProps.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

---

### GenerateWebConfigProps <a name="GenerateWebConfigProps" id="@kikoda/cdk-constructs.GenerateWebConfigProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.GenerateWebConfigProps.Initializer"></a>

```typescript
import { GenerateWebConfigProps } from '@kikoda/cdk-constructs'

const generateWebConfigProps: GenerateWebConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.GenerateWebConfigProps.property.additionalConfig">additionalConfig</a></code> | <code>any</code> | Provide any additional configuration items to add to the generated configuration file. |
| <code><a href="#@kikoda/cdk-constructs.GenerateWebConfigProps.property.configDir">configDir</a></code> | <code>string</code> | The directory where base (optional) and stage level config (json) files are stored. |

---

##### `additionalConfig`<sup>Optional</sup> <a name="additionalConfig" id="@kikoda/cdk-constructs.GenerateWebConfigProps.property.additionalConfig"></a>

```typescript
public readonly additionalConfig: any;
```

- *Type:* any

Provide any additional configuration items to add to the generated configuration file.

This
will be added to the config as the `additionalConfig` attribute.

---

##### `configDir`<sup>Required</sup> <a name="configDir" id="@kikoda/cdk-constructs.GenerateWebConfigProps.property.configDir"></a>

```typescript
public readonly configDir: string;
```

- *Type:* string

The directory where base (optional) and stage level config (json) files are stored.

This
should be relative to `appDir`. When using `generateConfig`, there needs to at least be a
`${stage}.config.json` in this directory. You can optionally include a `base.config.json`
file that all stage configs will inherit from (likewise you can override base config values
in stage level configs if needed).

---

### GitHubSourceConfig <a name="GitHubSourceConfig" id="@kikoda/cdk-constructs.GitHubSourceConfig"></a>

Configuration for specifying a GitHub repository as the source.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.GitHubSourceConfig.Initializer"></a>

```typescript
import { GitHubSourceConfig } from '@kikoda/cdk-constructs'

const gitHubSourceConfig: GitHubSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.GitHubSourceConfig.property.options">options</a></code> | <code>aws-cdk-lib.pipelines.ConnectionSourceOptions</code> | CodeStar connection options. |
| <code><a href="#@kikoda/cdk-constructs.GitHubSourceConfig.property.owner">owner</a></code> | <code>string</code> | The owner of the GitHub repository. |

---

##### `options`<sup>Required</sup> <a name="options" id="@kikoda/cdk-constructs.GitHubSourceConfig.property.options"></a>

```typescript
public readonly options: ConnectionSourceOptions;
```

- *Type:* aws-cdk-lib.pipelines.ConnectionSourceOptions

CodeStar connection options.

GitHub sources require use of a CodeStar connection.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@kikoda/cdk-constructs.GitHubSourceConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The owner of the GitHub repository.

---

### InstanceAutoStartProps <a name="InstanceAutoStartProps" id="@kikoda/cdk-constructs.InstanceAutoStartProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.InstanceAutoStartProps.Initializer"></a>

```typescript
import { InstanceAutoStartProps } from '@kikoda/cdk-constructs'

const instanceAutoStartProps: InstanceAutoStartProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStartProps.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The Instance to start on a schedule. |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStartProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule to start the instance. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="@kikoda/cdk-constructs.InstanceAutoStartProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The Instance to start on a schedule.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@kikoda/cdk-constructs.InstanceAutoStartProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule to start the instance.

---

### InstanceAutoStopProps <a name="InstanceAutoStopProps" id="@kikoda/cdk-constructs.InstanceAutoStopProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.InstanceAutoStopProps.Initializer"></a>

```typescript
import { InstanceAutoStopProps } from '@kikoda/cdk-constructs'

const instanceAutoStopProps: InstanceAutoStopProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStopProps.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The Instance to stop on a schedule. |
| <code><a href="#@kikoda/cdk-constructs.InstanceAutoStopProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule to stop the instance. |

---

##### `instance`<sup>Required</sup> <a name="instance" id="@kikoda/cdk-constructs.InstanceAutoStopProps.property.instance"></a>

```typescript
public readonly instance: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The Instance to stop on a schedule.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@kikoda/cdk-constructs.InstanceAutoStopProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule to stop the instance.

---

### PipelineConfig <a name="PipelineConfig" id="@kikoda/cdk-constructs.PipelineConfig"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.PipelineConfig.Initializer"></a>

```typescript
import { PipelineConfig } from '@kikoda/cdk-constructs'

const pipelineConfig: PipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.PipelineConfig.property.assetPublishingCodeBuildDefaults">assetPublishingCodeBuildDefaults</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildOptions</code> | CodeBuild options for the asset publishing step. |
| <code><a href="#@kikoda/cdk-constructs.PipelineConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.PipelineConfig.property.pruneCloudAssembly">pruneCloudAssembly</a></code> | <code>boolean</code> | Add a step to pull down and remove asset zips from the cloud assembly output from the Synth step. |
| <code><a href="#@kikoda/cdk-constructs.PipelineConfig.property.synthCodeBuildDefaults">synthCodeBuildDefaults</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildOptions</code> | Additional customizations to apply to the synthesize CodeBuild projects. |

---

##### `assetPublishingCodeBuildDefaults`<sup>Optional</sup> <a name="assetPublishingCodeBuildDefaults" id="@kikoda/cdk-constructs.PipelineConfig.property.assetPublishingCodeBuildDefaults"></a>

```typescript
public readonly assetPublishingCodeBuildDefaults: CodeBuildOptions;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildOptions

CodeBuild options for the asset publishing step.

Maps to the CodePipelineProps assetPublishingCodeBuildDefaults.
These will be merged with options to handle CodeArtifacts repositories if `codeArtifactRepositoryArn` is also specified.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@kikoda/cdk-constructs.PipelineConfig.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `pruneCloudAssembly`<sup>Optional</sup> <a name="pruneCloudAssembly" id="@kikoda/cdk-constructs.PipelineConfig.property.pruneCloudAssembly"></a>

```typescript
public readonly pruneCloudAssembly: boolean;
```

- *Type:* boolean

Add a step to pull down and remove asset zips from the cloud assembly output from the Synth step.

This is usefull when you have a lot of resources and are hitting the CFN limit for input
artifact size.

---

##### `synthCodeBuildDefaults`<sup>Optional</sup> <a name="synthCodeBuildDefaults" id="@kikoda/cdk-constructs.PipelineConfig.property.synthCodeBuildDefaults"></a>

```typescript
public readonly synthCodeBuildDefaults: CodeBuildOptions;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildOptions
- *Default:* Only `codeBuildDefaults` are applied

Additional customizations to apply to the synthesize CodeBuild projects.

---

### RepositoryConfig <a name="RepositoryConfig" id="@kikoda/cdk-constructs.RepositoryConfig"></a>

The configuration for the source of the pipeline.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.RepositoryConfig.Initializer"></a>

```typescript
import { RepositoryConfig } from '@kikoda/cdk-constructs'

const repositoryConfig: RepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.RepositoryConfig.property.source">source</a></code> | <code><a href="#@kikoda/cdk-constructs.CodeCommitSourceConfig">CodeCommitSourceConfig</a> \| <a href="#@kikoda/cdk-constructs.GitHubSourceConfig">GitHubSourceConfig</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.RepositoryConfig.property.baseDir">baseDir</a></code> | <code>string</code> | Base directory for the repository. |
| <code><a href="#@kikoda/cdk-constructs.RepositoryConfig.property.synthOuputDir">synthOuputDir</a></code> | <code>string</code> | Output directory for the cloudformation synthisis. |

---

##### `source`<sup>Required</sup> <a name="source" id="@kikoda/cdk-constructs.RepositoryConfig.property.source"></a>

```typescript
public readonly source: CodeCommitSourceConfig | GitHubSourceConfig;
```

- *Type:* <a href="#@kikoda/cdk-constructs.CodeCommitSourceConfig">CodeCommitSourceConfig</a> | <a href="#@kikoda/cdk-constructs.GitHubSourceConfig">GitHubSourceConfig</a>

---

##### `baseDir`<sup>Optional</sup> <a name="baseDir" id="@kikoda/cdk-constructs.RepositoryConfig.property.baseDir"></a>

```typescript
public readonly baseDir: string;
```

- *Type:* string
- *Default:* '.'

Base directory for the repository.

---

##### `synthOuputDir`<sup>Optional</sup> <a name="synthOuputDir" id="@kikoda/cdk-constructs.RepositoryConfig.property.synthOuputDir"></a>

```typescript
public readonly synthOuputDir: string;
```

- *Type:* string
- *Default:* './out'

Output directory for the cloudformation synthisis.

---

### StageAlarmTopicProps <a name="StageAlarmTopicProps" id="@kikoda/cdk-constructs.StageAlarmTopicProps"></a>

Configuration for StageAlarmTopic.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.StageAlarmTopicProps.Initializer"></a>

```typescript
import { StageAlarmTopicProps } from '@kikoda/cdk-constructs'

const stageAlarmTopicProps: StageAlarmTopicProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopicProps.property.level">level</a></code> | <code><a href="#@kikoda/cdk-constructs.AlarmLevels">AlarmLevels</a></code> | The alert level. |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopicProps.property.createCfnExport">createCfnExport</a></code> | <code>boolean</code> | If true a CFN export will be created. |
| <code><a href="#@kikoda/cdk-constructs.StageAlarmTopicProps.property.prefix">prefix</a></code> | <code>string</code> | The identifier prefix. |

---

##### `level`<sup>Required</sup> <a name="level" id="@kikoda/cdk-constructs.StageAlarmTopicProps.property.level"></a>

```typescript
public readonly level: AlarmLevels;
```

- *Type:* <a href="#@kikoda/cdk-constructs.AlarmLevels">AlarmLevels</a>

The alert level.

This is used in the Topic displayName and topicName, and the cfn export name.

---

##### `createCfnExport`<sup>Optional</sup> <a name="createCfnExport" id="@kikoda/cdk-constructs.StageAlarmTopicProps.property.createCfnExport"></a>

```typescript
public readonly createCfnExport: boolean;
```

- *Type:* boolean

If true a CFN export will be created.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@kikoda/cdk-constructs.StageAlarmTopicProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The identifier prefix.

This could be a stage name or similar identifier.

---

### StageConfig <a name="StageConfig" id="@kikoda/cdk-constructs.StageConfig"></a>

Configuration for the stage.

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.StageConfig.Initializer"></a>

```typescript
import { StageConfig } from '@kikoda/cdk-constructs'

const stageConfig: StageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which to emit synthesized artifacts. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.stageName">stageName</a></code> | <code>string</code> | Name of this stage. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.config">config</a></code> | <code>any</code> | The generic config. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.name">name</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@kikoda/cdk-constructs.StageConfig.property.manualApproval">manualApproval</a></code> | <code>boolean</code> | Add a manual approval step when deploying this stage. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@kikoda/cdk-constructs.StageConfig.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing
from its env will use the corresponding field given here.

If either `region` or `account`is is not configured for `Stack` (either on
the `Stack` itself or on the containing `Stage`), the Stack will be
*environment-agnostic*.

Environment-agnostic stacks can be deployed to any environment, may not be
able to take advantage of all features of the CDK. For example, they will
not be able to use environmental context lookups, will not automatically
translate Service Principals to the right format based on the environment's
AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this Stage to
new Stage(app, 'Stage1', {
  env: { account: '123456789012', region: 'us-east-1' },
});

// Use the CLI's current credentials to determine the target environment
new Stage(app, 'Stage2', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```


##### `outdir`<sup>Optional</sup> <a name="outdir" id="@kikoda/cdk-constructs.StageConfig.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is
specified and this stage is nested within another stage, an error will be
thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@kikoda/cdk-constructs.StageConfig.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="policyValidationBeta1" id="@kikoda/cdk-constructs.StageConfig.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@kikoda/cdk-constructs.StageConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* Derived from the id.

Name of this stage.

---

##### `config`<sup>Required</sup> <a name="config" id="@kikoda/cdk-constructs.StageConfig.property.config"></a>

```typescript
public readonly config: any;
```

- *Type:* any

The generic config.

---

##### `name`<sup>Required</sup> <a name="name" id="@kikoda/cdk-constructs.StageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the stage.

---

##### `manualApproval`<sup>Optional</sup> <a name="manualApproval" id="@kikoda/cdk-constructs.StageConfig.property.manualApproval"></a>

```typescript
public readonly manualApproval: boolean;
```

- *Type:* boolean

Add a manual approval step when deploying this stage.

---

### WebsiteProps <a name="WebsiteProps" id="@kikoda/cdk-constructs.WebsiteProps"></a>

#### Initializer <a name="Initializer" id="@kikoda/cdk-constructs.WebsiteProps.Initializer"></a>

```typescript
import { WebsiteProps } from '@kikoda/cdk-constructs'

const websiteProps: WebsiteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.appDir">appDir</a></code> | <code>string</code> | The full absolute path of the Single Page App. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.stage">stage</a></code> | <code>string</code> | String indicator of which environment/stage is being deployed ex. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | Provide an ACM certificate ARN to use for the website. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.alternateDomainNames">alternateDomainNames</a></code> | <code>string[]</code> | Specify alternate domain names to use for the website. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.buildAssetExcludes">buildAssetExcludes</a></code> | <code>string[]</code> | Provide an array of glob patterns to exclude from the build output. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.buildCommand">buildCommand</a></code> | <code>string</code> | The command for building the website (e.g. "yarn run build"). |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.buildDir">buildDir</a></code> | <code>string</code> | Path to the build output, relative to the `appDir`. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.bundling">bundling</a></code> | <code>aws-cdk-lib.BundlingOptions</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.cloudfrontInvalidationPaths">cloudfrontInvalidationPaths</a></code> | <code>string[]</code> | Specify the paths to be invalidated in the Cloudfront Distribution at the end of the deployment. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.corsAllowedOrigins">corsAllowedOrigins</a></code> | <code>string[]</code> | Specify a list of allowed request origins to use when configuring CORS (must also specify `enableCors`). |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.domainName">domainName</a></code> | <code>string</code> | Specify a domain name to use for the website. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.enableCors">enableCors</a></code> | <code>boolean</code> | Setup S3 bucket and Cloudfront distribution to allow CORS requests. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.generateWebConfigProps">generateWebConfigProps</a></code> | <code><a href="#@kikoda/cdk-constructs.GenerateWebConfigProps">GenerateWebConfigProps</a></code> | Specify options for gernerating a web config from base and stage level configs. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | Specify an existing hosted zone to use for the website. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.indexDoc">indexDoc</a></code> | <code>string</code> | The name of the index document to load, typically 'index.html'. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.onlyDefaultDomain">onlyDefaultDomain</a></code> | <code>boolean</code> | Do not create or look up a hosted zone or certificates for the website. |
| <code><a href="#@kikoda/cdk-constructs.WebsiteProps.property.repoRoot">repoRoot</a></code> | <code>string</code> | This should be the root directory of the git repository. |

---

##### `appDir`<sup>Required</sup> <a name="appDir" id="@kikoda/cdk-constructs.WebsiteProps.property.appDir"></a>

```typescript
public readonly appDir: string;
```

- *Type:* string

The full absolute path of the Single Page App.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@kikoda/cdk-constructs.WebsiteProps.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

String indicator of which environment/stage is being deployed ex.

'dev', 'test', 'prod'

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="@kikoda/cdk-constructs.WebsiteProps.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

Provide an ACM certificate ARN to use for the website.

This property will be ignored if `onlyDefaultDomain` is `true`.

---

##### `alternateDomainNames`<sup>Optional</sup> <a name="alternateDomainNames" id="@kikoda/cdk-constructs.WebsiteProps.property.alternateDomainNames"></a>

```typescript
public readonly alternateDomainNames: string[];
```

- *Type:* string[]
- *Default:* No alternate domain names

Specify alternate domain names to use for the website.

An Alias record will
only be created if the alternate domain name is in the provided hosted zone.
If you need to use a different hosted zone, consider using the `acmCertificateArn`
option instead to provide a certificate with the alternate domain names.
This property will be ignored if `onlyDefaultDomain` is `true`.

---

##### `buildAssetExcludes`<sup>Optional</sup> <a name="buildAssetExcludes" id="@kikoda/cdk-constructs.WebsiteProps.property.buildAssetExcludes"></a>

```typescript
public readonly buildAssetExcludes: string[];
```

- *Type:* string[]

Provide an array of glob patterns to exclude from the build output.

This is useful if you have
files that are generated during the build process that you don't want to include in the
final build output.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@kikoda/cdk-constructs.WebsiteProps.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string

The command for building the website (e.g. "yarn run build").

---

##### `buildDir`<sup>Optional</sup> <a name="buildDir" id="@kikoda/cdk-constructs.WebsiteProps.property.buildDir"></a>

```typescript
public readonly buildDir: string;
```

- *Type:* string

Path to the build output, relative to the `appDir`.

---

##### `bundling`<sup>Optional</sup> <a name="bundling" id="@kikoda/cdk-constructs.WebsiteProps.property.bundling"></a>

```typescript
public readonly bundling: BundlingOptions;
```

- *Type:* aws-cdk-lib.BundlingOptions

---

##### `cloudfrontInvalidationPaths`<sup>Optional</sup> <a name="cloudfrontInvalidationPaths" id="@kikoda/cdk-constructs.WebsiteProps.property.cloudfrontInvalidationPaths"></a>

```typescript
public readonly cloudfrontInvalidationPaths: string[];
```

- *Type:* string[]
- *Default:* wildcard invalidation ['/*']

Specify the paths to be invalidated in the Cloudfront Distribution at the end of the deployment.

---

##### `corsAllowedOrigins`<sup>Optional</sup> <a name="corsAllowedOrigins" id="@kikoda/cdk-constructs.WebsiteProps.property.corsAllowedOrigins"></a>

```typescript
public readonly corsAllowedOrigins: string[];
```

- *Type:* string[]
- *Default:* ['*']

Specify a list of allowed request origins to use when configuring CORS (must also specify `enableCors`).

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@kikoda/cdk-constructs.WebsiteProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Specify a domain name to use for the website.

This property is required unless `onlyDefaultDomain` is `true`, in which case it will be ignored.

---

##### `enableCors`<sup>Optional</sup> <a name="enableCors" id="@kikoda/cdk-constructs.WebsiteProps.property.enableCors"></a>

```typescript
public readonly enableCors: boolean;
```

- *Type:* boolean

Setup S3 bucket and Cloudfront distribution to allow CORS requests.

Optionally specificy the allowed Origins with `corsAllowedOrigins`

---

##### `generateWebConfigProps`<sup>Optional</sup> <a name="generateWebConfigProps" id="@kikoda/cdk-constructs.WebsiteProps.property.generateWebConfigProps"></a>

```typescript
public readonly generateWebConfigProps: GenerateWebConfigProps;
```

- *Type:* <a href="#@kikoda/cdk-constructs.GenerateWebConfigProps">GenerateWebConfigProps</a>

Specify options for gernerating a web config from base and stage level configs.

Must
enable `generateWebConfig`

---

##### `hostedZone`<sup>Optional</sup> <a name="hostedZone" id="@kikoda/cdk-constructs.WebsiteProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone
- *Default:* This construct will try to lookup an existing hosted zone for the domain name provided, unless `onlyDefaultDomain` is `true`.

Specify an existing hosted zone to use for the website.

This property will be ignored if `onlyDefaultDomain` is `true`.

---

##### `indexDoc`<sup>Optional</sup> <a name="indexDoc" id="@kikoda/cdk-constructs.WebsiteProps.property.indexDoc"></a>

```typescript
public readonly indexDoc: string;
```

- *Type:* string
- *Default:* "index.html"

The name of the index document to load, typically 'index.html'.

---

##### `onlyDefaultDomain`<sup>Optional</sup> <a name="onlyDefaultDomain" id="@kikoda/cdk-constructs.WebsiteProps.property.onlyDefaultDomain"></a>

```typescript
public readonly onlyDefaultDomain: boolean;
```

- *Type:* boolean
- *Default:* false

Do not create or look up a hosted zone or certificates for the website.

The website will be served under the default CloudFront domain only.
Setting this to `true` will ignore the values set for `acmCertificateArn`, `domainName`, `alternateDomainNames`, and `hostedZone`.

---

##### `repoRoot`<sup>Optional</sup> <a name="repoRoot" id="@kikoda/cdk-constructs.WebsiteProps.property.repoRoot"></a>

```typescript
public readonly repoRoot: string;
```

- *Type:* string

This should be the root directory of the git repository.

Dependending on your repository setup
this may be required for Docker-based bundling. This path, if provided will be used as the mount point
for the Docker container during bundling. If this is not provided, the `appDir` path will be used.

---

## Classes <a name="Classes" id="Classes"></a>

### BranchPipelines <a name="BranchPipelines" id="@kikoda/cdk-constructs.BranchPipelines"></a>

Branch  pipelines creates an individual component deployment pipeline stack for each branch.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.BranchPipelines.Initializer"></a>

```typescript
import { BranchPipelines } from '@kikoda/cdk-constructs'

new BranchPipelines(app: App, props: BranchPipelinesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelines.Initializer.parameter.app">app</a></code> | <code>aws-cdk-lib.App</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelines.Initializer.parameter.props">props</a></code> | <code><a href="#@kikoda/cdk-constructs.BranchPipelinesProps">BranchPipelinesProps</a></code> | *No description.* |

---

##### `app`<sup>Required</sup> <a name="app" id="@kikoda/cdk-constructs.BranchPipelines.Initializer.parameter.app"></a>

- *Type:* aws-cdk-lib.App

---

##### `props`<sup>Required</sup> <a name="props" id="@kikoda/cdk-constructs.BranchPipelines.Initializer.parameter.props"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.BranchPipelinesProps">BranchPipelinesProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.BranchPipelines.property.componentPipelineStacks">componentPipelineStacks</a></code> | <code><a href="#@kikoda/cdk-constructs.ComponentPipelineStack">ComponentPipelineStack</a>[]</code> | Instance(s) of ComponentPipelineStacks created. |

---

##### `componentPipelineStacks`<sup>Required</sup> <a name="componentPipelineStacks" id="@kikoda/cdk-constructs.BranchPipelines.property.componentPipelineStacks"></a>

```typescript
public readonly componentPipelineStacks: ComponentPipelineStack[];
```

- *Type:* <a href="#@kikoda/cdk-constructs.ComponentPipelineStack">ComponentPipelineStack</a>[]

Instance(s) of ComponentPipelineStacks created.

---


### CostOptimizationAspects <a name="CostOptimizationAspects" id="@kikoda/cdk-constructs.CostOptimizationAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.CostOptimizationAspects.Initializer"></a>

```typescript
import { CostOptimizationAspects } from '@kikoda/cdk-constructs'

new CostOptimizationAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.CostOptimizationAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.CostOptimizationAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.CostOptimizationAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### FlagBasedAnnotator <a name="FlagBasedAnnotator" id="@kikoda/cdk-constructs.FlagBasedAnnotator"></a>

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.FlagBasedAnnotator.Initializer"></a>

```typescript
import { FlagBasedAnnotator } from '@kikoda/cdk-constructs'

new FlagBasedAnnotator(scope: IConstruct, featureFlag: WellArchitectedAspectsFeatureFlags)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.FlagBasedAnnotator.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.FlagBasedAnnotator.Initializer.parameter.featureFlag">featureFlag</a></code> | <code><a href="#@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags">WellArchitectedAspectsFeatureFlags</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@kikoda/cdk-constructs.FlagBasedAnnotator.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `featureFlag`<sup>Required</sup> <a name="featureFlag" id="@kikoda/cdk-constructs.FlagBasedAnnotator.Initializer.parameter.featureFlag"></a>

- *Type:* <a href="#@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags">WellArchitectedAspectsFeatureFlags</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.FlagBasedAnnotator.annotate">annotate</a></code> | *No description.* |

---

##### `annotate` <a name="annotate" id="@kikoda/cdk-constructs.FlagBasedAnnotator.annotate"></a>

```typescript
public annotate(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="@kikoda/cdk-constructs.FlagBasedAnnotator.annotate.parameter.message"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.FlagBasedAnnotator.property.flagLevel">flagLevel</a></code> | <code><a href="#@kikoda/cdk-constructs.FlagLevel">FlagLevel</a></code> | *No description.* |

---

##### `flagLevel`<sup>Required</sup> <a name="flagLevel" id="@kikoda/cdk-constructs.FlagBasedAnnotator.property.flagLevel"></a>

```typescript
public readonly flagLevel: FlagLevel;
```

- *Type:* <a href="#@kikoda/cdk-constructs.FlagLevel">FlagLevel</a>

---


### OperationalExcellenceAspects <a name="OperationalExcellenceAspects" id="@kikoda/cdk-constructs.OperationalExcellenceAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.OperationalExcellenceAspects.Initializer"></a>

```typescript
import { OperationalExcellenceAspects } from '@kikoda/cdk-constructs'

new OperationalExcellenceAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.OperationalExcellenceAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.OperationalExcellenceAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.OperationalExcellenceAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### PerformanceEfficiencyAspects <a name="PerformanceEfficiencyAspects" id="@kikoda/cdk-constructs.PerformanceEfficiencyAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.PerformanceEfficiencyAspects.Initializer"></a>

```typescript
import { PerformanceEfficiencyAspects } from '@kikoda/cdk-constructs'

new PerformanceEfficiencyAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.PerformanceEfficiencyAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.PerformanceEfficiencyAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.PerformanceEfficiencyAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### ReliabilityAspects <a name="ReliabilityAspects" id="@kikoda/cdk-constructs.ReliabilityAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.ReliabilityAspects.Initializer"></a>

```typescript
import { ReliabilityAspects } from '@kikoda/cdk-constructs'

new ReliabilityAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.ReliabilityAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.ReliabilityAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.ReliabilityAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### SecurityAspects <a name="SecurityAspects" id="@kikoda/cdk-constructs.SecurityAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.SecurityAspects.Initializer"></a>

```typescript
import { SecurityAspects } from '@kikoda/cdk-constructs'

new SecurityAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.SecurityAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.SecurityAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.SecurityAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### SustainabilityAspects <a name="SustainabilityAspects" id="@kikoda/cdk-constructs.SustainabilityAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.SustainabilityAspects.Initializer"></a>

```typescript
import { SustainabilityAspects } from '@kikoda/cdk-constructs'

new SustainabilityAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.SustainabilityAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.SustainabilityAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.SustainabilityAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### WellArchitectedAspects <a name="WellArchitectedAspects" id="@kikoda/cdk-constructs.WellArchitectedAspects"></a>

- *Implements:* aws-cdk-lib.IAspect

An app construct that complies with AWS well-architected standards.

#### Initializers <a name="Initializers" id="@kikoda/cdk-constructs.WellArchitectedAspects.Initializer"></a>

```typescript
import { WellArchitectedAspects } from '@kikoda/cdk-constructs'

new WellArchitectedAspects()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.WellArchitectedAspects.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@kikoda/cdk-constructs.WellArchitectedAspects.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@kikoda/cdk-constructs.WellArchitectedAspects.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IDeploymentBranch <a name="IDeploymentBranch" id="@kikoda/cdk-constructs.IDeploymentBranch"></a>

- *Implemented By:* <a href="#@kikoda/cdk-constructs.IDeploymentBranch">IDeploymentBranch</a>

Configuration for the specific deployment.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@kikoda/cdk-constructs.IDeploymentBranch.property.branchName">branchName</a></code> | <code>string</code> | The name of the code branch that this deployment branch represents. |
| <code><a href="#@kikoda/cdk-constructs.IDeploymentBranch.property.stages">stages</a></code> | <code><a href="#@kikoda/cdk-constructs.StageConfig">StageConfig</a>[]</code> | Configuration for the stages represented by this deployment branch. |
| <code><a href="#@kikoda/cdk-constructs.IDeploymentBranch.property.staticPipelineIdentifier">staticPipelineIdentifier</a></code> | <code>string</code> | The name to be used by the pipeline stack, it is possible to configure this sperately from the branch name so that updating the branch name does not require destroy/recreate. |

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@kikoda/cdk-constructs.IDeploymentBranch.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

The name of the code branch that this deployment branch represents.

---

##### `stages`<sup>Required</sup> <a name="stages" id="@kikoda/cdk-constructs.IDeploymentBranch.property.stages"></a>

```typescript
public readonly stages: StageConfig[];
```

- *Type:* <a href="#@kikoda/cdk-constructs.StageConfig">StageConfig</a>[]

Configuration for the stages represented by this deployment branch.

---

##### `staticPipelineIdentifier`<sup>Optional</sup> <a name="staticPipelineIdentifier" id="@kikoda/cdk-constructs.IDeploymentBranch.property.staticPipelineIdentifier"></a>

```typescript
public readonly staticPipelineIdentifier: string;
```

- *Type:* string

The name to be used by the pipeline stack, it is possible to configure this sperately from the branch name so that updating the branch name does not require destroy/recreate.

---

## Enums <a name="Enums" id="Enums"></a>

### AlarmLevels <a name="AlarmLevels" id="@kikoda/cdk-constructs.AlarmLevels"></a>

The Alarm levels.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.AlarmLevels.INFO">INFO</a></code> | For general information these are typically the most verbose. |
| <code><a href="#@kikoda/cdk-constructs.AlarmLevels.WARNING">WARNING</a></code> | Events that indicate service degredation, inefficency, and/or non blocking errors. |
| <code><a href="#@kikoda/cdk-constructs.AlarmLevels.CRITICAL">CRITICAL</a></code> | Events that indicate system failures, data loss, and/or blocking errors. |

---

##### `INFO` <a name="INFO" id="@kikoda/cdk-constructs.AlarmLevels.INFO"></a>

For general information these are typically the most verbose.

---


##### `WARNING` <a name="WARNING" id="@kikoda/cdk-constructs.AlarmLevels.WARNING"></a>

Events that indicate service degredation, inefficency, and/or non blocking errors.

---


##### `CRITICAL` <a name="CRITICAL" id="@kikoda/cdk-constructs.AlarmLevels.CRITICAL"></a>

Events that indicate system failures, data loss, and/or blocking errors.

---


### FlagLevel <a name="FlagLevel" id="@kikoda/cdk-constructs.FlagLevel"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.FlagLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.FlagLevel.WARN">WARN</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.FlagLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#@kikoda/cdk-constructs.FlagLevel.FIX">FIX</a></code> | *No description.* |

---

##### `INFO` <a name="INFO" id="@kikoda/cdk-constructs.FlagLevel.INFO"></a>

---


##### `WARN` <a name="WARN" id="@kikoda/cdk-constructs.FlagLevel.WARN"></a>

---


##### `ERROR` <a name="ERROR" id="@kikoda/cdk-constructs.FlagLevel.ERROR"></a>

---


##### `FIX` <a name="FIX" id="@kikoda/cdk-constructs.FlagLevel.FIX"></a>

---


### WellArchitectedAspectsFeatureFlags <a name="WellArchitectedAspectsFeatureFlags" id="@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags.ENABLE_X_RAY_TRACING">ENABLE_X_RAY_TRACING</a></code> | Enable X-Ray Tracing for Lambda functions. |
| <code><a href="#@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags.BLOCK_PUBLIC_BUCKETS">BLOCK_PUBLIC_BUCKETS</a></code> | Define the behavior for regarding public access policies on S3 Buckets. |

---

##### `ENABLE_X_RAY_TRACING` <a name="ENABLE_X_RAY_TRACING" id="@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags.ENABLE_X_RAY_TRACING"></a>

Enable X-Ray Tracing for Lambda functions.

---


##### `BLOCK_PUBLIC_BUCKETS` <a name="BLOCK_PUBLIC_BUCKETS" id="@kikoda/cdk-constructs.WellArchitectedAspectsFeatureFlags.BLOCK_PUBLIC_BUCKETS"></a>

Define the behavior for regarding public access policies on S3 Buckets.

---

