#import "AdmobMetaAdapter.h"
#import <FBAudienceNetwork/FBAdsettings.h>


@implementation AdmobMetaAdapter
RCT_EXPORT_MODULE()


- (void) setAdvertiserTracking:(nonnull NSNumber *)value {
    BOOL consentValue = [value boolValue]; 
    [FBAdSettings setAdvertiserTrackingEnabled:consentValue];
}


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAdmobMetaAdapterSpecJSI>(params);
}

@end
