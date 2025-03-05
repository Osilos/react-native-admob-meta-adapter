import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setAdvertiserTrackingEnable(): void;
  setAdvertiserTrackingDisable(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AdmobMetaAdapter');
