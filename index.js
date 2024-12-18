import { NativeEventEmitter, NativeModules } from 'react-native';

const { CallDetection } = NativeModules;
const eventEmitter = new NativeEventEmitter(CallDetection);

export const startCallListener = (onStateChange) => {
    const subscription = eventEmitter.addListener(
        'onCallStateChanged',
        onStateChange,
    );
    CallDetection.startListening();
    return () => {
        subscription.remove();
        CallDetection.stopListening();
    };
};
