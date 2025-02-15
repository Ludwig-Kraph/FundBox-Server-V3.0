fundbox-server/
├── config/
│   ├── default.json
│   ├── db.js
├── contracts/
│   ├── GenToken.sol
│   ├── SwapPool.sol
│   ├── AutoGen.sol
│   ├── Migrations.sol
├── migrations/
│   ├── 1_initial_migration.js
│   ├── 2_deploy_tokens.js
│   ├── 3_deploy_pool.js
├── src/
│   ├── controllers/
│   │   ├── generateController.js
│   │   ├── swapController.js
│   │   ├── transferController.js
│   ├── routes/
│   │   ├── generateRoutes.js
│   │   ├── swapRoutes.js
│   │   ├── transferRoutes.js
│   ├── services/
│   │   ├── ethService.js
│   │   ├── skrillService.js
│   │   ├── tokenService.js
│   ├── index.js
├── scripts/
│   ├── deployContracts.js
│   ├── fundLiquidity.js
│   ├── setupServer.sh
├── tests/
│   ├── tokenTests.js
│   ├── swapTests.js
├── .env
├── package.json
├── hardhat.config.js
├── README.md
