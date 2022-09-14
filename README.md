# Array Type Of Validator
This module is small but easy to use. The purpose of this module is to check if the source array values is of specified types.
## Validation Processes
The code checks that the source array contains the value type specified. The types this module can checked is determined by the version of @teamcoder/typevalidator is specified.
### Compare method
This method loops thru each value in the source array compares it to types specified.
## Code Sample
This following code is to tested that all methods correctly functions as intended, is also provided in this module.
```
import { arrayTypeOf } from '@teamcoder/arraytypeofvalidator';

console.log( "Testing Condition  1 Passed = " + !arrayTypeOf( [ "Hallo " , true ] , [ "string"  ]            ) );
console.log( "Testing Condition  2 Passed = " + !arrayTypeOf( [ "Hallo " , true ] , [ "boolean" ]            ) );
console.log( "Testing Condition  3 Passed = " + arrayTypeOf(  [ "Hallo " , true ] , [ "string" , "boolean" ] ) );
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { Array          } source         The source array to compare
@param  { String , Array } type           The type(s) to compare with
```
### Parameters Returned
```
@return { Boolean         }               Validation passed or failed
@return { Null            }               type is not valid
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \arraytypeofvalidator\arraytypeofvalidator.js:1
import { arrayTypeOf } from '@teamcoder/arraytypeofvalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 04 September 2022      | Official first release                                                                                |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/biggerarraytypeofvalidatorvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
ArrayTypeOfValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)