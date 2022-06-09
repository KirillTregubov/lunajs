'use strict';

document.addEventListener('DOMContentLoaded', () => {
	new Lunajs().init({
		'initialContent': document.body.innerHTML,
		'targetElement': document.getElementById('device-screen'),
		'disableLaunchpad': true,
		'useStylesheets': true
	});
});
