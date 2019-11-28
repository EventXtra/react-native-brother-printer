#import <React/RCTBridgeModule.h>

#import <BRPtouchPrinterKit/BRPtouchNetworkManager.h>

@interface BrotherPrinter : NSObject <RCTBridgeModule, BRPtouchNetworkDelegate>
{
  BRPtouchNetworkManager *_networkManager;
}
@end
