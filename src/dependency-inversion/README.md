# Dependency Inversion
A falsis, abaculus fatalis barcas. Superbus racanas ducunt ad zirbus.


## Relevant Patterns
 * __Dependency Injection__
 * __Adapter Pattern__
 * __Bridge Pattern__


## Background
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
