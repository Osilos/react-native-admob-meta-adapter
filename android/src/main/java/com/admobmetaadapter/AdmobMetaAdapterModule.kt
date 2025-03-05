package com.admobmetaadapter

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = AdmobMetaAdapterModule.NAME)
class AdmobMetaAdapterModule(reactContext: ReactApplicationContext) :
  NativeAdmobMetaAdapterSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun setAdvertiserTrackingEnable() {
    //android don't need any implementation here.
  }

  override fun setAdvertiserTrackingDisable() {
    //android don't need any implementation here.
  }

  companion object {
    const val NAME = "AdmobMetaAdapter"
  }
}
