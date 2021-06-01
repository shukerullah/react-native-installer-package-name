import { NativeModules, Platform } from 'react-native';

const { InstallerPackageName } = NativeModules;

const InstallerSource = {
    /**
     * Callback that handles the response
     *
     * @callback responseCallback
     * @param {*} response - The callback that handles the response
     */
    
    /**
     * The function getInstallerPackageName(). Retrieve the package name of the application that installed a package. This identifies which market the package came from.
     * 
     * @param {responseCallback} [callback=null] - A callback to run
     */
    getInstallerPackageName(callback = Function) {
        if(Platform.OS == "ios") {
            callback("com.apple.MobileStore");
            return;
        }

        if(Platform.OS == "android") {
            try {
                InstallerPackageName.getInstallerPackageName(callback);
            } catch (err) {
                callback(err);
            }
            return;
        }

        callback("UNKNOWN SOURNCE");
    }
}

export default InstallerSource;
