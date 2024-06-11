import { KikodaOpenSourceProject } from '@kikoda/projen-templates';
import { YamlFile } from 'projen';
import { AwsCdkConstructLibrary } from 'projen/lib/awscdk';
import { GithubCredentials } from 'projen/lib/github';
import { ArrowParens, EndOfLine, TrailingComma } from 'projen/lib/javascript';

const project = new AwsCdkConstructLibrary({
  name: 'kikoda-cdk-constructs',
  description:
    'Collection of useful platform constructs for modern applications deployed with AWS CDK',
  author: 'Kikoda, LLC',
  authorAddress: 'platform@kikoda.com',
  repositoryUrl: 'https://github.com/KikodaCode/kikoda-cdk-constructs.git',
  packageName: '@kikoda/cdk-constructs',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'awscdk', 'compliance', 'configuration', 'websites', 'scaffolding', 'cicd'],
  stability: 'experimental',
  license: 'Apache-2.0',
  cdkVersion: '2.145.0',
  projenrcTs: true,
  devContainer: true,
  vscode: true,
  docgen: true,
  codeCov: true,
  pullRequestTemplate: false,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.AVOID,
      endOfLine: EndOfLine.LF,
    },
  },
  tsconfig: {
    compilerOptions: { esModuleInterop: true },
  },
  deps: ['@kikoda/generated-config'] /* Runtime dependencies of this module. */,
  peerDeps: ['@kikoda/generated-config'] /* Peer dependencies of this module. */,
  bundledDeps: [
    'esbuild',
    '@yarnpkg/esbuild-plugin-pnp',
    'lodash@4.17.21',
    'fs-extra',
    'minimatch',
  ] /* Dependencies that must be bundled into this module. */,
  devDeps: [
    '@kikoda/generated-config',
    '@kikoda/projen-templates',
    '@types/md5',
    '@types/uuid',
    '@types/lodash@4.14.191',
    '@types/fs-extra',
    'delay',
  ] /* Build dependencies for this module. */,
  gitignore: ['test/dist/spa_local_build_artifact'],
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['projen-workflows[bot]'],
  },
  jestOptions: {
    jestConfig: {
      coveragePathIgnorePatterns: ['/node_modules/', 'test/util.ts'],
    },
  },
  dotnet: {
    dotNetNamespace: 'Kikoda.CdkConstructs',
    packageId: 'Kikoda.CdkConstructs',
  },
});

/**
 * Unable to upgrade to `jsii@5` and `jsii-rosetta@5` because of inclusion of
 * generic types.
 *
 * Generic types are not supported in all jsii target languages so `jsii@5`
 * reports generic types as a compilation error instead of silently ignoring
 * them as is done in `jsii@1.x`.
 *
 * @ref https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#typescript-mapped-types
 */
project.tasks.addEnvironment('JSII_SUPPRESS_UPGRADE_PROMPT', 'true');

new YamlFile(project, 'codecov.yml', {
  obj: {
    coverage: {
      status: {
        patch: true,
      },
    },
  },
});

new KikodaOpenSourceProject(project, {
  title: 'Kikoda CDK Constructs Library',
});

project.synth();
