import { CfnElement, IResource, Stack } from 'aws-cdk-lib';
import { CloudAssembly } from 'aws-cdk-lib/cx-api';

export function getLogicalId(stack: Stack, resource: IResource) {
  return stack.getLogicalId(resource.node.findChild('Resource') as CfnElement);
}

export function getInfoAnnotations(casm: CloudAssembly) {
  return getMetadata(casm, 'info');
}

export function getWarningAnnotations(casm: CloudAssembly) {
  return getMetadata(casm, 'warning');
}

export function getErrorAnnotations(casm: CloudAssembly) {
  return getMetadata(casm, 'error');
}

function getMetadata(casm: CloudAssembly, type: string) {
  const result = new Array<{ path: string; message: string }>();
  for (const stack of Object.values(casm.manifest.artifacts ?? {})) {
    for (const [path, md] of Object.entries(stack.metadata ?? {})) {
      for (const x of md) {
        if (x.type === `aws:cdk:${type}`) {
          result.push({ path, message: x.data as string });
        }
      }
    }
  }
  return result;
}
