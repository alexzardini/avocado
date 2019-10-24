# AVOCADO CHALLANGER

## Required
- Node.js lts  ([installation instruction](https://nodejs.org/en/download/package-manager))

## We use
- Jest & Enzyme

## Installation

```sh
git clone https://github.com/alexzardini/avocado
cd b3b-front
yarn && yarn run dev # for development
yarn && yarn run build && yarn start # for production
```

## Run :rocket:

#### Test

```bash
yarn run test # test
```

### Development

```bash
yarn run dev # run
```

### Production

```bash
yarn
yarn run build # create .next directory
yarn start # start server
```


## Style :nail_care:

#### Adding CSS in global scope ([components/layout/index.jsx](components/layout/index.js))

```javascript jsx
const Layout = props => (
    // ...
    <style jsx global={true}>{`
        div > * {
            font-size: 32px;
        }
    `}</style>
    // ...
)
```