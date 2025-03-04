#import "AdmobMetaAdapter.h"
#import <FBAudienceNetwork/FBAdsettings.h>


@implementation AdmobMetaAdapter
RCT_EXPORT_MODULE()


- (void) setConsent:(BOOL)value {
    if (value) {
        [FBAdSettings setAdvertiserTrackingEnabled:YES];
    }
  else {
    [FBAdSettings setAdvertiserTrackingEnabled:NO];
  }
}


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAdmobMetaAdapterSpecJSI>(params);
}

@end
