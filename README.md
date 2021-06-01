# react-native-installer-package-name

## Installation

**npm:**

    npm install react-native-installer-package-name --save

**Yarn:**

    yarn add react-native-installer-package-name

## Usage
```javascript
import InstallerPackageName from 'react-native-installer-package-name';
InstallerPackageName.getInstallerPackageName((response) => {
    console.log(response);
});
```

## Note
__iOS:__ It will always return `com.apple.MobileStore`.

__Android:__
    * null - developer
    * com.android.vending - google play
    * com.amazon.venezia - amazon app
    * com.sec.android.app.samsungapps - samsung app store
    * com.huawei.appmarket - huawei app gallery
    
__UNKNOWN SOURCE:__ If platform is not iOS or Android.