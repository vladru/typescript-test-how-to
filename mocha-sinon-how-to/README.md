# Typescript testing HowTo
Examples of implementation of frequently used tasks for testing of Typescript code in Mocha/Sinon

## Install
yarn install

## Run tests
yarn test

## Configure project in IntelliJ Idea
File -> Settings (Ctrl+Alt+S)
* turn on Automatic ESLint configuration 
* add '--require ts-node/register' Extra Mocha option to a Run/Debug configuration for test

## Test actions
* mock class constructor
* call original constructor in class mock
* mock class method 
* access to private fields of original instance in method mock
 