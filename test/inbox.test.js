const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile');

//Ganache is a localized etheruim blockchain or provider
const web3 = new Web3(ganache.provider());


let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

//   console.log(JSON.parse(interface));

  // use one to deploy the contract
//   inbox = await new Web3.eth.Contract(JSON.parse(interface))
//     .deploy({data: bytecode, arguments: ['Hi There']})
//     .send({from: accounts[0], gas: 1000000});


});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
    console.log(inbox);
  });
});

