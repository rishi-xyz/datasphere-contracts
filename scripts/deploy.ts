import { ethers } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("Upload");
  const contract = await ContractFactory.deploy();

  const deploymentTransaction = await contract.deploymentTransaction()?.wait();
  console.log(`Contract deployed to: ${deploymentTransaction?.contractAddress}`);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exit(1);
});
