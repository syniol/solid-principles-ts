# Dependency Inversion
the dependency inversion principle is a specific methodology for loosely coupling software modules. 
When following this principle, the conventional dependency relationships established from high-level, 
policy-setting modules to low-level, dependency modules are reversed, thus rendering high-level 
modules independent of the low-level module implementation details. The principle states:

 * High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
 * Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

> By dictating that both high-level and low-level objects must depend on the same abstraction, 
this design principle inverts the way some people may think about object-oriented programming


## Relevant Patterns
 * __Dependency Injection__
 * __Adapter Pattern__
 * __Bridge Pattern__


## Scenario: Document Upload Service 
We have two microservices that are being triggered on daily bases and using 
service created to handle upload to AWS S3. We wish to use this library in 
microservices deployed on Azure and legacy on premise servers for disaster 
strategy.

<div style="text-align:center">
   <img alt="Diagram for Scenario of refactoring" src="https://raw.githubusercontent.com/syniol/solid-principles-ts/main/diagrams/dependency-inversion.drawio.svg?sanitize=true">
</div>

## Background
Imagine a scenario where in our code base we have a service to store files
which is currently tied to AWS S3. Every file upload in our code base uses
this service to call AWS S3 `putObject` action.


## Overview
At the moment we have a service `storage.service.ts`, that is closely 
coupled with upload service. In case of change of dependency; we then 
need to refactor many services and due to instantiation of dependency 
inside a method we also are unable to test our service.


## Objective
Create a storage service that doesn't require constant refactoring 
for change of dependency on Cloud Provider. It should by default use 
File System library of Node unless a new adapter is given.


## Acceptance Criteria
 * It should follow a same abstract layer for Upload action for Storage
 * It should have the following Adapters:
    * Microsoft Azure Storage
    * Amazon S3
    * Native Node FileSystem _(Default)_


#### Credits
Copyright &copy; Syniol Limited. All rights reserved.
