if (typeof web3 !== "undefined"){
    web3 = new Web3(web3.currentProvider);
}
else{
    var Web3 = require('web3');

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8888"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
//console.log(web3.eth.defaultAccount.value);
//console.log(web3.eth.accounts);
var insuranceContract =  web3.eth.contract(
	[
		{
			"constant": true,
			"inputs": [
				{
					"name": "_customerWalletAddress",
					"type": "address"
				},
				{
					"name": "_CustomerPassword",
					"type": "string"
				}
			],
			"name": "CustomerLogin",
			"outputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_patientAddress",
					"type": "address"
				},
				{
					"name": "_amount",
					"type": "int256"
				},
				{
					"name": "_description",
					"type": "string"
				}
			],
			"name": "generatebBillforpatient",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_customerWalletAddress",
					"type": "address"
				},
				{
					"name": "_policyId",
					"type": "int256"
				},
				{
					"name": "_billId",
					"type": "int256"
				}
			],
			"name": "applyforclaim",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"name": "claims",
			"outputs": [
				{
					"name": "exists",
					"type": "bool"
				},
				{
					"name": "claimId",
					"type": "int256"
				},
				{
					"name": "billId",
					"type": "int256"
				},
				{
					"name": "amount",
					"type": "int256"
				},
				{
					"name": "description",
					"type": "string"
				},
				{
					"name": "claimApproved",
					"type": "bool"
				},
				{
					"name": "claimSettled",
					"type": "bool"
				},
				{
					"name": "settlementamount",
					"type": "uint256"
				},
				{
					"name": "customerWalletAddress",
					"type": "address"
				},
				{
					"name": "insuranceCompanyAddress",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_insuranceCompanyWalletAddress",
					"type": "address"
				},
				{
					"name": "_premiumtobepaid",
					"type": "uint256"
				}
			],
			"name": "paypremium",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "registeredhospitals",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_customerName",
					"type": "string"
				},
				{
					"name": "_customerWalletAddress",
					"type": "address"
				},
				{
					"name": "_CustomerPassword",
					"type": "string"
				}
			],
			"name": "registerasacustomer",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_claimId",
					"type": "int256"
				}
			],
			"name": "DisburseClaimamount",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "hospitalmapping",
			"outputs": [
				{
					"name": "isalreadyexisting",
					"type": "bool"
				},
				{
					"name": "hospitalName",
					"type": "string"
				},
				{
					"name": "hospitalregnum",
					"type": "int256"
				},
				{
					"name": "hospitalWalletAddress",
					"type": "address"
				},
				{
					"name": "numverifications",
					"type": "int256"
				},
				{
					"name": "hospitalPassword",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "AllPolicyID",
			"outputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getCustomerAddress",
			"outputs": [
				{
					"name": "",
					"type": "address[]"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_hospitaladdress",
					"type": "address"
				}
			],
			"name": "verifyhospital",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				},
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "claimsLinkedtoInsuranceCompany",
			"outputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "policyId",
					"type": "int256"
				}
			],
			"name": "applyforinsurance",
			"outputs": [],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "inusranceCompaniesmappingwithregnum",
			"outputs": [
				{
					"name": "isalreadyexisting",
					"type": "bool"
				},
				{
					"name": "insuranceCompanyName",
					"type": "string"
				},
				{
					"name": "insuranceCompanyWalletAddress",
					"type": "address"
				},
				{
					"name": "insuranceCompanyregnum",
					"type": "uint256"
				},
				{
					"name": "insuranceCompanyPassword",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "insuranceCompanies",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "hospitals",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "UserAddress",
					"type": "address"
				}
			],
			"name": "AddressExist",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "insuranceCompaniesmapping",
			"outputs": [
				{
					"name": "isalreadyexisting",
					"type": "bool"
				},
				{
					"name": "insuranceCompanyName",
					"type": "string"
				},
				{
					"name": "insuranceCompanyWalletAddress",
					"type": "address"
				},
				{
					"name": "insuranceCompanyregnum",
					"type": "uint256"
				},
				{
					"name": "insuranceCompanyPassword",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"name": "policiesAvailable",
			"outputs": [
				{
					"name": "alreadyexits",
					"type": "bool"
				},
				{
					"name": "policyName",
					"type": "string"
				},
				{
					"name": "policyId",
					"type": "int256"
				},
				{
					"name": "insuraceCompanyregnum",
					"type": "uint256"
				},
				{
					"name": "insuranceCompanyName",
					"type": "string"
				},
				{
					"name": "insuranceCompanyAddress",
					"type": "address"
				},
				{
					"name": "premiumtobepaid",
					"type": "uint256"
				},
				{
					"name": "suminsuredbypolicy",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_nameofInsuranceCompany",
					"type": "string"
				},
				{
					"name": "_insuranceCompanyWalletAddress",
					"type": "address"
				},
				{
					"name": "_insuranceCompanyPassword",
					"type": "string"
				}
			],
			"name": "addInsuranceCompany",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "customerData",
			"outputs": [
				{
					"name": "alreadyexits",
					"type": "bool"
				},
				{
					"name": "customerName",
					"type": "string"
				},
				{
					"name": "customerWalletAddress",
					"type": "address"
				},
				{
					"name": "CustomerPassword",
					"type": "string"
				},
				{
					"name": "policyId",
					"type": "int256"
				},
				{
					"name": "premiumdue",
					"type": "uint256"
				},
				{
					"name": "paidpremium",
					"type": "bool"
				},
				{
					"name": "suminsuredbypolicy",
					"type": "uint256"
				},
				{
					"name": "appliedForClaim",
					"type": "bool"
				},
				{
					"name": "billId",
					"type": "int256"
				},
				{
					"name": "claimSettled",
					"type": "bool"
				},
				{
					"name": "claimId",
					"type": "int256"
				},
				{
					"name": "verifiedUser",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getPolicyArray",
			"outputs": [
				{
					"name": "",
					"type": "int256[]"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_PatientAddress",
					"type": "address"
				}
			],
			"name": "VerifyPatient",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_claimId",
					"type": "int256"
				},
				{
					"name": "_settlementamount",
					"type": "uint256"
				}
			],
			"name": "verifyCLaim",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "AllAddress",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getRegisteredHospitals",
			"outputs": [
				{
					"name": "",
					"type": "address[]"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"name": "billmapping",
			"outputs": [
				{
					"name": "billId",
					"type": "int256"
				},
				{
					"name": "amount",
					"type": "int256"
				},
				{
					"name": "patientAddress",
					"type": "address"
				},
				{
					"name": "_hospitalwalletaddress",
					"type": "address"
				},
				{
					"name": "description",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_hospitalName",
					"type": "string"
				},
				{
					"name": "_hospitalregnum",
					"type": "int256"
				},
				{
					"name": "_hospitalWalletAddress",
					"type": "address"
				},
				{
					"name": "_hospitalPassword",
					"type": "string"
				}
			],
			"name": "registerhospital",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_policyName",
					"type": "string"
				},
				{
					"name": "_policyId",
					"type": "int256"
				},
				{
					"name": "_ICregnum",
					"type": "uint256"
				},
				{
					"name": "_insuranceCompanyWalletAddress",
					"type": "address"
				},
				{
					"name": "_premiumtobepaid",
					"type": "uint256"
				},
				{
					"name": "_suminsuredbypolicy",
					"type": "uint256"
				}
			],
			"name": "addnewpolicy",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "verifiedhospitals",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_hospitalWalletAddress",
					"type": "address"
				},
				{
					"name": "_hospitalPassword",
					"type": "string"
				}
			],
			"name": "HospitalLogin",
			"outputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "AllCustomers",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_insuranceCompanyWalletAddress",
					"type": "address"
				},
				{
					"name": "_insuranceCompanyPassword",
					"type": "string"
				}
			],
			"name": "InsuranceCompanyLogin",
			"outputs": [
				{
					"name": "",
					"type": "int256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		}
	]
);	//change with your ABI
//change with your address

var insurance = insuranceContract.at("0x49D3247c4e3EBF512b1F04BAe08cA8473e326185");


