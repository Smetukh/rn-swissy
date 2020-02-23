import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, Button, AsyncStorage } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';

import Input from '../UI/Input';


const ReferralLink = props => {
    const [referralState, referralSetState] = useState(true);

    return (
    <View>
        <TouchableOpacity onPress={() => referralSetState(!referralState)} style={styles.dropdown}>
            <Text style={{color: referralState ? '#909090' : '#333333'}}>
                Have a referral code? (optional)
            </Text>
            
            {referralState && <FontAwesome name="chevron-down" color="#909090" />}
        </TouchableOpacity>

        {!referralState && <View style={styles.internalContent}>
            <Text style={styles.internalText}>
                Enter your referral code then follow the steps below to receive your asset
            </Text>
            <Text style={styles.internalText}>
                NOTE: You will not be able to enter a referral code after account verification.
            </Text>
            <Text style={styles.internalText}>
                1. Complete KYC (Verification process){"\n"}
                2. Receive confirmation of account verification
            </Text>
            <Input 
                id="referral"
                // label="Referral"  
                keyboardType="default"  
                autoCapitalize="none"
                errorText="Please enter a valid referral number"
                onInputChange={props.inputChangeHandler}
                initialValue=""
                placeholder="Enter your referral code here"
                style={styles.inputReferral}
            />
        </View>}
        
        {/* <Collapsible collapsed={referralState}>
            <View>
                <Text>
                Enter your referral code then follow the steps below to receive your asset
                </Text>
            </View>
        </Collapsible> */}
    </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    internalContent: {
        
    },
    internalText: {
        paddingVertical: 5,
        paddingHorizontal: 32,
    },
    inputReferral: {
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: 18,
        
    }
})  

export default ReferralLink;