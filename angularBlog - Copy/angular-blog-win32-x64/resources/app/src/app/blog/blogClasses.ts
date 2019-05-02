class blogMessage{
	messageCreationTime: string;
	message: string;
	userID: number;
}
export class latestBlogMessages{
	blogName: string;
	blogIconLocation: string;
	messages: blogMessage[];	
}