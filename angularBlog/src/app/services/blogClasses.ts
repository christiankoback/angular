export class BlogTopic{
	iconLocation: string;
	name: string;
	communityURL : string;
}

export class BlogPerson{
	iconLocation: string;
	userID: number;
	name: string;
	userPwd: string;
}

export class BlogMessage{
	message: string;
	messageCreationTime: string;
	userID: number;
}

export class latestBlogMessages{
	blogName: string;
	blogIconLocation: string;
	messages: BlogMessage[];
}