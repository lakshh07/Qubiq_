import { ethers } from "ethers";
import { subscribeContractAddress } from "../contract_address.json";
import contractAbi from "../contracts/ABI/Subscribe.json";

async function getContractSigner() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(subscribeContractAddress, contractAbi, signer);

  return contract;
}

async function getContractProvider() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(subscribeContractAddress, contractAbi, provider);

  return contract;
}

async function getAccount() {
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return account;
}

export { getContractSigner, getContractProvider, getAccount };
