import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import InformationRect from '../components/InformationRect';
import InformationBox from '../components/InformationBox';
import { AFFIRMATIONS, TASKS, PILLS } from '../data/dummy-data';
import Colors from '../constants/Colors';

const MainScreen = (props) => {
	const todaysInfoContent = {};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Wellness Feed</Text>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						header='Affirmation of the Day'
						content={AFFIRMATIONS[0]}
						affirmation={true}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						header="Today's Overview"
						content="You have: XXX pills to take and you've submitted your mood XX times so far today"
						style={{ backgroundColor: Colors.blue }}
					/>
				</View>
				<View style={styles.boxContainer}>
					<InformationBox
						header='Next Pill'
						content={`${PILLS[0].title}, ${PILLS[0].time}`}
						onSelect={() => {
							props.navigation.navigate('Pills');
						}}
					/>
					<InformationBox
						header='Mood Tracker'
						content='How are you feeling right now? Click to rate your mood!'
						onSelect={() => {
							props.navigation.navigate('Mood');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						goals={true}
						header='Upcoming Task'
						content={TASKS[0].title}
						onSelect={() => {
							props.navigation.navigate('Tasks');
						}}
					/>
				</View>
				<View style={styles.rectContainer}>
					<InformationRect
						kunde={true}
						header='Learn More about Kunde Social Cafe!'
						style={{ backgroundColor: Colors.blue }}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.background,
	},
	title: {
		fontSize: 30,
		fontFamily: 'rubik-medium',
	},
	titleContainer: {
		paddingHorizontal: 10,
		paddingTop: 20,
	},
	rectContainer: {
		paddingVertical: 5,
		width: '100%',
		alignItems: 'center',
		shadowRadius: 0,
	},
	boxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default MainScreen;
