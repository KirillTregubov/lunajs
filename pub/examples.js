'use strict';

document.addEventListener('DOMContentLoaded', () => {
	new Lunajs().init({
		'targetElement': document.getElementById('example-one')
	});

	new LunaArtboard().init('<div>Dear [Name of Hiring Manager]:</div><div>I would like to express my sincere interest in entering a position as an employee at your company.</div><div>As a recent graduate with experience in one, two, and three, I believe I am a strong candidate for the posted position.</div><div>You mentioned in the listing that you are looking for someone with strong [blank] skills and a [character trait]. As a [program] major at the University of Toronto, a member of [club name], and have multiple side projects with source code available upon request, I have become a skilled programmer with evidence of valuable experience.</div><div>My [list skills and traits] and eagerness to enter the technology business will make me an excellent employee. I would love to begin my career with your company and am confident that I would be a beneficial addition to [company name].</div><div>I have attached my resume to this message and I will call within the following week to try and arrange a time to speak together.</div><div>Thank you so much for your time and consideration.</div><div>Sincerely,</div><div>[Your name]</div><a href="mailto:email@mail.com">Email: email@mail.com</a><a href="tel:5555555555">Cell: (555) 555-5555</a><a href="https://linkedin.com/" target="_blank">LinkedIn</a>', document.getElementById('example-two'));

	new Lunajs().init({
		'targetElement': document.getElementById('example-three'),
		'initialContent': '<h1>A simple instance of Luna.</h1><h2>It supports multiple text boxes.</h2><img src="https://images.unsplash.com/photo-1639793677434-b7c29536388a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="And even images!" alt="And even images!">',
		'disableLaunchpad': true,
		'hideSizeButtons': true,
		'hideExportButton': true
	});

	new Lunajs().init({
		'targetElement': document.getElementById('example-four'),
		'hideSizeButtons': true,
		'hideExportButton': true,
		components: [
			new Component({ name: 'Heading 1', innerHTML: '<h1>A simple instance of Luna.</h1>'}),
			new Component({ name: 'Heading 2', innerHTML: '<h2>It supports multiple text boxes.</h2>'}),
			new Component({ name: 'Image', innerHTML: '<img src="https://images.unsplash.com/photo-1639793677434-b7c29536388a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="And even images!" alt="And even images!">'})
		]
	});

	const lunaInstance = new Lunajs().init({
		'targetElement': document.getElementById('example-five'),
		'hideSizeButtons': true,
		'hideExportButton': true
	});
	lunaInstance.addComponent(new Component({ name: 'Heading 1', innerHTML: '<h1>A simple instance of Luna.</h1>'}));
	lunaInstance.addComponent(new Component({ name: 'Heading 2', innerHTML: '<h2>It supports multiple text boxes.</h2>'}));
	lunaInstance.addComponent(new Component({ name: 'Image', innerHTML: '<img src="https://images.unsplash.com/photo-1639793677434-b7c29536388a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" title="And even images!" alt="And even images!">'}));

	const lunaInstance2 = new Lunajs().init({
		'targetElement': document.getElementById('example-six'),
		'disableLaunchpad': true,
		'hideSizeButtons': true,
		'hideExportButton': true
	});
	lunaInstance2.addControl({
		name: 'my-awesome-controls',
		'aligned': 'left',
		controls: [
			{
				'label': 'My Control',
				'callback': () => alert('Pressed my awesome control.'),
				'setActive': true
			}
		]
	})
});
