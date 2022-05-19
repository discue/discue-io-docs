
<p align="center"><a href="https://www.discue.io/" target="_blank" rel="noopener noreferrer"><img width="128" src="https://www.discue.io/icons-fire-no-badge-square/web/icon-192.png" alt="Vue logo"></a></p>

# api-docs
discue.io API documentation repository.

## Installation
```bash
git clone https://github.com/discue/api-docs
```

## Development
### Run
Runs and serves the application in development mode.
```bash
./run-dev.sh
```

### Build
Build the application with production mode.
```bash
./build.sh
```

### Releases new patch version
**Release versions must be in sync with API versions.**

```bash
npm run release
```

### Releases new minor version
**Release versions must be in sync with API versions.**

```bash
npm run release-minor
```

### Deploy
Deploy the current state to **production**. Push to branch `deploy`, which will automatically build and deploy the current version to production. Or run ...

```bash
./deploy.sh
```

### Update API Reference
Convert the internal OpenAPI file to VuePress compatible Markdown. **Requires** 
```
cd ..
git clone https://github.com/discue/openapi3-to-vuepress2-markdown
git clone https://github.com/discue/discue-io-api
cd api-docs
./generate-api-doc-local.sh
```

## Continuous integration
### Tests
Builds and tests the application whenever a new commit was pushed.

### Releases
Creates a GitHub release whenever a new tag was pushed.

### Deploy
Builds and deploys the application to production whenever branch `deploy` was updated.

### Stale
Closes stale issues and PRs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

