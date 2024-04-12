import React, { useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { requestPurchase, useIAP ,initConnection} from 'react-native-iap';
import { constants } from 'app/utils/constants'

const InAppPayment = () => {
    const {
        connected,
        products,
        promotedProductsIOS,
        subscriptions,
        purchaseHistory,
        availablePurchases,
        currentPurchase,
        currentPurchaseError,
        initConnectionError,
        finishTransaction,
        getProducts,
        getSubscriptions,
        getAvailablePurchases,
        getPurchaseHistory,
    } = useIAP();
    
    const handlePurchase = async (sku: string) => {
        console.log(sku,'sku------------');
        
        if (Platform.OS === 'ios') {
         const payemntIsRequest =  await requestPurchase({sku});
      } else if (Platform.OS === 'android') {
        const payemntIsRequest =   await requestPurchase({ skus: [sku] });
      const finishTransactionData =   await finishTransaction({
            purchase:payemntIsRequest[0],
            isConsumable:true,
            developerPayloadAndroid:payemntIsRequest[0]?.developerPayloadAndroid
        })
        console.log(finishTransactionData,'finishTransactionData--------------------------',payemntIsRequest)
      }
      };

    useEffect(() => {
        // ... listen to currentPurchaseError, to check if any error happened
        console.log(currentPurchaseError,'currentPurchaseError:-----------');
        initConnection();
    }, [currentPurchaseError]);

    useEffect(() => {
        // ... listen to currentPurchase, to check if the purchase went through
        handleCurrentPurchase()
        console.log(currentPurchase,'currentPurchasecurrentPurchase:-----------');
       
    }, [currentPurchase]);
    console.log(products,'products-------------------')
    
const handleCurrentPurchase = async() => {
    if(!!currentPurchase){
        const finishTransactionData =   await finishTransaction({
            purchase:currentPurchase,
            isConsumable:true,
            developerPayloadAndroid:currentPurchase.developerPayloadAndroid
        })
        console.log(finishTransactionData,'---------finishTransactionData--------------------------')
    }
}
    return (
        <>
            <Button
                title="Get the products"
                onPress={() => {
                    console.log(constants.productSkus,'constants.productSkus000000000-------');
                    
                    getProducts({ skus: constants.productSkus })}
                }
            />

            {products.map((product) => (
                <View key={product.productId}>
                    <Text>{product.productId}</Text>

                    <Button
                        title={product.title}
                        onPress={() => handlePurchase(product.productId)}
                    />
                </View>
            ))}
        </>
    );
};
export default InAppPayment