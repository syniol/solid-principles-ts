# Interface Segregation Principle
In the field of software engineering, the interface-segregation principle 
(ISP) states that no client should be forced to depend on methods it does 
not use. ISP splits interfaces that are very large into smaller and more 
specific ones so that clients will only have to know about the methods 
that are of interest to them. Such shrunken interfaces are also called 
role interfaces. ISP is intended to keep a system decoupled and thus easier 
to refactor, change, and redeploy. ISP is one of the five SOLID principles 
of object-oriented design, similar to the High Cohesion Principle of GRASP.


## Relevant Patterns
* __Dependency Injection__
* __Adapter Pattern__
* __Bridge Pattern__


## Scenario: IoT in Farming
In this farm we have integrated all devices working on farm with Arduino chip
and using Node.js compatible library to connect to all devices. All devices are
connected to Wi-Fi and accessible through one controller service.


## Background
Imagine a scenario where you have created an application for an IoT Farming 
project that integrated with a Drone that sprays the field, a robot to pick 
fruits and finally a tractor that works around and inside the field. In this
example we use [CylonJS](https://cylonjs.com) to in our controller to interact
with [Arduino](https://www.arduino.cc) integrated in all our devices.


## Overview
At the moment we have an API endpoint given through `controller.ts`. This API 
service _(Abstract Class)_ been extended by all IoT enabled devices:

 * Drone
 * Robot
 * Tractor

Given controller provides universal access signal to all integrated devices. 
Instantiated service for Drone would also include Fuel Level where only applicable 
to tractor as Robots and Drones use battery to power up.


## Objective
We need to implement an Interface Segregation principle where common methods are 
grouped in an abstract layer and defined with an interface designated to each API. 


## Acceptance Criteria
* It should follow a same abstract layer for Upload action for Storage
* It should have the following Adapters:
    * Microsoft Azure Storage
    * Amazon S3
    * Native Node FileSystem _(Default)_


#### Credits
Copyright &copy; Syniol Limited. All rights reserved.
