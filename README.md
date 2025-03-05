# react-native-admob-meta-adapter

Wrapper of meta adapter for admob mediation.

This should be used with Google Mobile Ads (Admob) : https://github.com/invertase/react-native-google-mobile-ads
Follow their step of installation and configuration before installing this package.

Follow the step for android and ios integration of meta as a mediation partner for admob:
- https://developers.google.com/admob/android/mediation/meta
- https://developers.google.com/admob/ios/mediation/meta

When the admob guide ask you to install package or write you this librairy instead.


## Installation

```sh
# Install the admob module
npm install react-native-google-mobile-ads

# Install the meta adapter for admob mediation
npm install react-native-admob-meta-adapter
```

## Expo User

For expo user, this librairy only works for development build, it didn't work in Expo Go.

## Usage


```js
import AdmobMetaAdapter from 'react-native-admob-meta-adapter';

AdmobMetaAdapter.setAdvertiserTrackingEnable();

AdmobMetaAdapter.setAdvertiserTrackingDisable();

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
