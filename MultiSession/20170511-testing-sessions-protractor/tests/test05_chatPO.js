// test05_chatPO.js
'use strict';
/// <reference path="./steps.d.ts" />



// TESTS
Feature('CodeceptJS sessions testing 05');

let runUserBehavior = async function runUserBehavior(I, statefulChatPage, name, text, isAppend=false ) {
	await statefulChatPage.go();
	await statefulChatPage.validate();

	let conversationItemCount = await statefulChatPage.getNrOfConversationItems();
	let lastMessage = await statefulChatPage.getLastMessage();

	console.log( "We found conversation size=" + conversationItemCount + " items" );
	console.log( "Last message: ", lastMessage );

	// now post our reply
	let newText;
	if ( isAppend )
		newText = lastMessage + text;
	else
		newText = text;

	await statefulChatPage.post( name, newText );
};

let makeOptions = function(x,y,width,height) {
	return {
		desiredCapabilities: {
			chromeOptions: {
				args: [
					"--window-position="+x+","+y,
					"--window-size="+width+","+height
				]
			}
		}
	};
};



Scenario('two session - stateful app and POs', async (I, statefulChatPage) => {

	let name = "default";
	let text = "Hello!";

	// first session:
	await runUserBehavior(I, statefulChatPage, name, text);

	//I.seeTextEquals( name, locConversationItemField2 );
	//I.seeTextEquals( text, locConversationItemField3 );

	// second etc sessions
	let sessionNames = [ "second", "third" ];

	let id = 1;
	let count = sessionNames.length + 1;
	for ( const sessionName of sessionNames ) {

		let sessionOpts = makeOptions(id*1000, 100, 1000,800);

		await session(sessionName, sessionOpts, async () => {
			return await runUserBehavior(I, statefulChatPage, sessionName, id.toString(), true );
		});
		id++;
	}

});
