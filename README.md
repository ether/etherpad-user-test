A tool to check that user defined attributes (username etc. are maintained upon connect/disconnect/rejoin.) and can be changed by the author.

## IMPORTANT
Don't forget to enable user Testing in your Etherpad ``settings.json``.  ``"loadTest":true``

## Basic user Test Example
``etherpad-usertest``

## Specify the Etherpad instance
``etherpad-usertest http://127.0.0.1:9001``

## Test Specific Etherpad Instance for 60 seconds
``etherpad-usertest http://127.0.0.1:9001 -d 60``

## Test a specific Pad
``etherpad-usertest http://127.0.0.1:9001/p/test``

## Parameters
``-a`` number of active authors.

``-d`` duration in seconds to test for.  Default is unlimited.

Basic user test will increase # of authors every 5 seconds until something blows up.

You should modify your tests to your use case.

# License
Apache 2
