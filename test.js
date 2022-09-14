import { arrayTypeOf } from '@teamcoder/arraytypeofvalidator';

console.log( "Testing Condition  1 Passed = " + !arrayTypeOf( [ "Hallo " , true ] , [ "string"  ]            ) );
console.log( "Testing Condition  2 Passed = " + !arrayTypeOf( [ "Hallo " , true ] , [ "boolean" ]            ) );
console.log( "Testing Condition  3 Passed = " + arrayTypeOf(  [ "Hallo " , true ] , [ "string" , "boolean" ] ) );