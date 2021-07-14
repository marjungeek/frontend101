// Core Types
// Type Assignment & Type Inference
let input1: string; // assigned type
let input2 = 'I am a string'; // inference

// Object Type

// Inference
// let member = {
//   name: 'RJ',
//   team: 1
// };

// Assigned
let member: {
  name: string;
  team: number;
  skills: string[]; // Array Type
};

member = {
  name: 'RJ',
  team: 1,
  skills: ['DEV']
}

console.log(member.skills);

// Custom Type
interface Member {
  name: string;
  team?: number; // optional property
  skills?: string[]; // optional property
}

let member2: Member;
member2 = { name: 'RJ' }

// Union Type
let var1: string | number;

var1 = 'hello';
var1 = 1;
// var1 = true;

// Custom Type
type Combination = string | number;

let var2: Combination;

var2 = 'hello';
var2 = 2;
// var2 = false;

// Function Type void

function add(num1: number, num2: number): void {
  console.log(+num1 + +num2);
  // return;
}

// Function Type never
function throwError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

// let c = throwError('Got an error', 1000); // --- stop execution

// Unknown Type - similar to `any` but restrictive
let abc: unknown;
let myName: string;

abc = 1;
abc = 'im a string';

if (typeof abc === 'string') {
  myName = abc;
}

interface LoginResponse {
  statusCode: number;
  message: string;
}

function sendLogin(username: string, password: string): LoginResponse {
  return { statusCode: 200, message: 'Success!'};
}

let response = sendLogin('ghuser', 'secret');

if (response.statusCode === 200 ) {
  console.log('success');
}
