/**
 * claudiaProfile
 * @description
 * @author Claudia
 *
 * Need help using JSDoc? Find out more at http://usejsdoc.org/
 */

'use-strict';

// their code e.g. npm modules
import ready from 'lite-ready'; /* DOM ready */
import SwiftClick from 'swiftclick'; /* https://github.com/munkychop/swiftclick */
import $$ from 'double-dollar'; /* https://github.com/mrmartineau/double-dollar */

// Bundle global libs that don't return a value
import 'console';

// Lazyload & responsive images - https://github.com/aFarkas/lazysizes
// import 'lazysizes/plugins/respimg/ls.respimg';
// import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
// our code
// this is a test, uncomment the line below to try it
// import moduleTest from './modules/module-test';

window.$$ = $$;

// DOM ready code goes in here
ready(() => {
	const swiftclick = SwiftClick.attach(document.body);
	swiftclick.useCssParser(true);
	// moduleTest(); // this is a test, uncomment this line & the line above to try it
});
