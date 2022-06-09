'use strict';

(function (global, document) {

	// Source start: https://heroicons.com/
	const LUNA_PLUS_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>';
	const LUNA_EDIT_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>'
	// Source end

	const _artboardBase = document.createElement('div');
	const _artboardIds = {
		'baseId': 'luna-artboard',
		'menuId': 'luna-artboard-menu',
		'viewerId': 'luna-artboard-viewer',
		'artboardContainerClass': 'luna-artboard-container',
		'artboardPreviewClass': 'luna-artboard-preview',
		'artboardCreateClass': 'luna-artboard-create',
		'viewerVisibleClass': 'luna-artboard-viewer-visible'
	}
	const _artboardMenu = document.createElement('div');
	const _artboardViewer = document.createElement('div');
	let _currentArtboard = null;
	let _initialContent = null;

	function LunaArtboard() {
		this.artboards = [];
		this.lunaInstance = null;
	}

	LunaArtboard.prototype = {
		/**
		 * Initializer function.
		 */
		init: function (initialContent = null, targetElement = null) {
			_initialContent = initialContent;

			_artboardBase.id = _artboardIds.baseId;
			_artboardMenu.id = _artboardIds.menuId;
			_artboardViewer.id = _artboardIds.viewerId;
			_artboardViewer.style.display = 'none';

			const returnContainer = document.createElement('div');
			const returnButton = document.createElement('button');
			returnButton.textContent = 'Return to Artboards';
			returnButton.addEventListener('click', (e) => {
				this.closeArtboard();
			})
			returnContainer.appendChild(returnButton);
			_artboardViewer.appendChild(returnContainer);

			// Preview title
			const previewContainer = document.createElement('div');
			const previewHeading = document.createElement('h1');
			previewHeading.textContent = 'Luna Artboard Preview';
			previewContainer.appendChild(previewHeading);
			_artboardMenu.appendChild(previewContainer);

			// Create button
			const artboardContainer = document.createElement('div');
			artboardContainer.classList.add(_artboardIds.artboardContainerClass);
			const createContainer = document.createElement('div');
			createContainer.classList.add(_artboardIds.artboardPreviewClass);
			createContainer.classList.add(_artboardIds.artboardCreateClass);
			const createButton = document.createElement('div');
			createButton.addEventListener('click', (e) => {
				this.createArtboard();
			})
			createButton.innerHTML = LUNA_PLUS_ICON.trim();
			createContainer.appendChild(createButton);
			const createText = document.createElement('h2');
			createText.textContent = 'Create Artboard';
			createContainer.appendChild(createText);
			artboardContainer.appendChild(createContainer);
			_artboardMenu.appendChild(artboardContainer);

			_artboardBase.appendChild(_artboardMenu);
			if (targetElement && targetElement.nodeType === Node.ELEMENT_NODE) {
				targetElement.appendChild(_artboardBase);
			} else {
				document.body.appendChild(_artboardBase);
			}
			_artboardBase.appendChild(_artboardViewer);

			return this;
		},
		createArtboard: function () {
			const newArtboard = _initialContent !== null ? {
				'content': _initialContent
			} : {};
			
			this.artboards.push(newArtboard);
			_currentArtboard = newArtboard;

			const artboardContainer = _artboardMenu.querySelector(`.${_artboardIds.artboardContainerClass}`);
			const createContainer = document.createElement('div');
			createContainer.classList.add(_artboardIds.artboardPreviewClass);
			const createButton = document.createElement('div');
			createButton.addEventListener('click', (e) => {
				_currentArtboard = newArtboard;
				this.openArtboard();
			})
			createButton.innerHTML = LUNA_EDIT_ICON.trim();
			createContainer.appendChild(createButton);
			const createText = document.createElement('h2');
			createText.textContent = `Artboard ${this.artboards.length}`;
			createContainer.appendChild(createText);
			artboardContainer.insertBefore(createContainer, _artboardMenu.querySelector(`.${_artboardIds.artboardCreateClass}`));

			this.openArtboard();
		},
		openArtboard: function () {
			const params = {
				'targetElement': _artboardViewer,
				'debug': true,
				'disableLaunchpad': true,
				rockets: [
					new Component({ name: 'Bio text', innerHTML: '<div><h1>John Doe</h1><h2>Computer Science Student</h2></div>' }),
					new Component({ name: 'Social Media Link', innerHTML: '<a href="https://google.com">Social Media</a>' }),
					new Component({ name: 'Image', innerHTML: '<img src="https://images.unsplash.com/photo-1637603932817-4d7737f99876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Image" />' })
				]
			};
			if (_currentArtboard.content) params['initialContent'] = _currentArtboard.content;

			this.lunaInstance = new Lunajs().init(params);

			_artboardMenu.style.display = 'none';
			_artboardViewer.style.display = '';

		},
		closeArtboard: function () {
			_currentArtboard.content = this.lunaInstance.close();
			
			_artboardMenu.style.display = 'block';
			_artboardMenu.style.opacity = 0;
			_artboardViewer.style.display = 'none';
			const style = _artboardMenu.style;
			setTimeout(function () { style.opacity = 1 }, 1);

		}
	};

	global.LunaArtboard = global.LunaArtboard || LunaArtboard;

})(window, window.document);