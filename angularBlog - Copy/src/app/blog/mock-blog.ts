import { latestBlogMessages } from './blogClasses';

export const BLOGMESSAGELIST: latestBlogMessages[] = [
	{blogName:"django", blogIconLocation: "assets/images/programLanguages/django.svg", messages: [
		{ messageCreationTime:"21:04:2019:13:14:49", message:"hello", userID:1},
		{ messageCreationTime:"21:04:2019:13:15:01", message:"hi stranger", userID:0},
		{ messageCreationTime:"21:04:2019:13:15:13", message:"Nice to meet you!", userID:1},
		{ messageCreationTime:"22:04:2019:13:15:31", message:"did you get that project done?", userID:0},
		{ messageCreationTime:"23:04:2019:13:15:45", message:"NO!!!!", userID:1}
	]},
	{blogName:"html5", blogIconLocation: "assets/images/programLanguages/HTML5.png", messages: [
		{ messageCreationTime:"21:04:2019:13:14:49", message:"hello", userID:1},
		{ messageCreationTime:"21:04:2019:13:15:01", message:"hi stranger", userID:0}
	]}
];