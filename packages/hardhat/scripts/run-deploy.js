const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const SubscribeContract = await hre.ethers.getContractFactory("Subscribe");
  const subscribeContract = await SubscribeContract.deploy();

  await subscribeContract.deployed();
  console.log("Subscribe Contract address:", subscribeContract.address);

  const contract_address = JSON.stringify({
    SubscribeAddress: subscribeContract.address,
  });

  fs.writeFileSync(
    `${__dirname}/../../react-app/src/contract_address.json`,
    contract_address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
