import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

import DefaultButton from '../components/DefaultButton';
import DefaultText from '../components/DefaultText';
import PillTextInput from '../components/PillTextInput';

const AddNewPillScreen = (props) => {
	const [pillReminders, setPillReminders] = useState([]);

	const addPillHandler = () => {
		setPillReminders((currentReminders) => [
			...currentReminders,
			{ id: Math.random().toString(), value: pillTitle },
		]);
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Please Enter Pill Details</Text>
				<View style={styles.inputContainer}>
					<PillTextInput title='Name' />
					<PillTextInput title='Dosage (mg)' keyboardType='number-pad' />
					<PillTextInput title='Quantity' keyboardType='number-pad' />
					<PillTextInput title='Time' />
					<PillTextInput title='Day(s) of Week' />
				</View>
				<View style={styles.saveButton}>
					<DefaultButton title='Save' onPress={addPillHandler} />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff9e9',
	},
	title: {
		fontFamily: 'rubik-medium',
		fontSize: 20,
	},
	saveButton: {
		padding: 15,
	},
	inputContainer: {
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	nameContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	input: {
		borderBottomWidth: 2,
	},
});

export default AddNewPillScreen;
