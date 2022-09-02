/* Lunajs Library */
'use strict';

(function (global, document) {

	/* Private constants */

	// Personal icons
	const LUNA_PADDING_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="none"><rect x=".5" y=".5" width="83" height="83" rx="4.5" fill="#fbfefd" stroke="#69b4b4"/><rect x="16.5" y="16.5" width="51" height="51" rx="4.5" fill="#9edbd4" stroke="#2c7b77"/><path d="M20.042 39.667c.322 0 .583.261.583.583v1.167h8.75V40.25a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.166h-8.75v1.166a.583.583 0 1 1-1.167 0v-3.5c0-.322.262-.583.584-.583Zm24.291-19.626a.583.583 0 0 1-.583.584h-1.167v8.75h1.167a.583.583 0 1 1 0 1.166h-3.5a.583.583 0 1 1 0-1.166h1.167v-8.75H40.25a.583.583 0 0 1 0-1.167h3.5c.322 0 .583.261.583.583Zm9.709 19.626c.322 0 .583.261.583.583v1.167h8.75V40.25a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.166h-8.75v1.166a.583.583 0 1 1-1.167 0v-3.5c0-.322.261-.583.584-.583Zm-9.709 14.374a.583.583 0 0 1-.583.584h-1.167v8.75h1.167a.583.583 0 1 1 0 1.166h-3.5a.583.583 0 1 1 0-1.166h1.167v-8.75H40.25a.583.583 0 0 1 0-1.167h3.5c.322 0 .583.261.583.583Z" fill="#2c7b77"/><path d="M71.042 39.667c.322 0 .583.261.583.583v1.167h8.75V40.25a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.166h-8.75v1.166a.583.583 0 1 1-1.167 0v-3.5c0-.322.261-.583.584-.583ZM44.333 71.041a.583.583 0 0 1-.583.584h-1.167v8.75h1.167a.583.583 0 1 1 0 1.166h-3.5a.583.583 0 1 1 0-1.166h1.167v-8.75H40.25a.583.583 0 0 1 0-1.167h3.5c.322 0 .583.261.583.583ZM3.042 39.667c.322 0 .583.261.583.583v1.167h8.75V40.25a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.166h-8.75v1.166a.583.583 0 1 1-1.167 0v-3.5c0-.322.262-.583.584-.583ZM44.333 3.041a.583.583 0 0 1-.583.584h-1.167v8.75h1.167a.583.583 0 1 1 0 1.166h-3.5a.583.583 0 1 1 0-1.166h1.167v-8.75H40.25a.583.583 0 0 1 0-1.167h3.5c.322 0 .583.261.583.583Z" fill="#69b4b4"/><rect x="33.5" y="33.5" width="17" height="17" rx="4.5" fill="#fbfefd" stroke="#2c7b77"/></svg>';
	const LUNA_MARGIN_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="none"><rect x=".5" y="1.055" width="83" height="83" rx="4.5" fill="#9edbd4" stroke="#2c7b77"/><rect x="16.5" y="17.055" width="51" height="51" rx="4.5" fill="#fbfefd" stroke="#2c7b77"/><path d="M20.042 40.222c.322 0 .583.26.583.583v1.167h8.75v-1.167a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.167h-8.75v1.167a.583.583 0 1 1-1.167 0v-3.5c0-.322.262-.583.584-.583Zm24.291-19.626a.583.583 0 0 1-.583.583h-1.167v8.75h1.167a.583.583 0 1 1 0 1.167h-3.5a.583.583 0 1 1 0-1.167h1.167v-8.75H40.25a.583.583 0 0 1 0-1.166h3.5c.322 0 .583.26.583.583Zm9.709 19.626c.322 0 .583.26.583.583v1.167h8.75v-1.167a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.167h-8.75v1.167a.583.583 0 1 1-1.167 0v-3.5c0-.322.261-.583.584-.583Zm-9.709 14.374a.583.583 0 0 1-.583.583h-1.167v8.75h1.167a.583.583 0 1 1 0 1.167h-3.5a.583.583 0 1 1 0-1.167h1.167v-8.75H40.25a.583.583 0 0 1 0-1.166h3.5c.322 0 .583.26.583.583Z" fill="#69b4b4"/><path d="M71.042 40.222c.322 0 .583.26.583.583v1.167h8.75v-1.167a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.167h-8.75v1.167a.583.583 0 1 1-1.167 0v-3.5c0-.322.261-.583.584-.583ZM44.333 71.596a.583.583 0 0 1-.583.583h-1.167v8.75h1.167a.583.583 0 1 1 0 1.167h-3.5a.583.583 0 1 1 0-1.167h1.167v-8.75H40.25a.583.583 0 0 1 0-1.166h3.5c.322 0 .583.26.583.583ZM3.042 40.222c.322 0 .583.26.583.583v1.167h8.75v-1.167a.583.583 0 0 1 1.167 0v3.5a.583.583 0 1 1-1.167 0v-1.167h-8.75v1.167a.583.583 0 1 1-1.167 0v-3.5c0-.322.262-.583.584-.583ZM44.333 3.596a.583.583 0 0 1-.583.583h-1.167v8.75h1.167a.583.583 0 1 1 0 1.167h-3.5a.583.583 0 1 1 0-1.167h1.167V4.18H40.25a.583.583 0 0 1 0-1.166h3.5c.322 0 .583.26.583.583Z" fill="#2c7b77"/><rect x="33.5" y="34.055" width="17" height="17" rx="4.5" fill="#F8F8FA" stroke="#69b4b4"/></svg>';

	// Source start: https://heroicons.com/
	const LUNA_PHONE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/></svg>';
	const LUNA_TABLET_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/></svg>';
	const LUNA_DESKTOP_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17 9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>';
	const LUNA_CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"/></svg>';
	const LUNA_UNDO_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4.582 13.0019H4V8.00188V10.5L4.582 13.0019ZM4.582 13.0019C5.24585 11.36 6.43568 9.98479 7.96503 9.09174C9.49438 8.19869 11.2768 7.83829 13.033 8.06702C14.7891 8.29575 16.4198 9.10068 17.6694 10.3557C18.919 11.6106 19.7168 13.2447 19.938 15.0019M4.582 13.0019H9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
	const LUNA_REDO_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19.356 13.0019H19.938V8.00188V10.5L19.356 13.0019ZM19.356 13.0019C18.6922 11.36 17.5023 9.98479 15.973 9.09174C14.4436 8.19869 12.6612 7.83829 10.905 8.06702C9.14887 8.29575 7.51822 9.10068 6.26863 10.3557C5.01905 11.6106 4.22116 13.2447 4 15.0019M19.356 13.0019H14.938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
	// Source end

	const LUNA_DIRECTIONS = ['top', 'right', 'bottom', 'left'];

	/* Private properties */

	// Object containing all Element IDs
	const _ids = {
		colonyId: 'luna-colony',
		interfaceId: 'luna-interface',
		warningId: 'luna-warning',
		launchpadId: 'luna-launchpad',
		launchpadWarningId: 'luna-launchpad-warning',
		missionControlId: 'luna-mission-control',
		lunaControlsId: 'luna-controls',
		baseId: 'luna-base',
		habitatAreaId: 'luna-habitat-area',
		habitatId: 'luna-habitat',
		habitatInfoId: 'luna-habitat-info',
		controlPanelId: 'luna-control-panel',
		selectedClass: 'luna-selected',
		rocketClass: 'luna-rocket',
		controlPanelShowingClass: 'luna-control-panel-showing',
		launchpadShowingClass: 'luna-launchpad-showing'
	}

	/* Private functions */

	// Helper function that converts rgb/rgba colour values to hex
	// Source: https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value#answer-3627747
	const _rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`.substring(0, 7);

	/**
	 * Console output handlers.
	 */
	function _log(message, bypass = false) {
		if (this.debug || bypass) {
			console.log('%cLuna >', 'color: orange', message);
		}
	}
	function _warn(message) {
		console.warn('%cLuna >', 'color: orange', message);
	}
	function _error(message) {
		console.error(message);
		return new Error(message);
	}

	/**
	 * Initialize Launchpad (Component Library).
	 */
	function _initLaunchpad() {
		_log.call(this, 'Initializing Launchpad');

		// Set Launchpad showing
		this.colony.classList.add(_ids.launchpadShowingClass);

		// Initialize Launchpad element
		const launchpadElement = this.launchpad.element;
		launchpadElement.id = _ids.launchpadId;

		// Heading Stage
		const headingStage = document.createElement('h1');
		headingStage.textContent = 'Component Library';
		launchpadElement.appendChild(headingStage);

		// Generate warning if missing rockets
		if (this.launchpad.rockets.length < 1) {
			const warningContainer = document.createElement('div');
			warningContainer.id = _ids.launchpadWarningId;

			const noComponents = document.createElement('h2');
			noComponents.textContent = 'There are no components.';
			warningContainer.appendChild(noComponents);

			const detailedText = document.createElement('p');
			detailedText.style.cssText = 'margin-top: 0.35rem;';
			detailedText.textContent = 'Refer to the documentation for instructions on how to add one.';

			warningContainer.appendChild(detailedText);
			launchpadElement.appendChild(warningContainer);
			// Otherwise generate rockets
		} else {
			this.launchpad.rockets.forEach(rocket => {
				this.addComponent(rocket);
			})
		}

		// Add Launchpad to colony
		this.colony.children[0].appendChild(launchpadElement);
	}
	/**
	 * Initialize Mission Control (buttons and Element Editor).
	 */
	function _initMissionControl(showSizeButtons, showRevisionHistory, showExportButton) {
		_log.call(this, 'Initializing Mission Control');

		// Initialize mission control
		this.missionControl = {
			element: document.createElement('div'),
			controls: {},
			revisionHistory: new RevisionHistory(this)
		}
		this.missionControl.element.id = _ids.missionControlId;
		this.missionControl.controls.element = document.createElement('div');
		this.missionControl.controls.element.id = _ids.lunaControlsId;
		this.missionControl.element.appendChild(this.missionControl.controls.element);

		// Create size controls
		if (showSizeButtons) {
			this.addControl({
				name: 'luna-size-controls',
				controls: [
					{
						'title': 'Phone',
						'icon': LUNA_PHONE_ICON,
						'callback': () => this.setHabitatSize('Mobile', 375, 812),
						'setActive': true
					},
					{
						'title': 'Tablet',
						'icon': LUNA_TABLET_ICON,
						'callback': () => this.setHabitatSize('Tablet', 1024, 768),
						'setActive': true
					},
					{
						'title': 'Desktop',
						'icon': LUNA_DESKTOP_ICON,
						'callback': () => this.setHabitatSize('Desktop', 1920, 1080),
						'setActive': true
					},
					{
						'label': 'Fit',
						'callback': () => this.resetHabitatSize(),
						'default': true,
						'setActive': true
					}
				]
			});
		}

		// Create export control
		if (showExportButton) {
			this.addControl({
				name: 'luna-export-control',
				aligned: 'left',
				controls: [
					{
						'label': 'Export',
						'callback': () => this.exportToFile()
					}
				]
			});
		}

		// Create Revision History controls
		if (showRevisionHistory) {
			this.addControl({
				name: 'luna-history-controls',
				leftSpacing: true,
				controls: [
					{
						'title': 'Undo',
						'icon': LUNA_UNDO_ICON,
						'disabled': true,
						'callback': () => this.missionControl.revisionHistory.undo()
					},
					{
						'title': 'Redo',
						'icon': LUNA_REDO_ICON,
						'disabled': true,
						'callback': () => this.missionControl.revisionHistory.redo()
					}
				]
			});
		}

		// Create Control Panel
		this.missionControl.controlPanel = {};
		this.missionControl.controlPanel.element = document.createElement('div');
		const controlPanel = this.missionControl.controlPanel.element;
		controlPanel.id = _ids.controlPanelId;
		controlPanel.style.display = 'none';
		controlPanel.style.opacity = 0;
		this.colony.children[0].appendChild(controlPanel);

		// Add Mission Control to colony
		this.colony.children[0].children[1].appendChild(this.missionControl.element);
	}
	function _updateControlPanel(selectedElement) {
		_log.call(this, 'Updating Control Panel');

		// Show control panel
		this.colony.classList.add(_ids.controlPanelShowingClass);
		const controlPanel = this.missionControl.controlPanel;
		controlPanel.element.style.display = 'block';
		setTimeout(function () { controlPanel.element.style.opacity = 1 }, 1);

		// Cleanup previous selectedElement
		if (controlPanel.selectedElement) {
			controlPanel.selectedElement.classList.remove(_ids.selectedClass);
		}

		// Update selectedElement
		controlPanel.selectedElement = selectedElement;

		// Update Control Panel
		controlPanel.element.innerHTML = '';

		// Create Header
		const headerContainer = document.createElement('div');
		headerContainer.classList.add('luna-container');
		//				 heading
		const headerHeading = document.createElement('h1');
		headerHeading.textContent = 'Element Editor';
		headerContainer.appendChild(headerHeading);
		//				 button
		const headerButton = document.createElement('button');
		headerButton.innerHTML = LUNA_CLOSE_ICON.trim();
		headerButton.addEventListener('click', () => this.resetControlPanel());
		headerContainer.appendChild(headerButton);
		controlPanel.element.appendChild(headerContainer);

		// Create controlPanels
		for (const [, panel] of Object.entries(this.controlPanels)) {
			panel.init(this);
		}

		// Remove element
		const removalButton = document.createElement('button');
		removalButton.textContent = 'Delete element'
		removalButton.classList.add('luna-delete-button');
		removalButton.addEventListener('click', (e) => {
			_log.call(this, 'Deleting element');
			this.missionControl.revisionHistory.executeAction('removeElement', { element: controlPanel.selectedElement });
		})
		controlPanel.element.appendChild(removalButton);

		controlPanel.selectedElement.classList.add(_ids.selectedClass);
	}
	/**
	 * Handle button click in Mission Control.
	 */
	function _handleControlClick(event, setActive, callback) {
		_log.call(this, 'Handling button click');
		if (setActive) {
			_log.call(this, 'Setting active control');

			const target = event.currentTarget;

			// Ensure parent exists
			if (!(target.parentElement.id in this.missionControl.controls)) {
				_error('Unable to set active control');
			}

			const controlParent = this.missionControl.controls.element.querySelector(`#${target.parentElement.id}`);
			controlParent.childNodes.forEach(child => {
				if (child.classList.contains('active')) {
					child.classList.remove('active');
				}
			})

			target.classList.add('active');
		}
		callback();
	}
	function _registerListeners() {
		// Add listeners
		this.habitat.contentWindow.document.body.style.padding = '2rem';
		this.habitat.contentWindow.document.body.style.cursor = 'pointer';
		this.habitat.contentWindow.document.body.addEventListener('click', event => {
			event.stopPropagation();
			event.preventDefault();
			this.selectElement(event.target);
		});
		this.habitat.contentWindow.document.addEventListener('click', event => {
			_log.call(this, 'Clicked in empty canvas');
			event.preventDefault();
			this.resetControlPanel();
		});
		// if (this.dragAndDropEnabled) {
		// 	const items = this.habitat.contentWindow.document.body.getElementsByTagName("*");
		// 	for (var i = 0, len = items.length; i < len; i++) {
		// 		const item = items[i];
		// 		// item.style.userSelect = 'all';
		// 		item.addEventListener('onmousedown', _startDrag);
		// 		item.addEventListener('dragstart', _handleDragStart);
		// 		item.addEventListener('dragover', _handleDragOver);
		// 		item.addEventListener('dragenter', _handleDragEnter);
		// 		item.addEventListener('dragleave', _handleDragLeave);
		// 		// item.addEventListener('dragend', _handleDragEnd);
		// 		item.addEventListener('drop', _handleDrop);
		// 		item.addEventListener('drop', () => {
		// 			_registerListeners.call(this)
		// 		});
		// 	}
		// }
	}

	/* End of private properties/functions */

	// Extra features
	function RevisionHistory(lunaInstance) {
		this.history = [null];
		this.position = 0;
		this.luna = lunaInstance;
	}

	RevisionHistory.prototype = {
		executeAction(action, args = {}) {
			if (this.position < this.history.length - 1) {
				this.history = this.history.slice(0, this.position + 1);
			}

			if (this.luna.actions[action]) {
				_log.call(this, 'Executing Action');
				const currentAction = new this.luna.actions[action];

				if (currentAction.do(args)) {
					_log.call(this, 'Action successful');
					this.history.push(currentAction);
					this.position += 1;
					this.luna.updateState();
				} else {
					this.luna.error('Action failed');
				}
			}
		},
		undo() {
			if (this.position > 0) {
				_log.call(this, 'Executing undo');
				this.history[this.position].undo();
				this.position--;
				this.luna.updateState();
			}
		},
		redo() {
			if (this.position < this.history.length - 1) {
				_log.call(this, 'Executing redo');
				this.position++;
				this.history[this.position].redo();
				this.luna.updateState();
			}
		}
	}

	function Component(rocketData) {
		// Name of rocket
		this.name = rocketData.name;
		this.innerHTML = rocketData.innerHTML;
	}

	/* CONTROL PANEL TEMPLATE
	'panelName': {
		create: function (luna) {

		},
		update: function () {

		}
	}

	ACTION TEMPLATE 
	'actionName': function () {
		return {
			do: function (args) {
				if ('argument' in args) {

					return true;
				}
				return false;
			},
			undo: function () {
				
			},
			redo: function () {
				
			}
		}
	}
	*/

	function Lunajs() {
		// Debug flag
		this.debug = false;

		// Colony element
		this.colony = null;

		// Warning element
		this.lunaWarning = null;

		// Launchpad Element
		this.launchpad = null;

		// Mission Control Element
		this.missionControl = null;

		// Habitat Element
		this.habitat = null;

		// Habitat Info Element
		this.habitatInfo = null;

		// Actions
		const luna = this;
		this.actions = {
			'combinedAction': function () {
				return {
					do: function (args) {
						if ('actions' in args && 'callback' in args) {
							this.actions = [];
							args.actions.forEach(action => {
								this.actions.push({
									action: new luna.actions[action.action],
									args: action.arguments
								})
							});
							this.callback = args.callback;
							this.actions.forEach(action => {
								action.action.do(action.args)
							})
							return true;
						}
						return false;
					},
					undo: function () {
						this.actions.forEach(action => {
							action.action.undo(action.args)
						})
						this.callback.callback();
					},
					redo: function () {
						this.actions.forEach(action => {
							action.action.redo(action.args)
						})
						this.callback.callback();
					}
				}
			},
			'addElement': function () {
				return {
					do: function (args) {
						if ('elementHTML' in args) {
							luna.habitat.contentWindow.document.body.insertAdjacentHTML('beforeend', args.elementHTML);
							this.element = luna.habitat.contentWindow.document.body.lastChild;
							return true;
						}
						return false;
					},
					undo: function () {
						luna.habitat.contentWindow.document.body.removeChild(this.element);
					},
					redo: function () {
						luna.habitat.contentWindow.document.body.appendChild(this.element);
					}
				}
			},
			'removeElement': function () {
				return {
					do: function (args) {
						if ('element' in args) {
							this.element = args.element;
							this.parent = this.element.parentElement;
							this.redo();
							return true;
						}
						return false;
					},
					undo: function () {
						this.parent.insertBefore(this.element, this.parent.children[this.index]);
					},
					redo: function () {
						this.index = [...this.parent.children].indexOf(this.element);
						this.parent.removeChild(this.element)
					}
				}
			},
			'editElement': function () {
				return {
					do: function (args) {
						if ('element' in args && 'attribute' in args && 'value' in args) {
							this.element = args.element;
							this.attribute = args.attribute;
							if ('nestedAttribute' in args) {
								this.nestedAttribute = args.nestedAttribute;
								this.oldValue = this.element[this.attribute][this.nestedAttribute];
							} else {
								this.oldValue = this.element[this.attribute];
							}
							if ('oldValue' in args) {
								this.oldValue = args.oldValue;
							}
							this.value = args.value;
							if ('callback' in args) this.callback_fn = args.callback;
							this.redo();
							return true;
						}
						return false;
					},
					undo: function () {
						if (this.nestedAttribute) {
							this.element[this.attribute][this.nestedAttribute] = this.oldValue;
						} else {
							this.element[this.attribute] = this.oldValue;
						}
						this.callback_fn && this.callback_fn.callback();
					},
					redo: function () {
						if (this.nestedAttribute) {
							this.element[this.attribute][this.nestedAttribute] = this.value;
						} else {
							this.element[this.attribute] = this.value;
						}
						this.callback_fn && this.callback_fn.callback();
					}
				}
			},
			'addClassToElement': function () {
				return {
					do: function (args) {
						if ('element' in args && 'class' in args && 'callback' in args) {
							this.element = args.element;
							this.class = args.class;
							this.callback = args.callback;
							this.redo();
							return true;
						}
						return false;
					},
					undo: function () {
						this.element.classList.remove(this.class);
						this.callback.callback();
					},
					redo: function () {
						this.element.classList.add(this.class);
						this.callback.callback();
					}
				}
			},
			'removeClassFromElement': function () {
				return {
					do: function (args) {
						if ('element' in args && 'class' in args && 'callback' in args) {
							this.element = args.element;
							this.class = args.class;
							this.callback = args.callback;
							this.redo();
							return true;
						}
						return false;
					},
					undo: function () {
						this.element.classList.add(this.class);
						this.callback.callback();
					},
					redo: function () {
						this.element.classList.remove(this.class);
						this.callback.callback();
					}
				}
			}
		}

		// Control Panels
		this.controlPanels = {
			'textContentPanel': {
				id: 'luna-control-panel-text-content',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;
					const selectedElement = controlPanel.selectedElement;

					// Text box
					if (selectedElement !== luna.habitat.contentWindow.document.body && selectedElement.childNodes.length == 1) {
						//		heading
						const textHeading = document.createElement('h2');
						textHeading.textContent = 'Text';
						controlPanel.element.appendChild(textHeading);
						//		input
						const textInput = document.createElement('input');
						textInput.id = this.id;
						textInput.setAttribute('placeholder', 'Element text')
						textInput.addEventListener('input', (e) => {
							_log.call(luna, 'Updating text of selected element');
							const value = e.target.value;

							if (value.length < 1) {
								alert('\'Element text\' cannot be empty, please press the appropriate button if you are trying to delete the element.')
								return;
							}

							luna.missionControl.revisionHistory.executeAction('editElement', {
								element: controlPanel.selectedElement,
								attribute: 'textContent',
								value: value,
								callback: this
							});
						})
						controlPanel.element.appendChild(textInput);
						this.callback();
					}
				},
				callback: function () {
					const input = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!input || selectedElement == null) return;
					input.value = selectedElement.textContent;
				}
			},
			'hyperlinkPanel': {
				id: 'luna-control-panel-hyperlink',
				targetId: 'luna-control-panel-hyperlink-target',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Hyperlink
					if (controlPanel.selectedElement.tagName === 'A') {
						//		 heading
						const linkHeading = document.createElement('h2');
						linkHeading.textContent = 'Hyperlink'
						controlPanel.element.appendChild(linkHeading);
						//		 group
						const linkGroup = document.createElement('div');
						linkGroup.classList.add('flex');
						//		 label
						const linkLabel = document.createElement('label');
						linkLabel.textContent = 'URL';
						linkGroup.appendChild(linkLabel);
						//		 input
						const linkInput = document.createElement('input');
						linkInput.id = this.id;
						linkInput.setAttribute('placeholder', 'href');
						linkGroup.appendChild(linkInput);
						controlPanel.element.appendChild(linkGroup);

						//		 target group
						const targetGroup = document.createElement('div');
						//		 target label
						const targetLabel = document.createElement('label');
						targetLabel.style.cssText = 'margin-bottom: 0.35rem;';
						targetLabel.textContent = 'Open in new window';
						targetGroup.appendChild(targetLabel);
						//		 target input
						const targetInput = document.createElement('input');
						targetInput.id = this.targetId;
						targetInput.setAttribute('placeholder', 'target');
						targetGroup.appendChild(targetInput);
						controlPanel.element.appendChild(targetGroup);
						//		 update
						this.callback();
						//		 save button
						const hyperLinkUpdateButton = document.createElement('button');
						hyperLinkUpdateButton.classList.add('wide');
						hyperLinkUpdateButton.style.cssText = 'width: 100%; margin-top: 0.35rem;';
						hyperLinkUpdateButton.textContent = 'Update link'
						hyperLinkUpdateButton.addEventListener('click', (e) => {
							_log.call(luna, 'Updating href of selected element');

							const href = e.target.previousSibling.previousSibling.children[1].value;
							const target = e.target.previousSibling.children[1].value;

							if (href.length < 1) {
								alert('\'href\' cannot be empty.')
								return;
							}
							if (target.length < 1) {
								alert('\'target\' cannot be empty.')
								return;
							}

							luna.missionControl.revisionHistory.executeAction('combinedAction', {
								actions: luna.actions,
								actions: [
									{
										action: 'editElement',
										arguments: {
											element: controlPanel.selectedElement,
											attribute: 'href',
											value: href
										}
									},
									{
										action: 'editElement',
										arguments: {
											element: controlPanel.selectedElement,
											attribute: 'target',
											value: target
										}
									}
								],
								callback: this
							});
						})
						controlPanel.element.appendChild(hyperLinkUpdateButton);
					}
				},
				callback: function () {
					const input = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const secondInput = luna.missionControl.controlPanel.element.querySelector(`#${this.targetId}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!input || selectedElement == null) return;
					input.value = selectedElement.href;
					secondInput.value = selectedElement.target;
				}
			},
			'imagePanel': {
				srcId: 'luna-control-panel-image-src',
				altId: 'luna-control-panel-image-alt',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Image
					if (controlPanel.selectedElement.tagName === 'IMG') {
						//	 heading
						const imageHeading = document.createElement('h2');
						imageHeading.textContent = 'Image'
						controlPanel.element.appendChild(imageHeading);
						//	 src group
						const srcGroup = document.createElement('div');
						srcGroup.classList.add('flex');
						//	 label
						const imageLabel = document.createElement('label');
						imageLabel.textContent = 'Src';
						srcGroup.appendChild(imageLabel);
						//	 input
						const imageInput = document.createElement('input');
						imageInput.id = this.srcId;
						srcGroup.appendChild(imageInput);
						controlPanel.element.appendChild(srcGroup);
						//	 alt group
						const altGroup = document.createElement('div');
						altGroup.classList.add('flex');
						//	 label
						const altLabel = document.createElement('label');
						altLabel.textContent = 'Alt';
						altGroup.appendChild(altLabel);
						//	 input
						const altInput = document.createElement('input');
						altInput.id = this.altId;
						altGroup.appendChild(altInput);
						controlPanel.element.appendChild(altGroup);
						//		 update
						this.callback();
						//		 save button
						const imageUpdateButton = document.createElement('button');
						imageUpdateButton.classList.add('wide');
						imageUpdateButton.style.cssText = 'width: 100%; margin-top: 0.35rem;';
						imageUpdateButton.textContent = 'Update link'
						imageUpdateButton.addEventListener('click', (e) => {
							_log.call(luna, 'Updating href of selected element');

							const src = e.target.previousSibling.previousSibling.children[1].value;
							const alt = e.target.previousSibling.children[1].value;

							if (src.length < 1) {
								alert('\'src\' cannot be empty.')
								return;
							}

							luna.missionControl.revisionHistory.executeAction('combinedAction', {
								actions: luna.actions,
								actions: [
									{
										action: 'editElement',
										arguments: {
											element: controlPanel.selectedElement,
											attribute: 'src',
											value: src
										}
									},
									{
										action: 'editElement',
										arguments: {
											element: controlPanel.selectedElement,
											attribute: 'alt',
											value: alt
										}
									}
								],
								callback: this
							});
						})
						controlPanel.element.appendChild(imageUpdateButton);
					}
				},
				callback: function () {
					const input = luna.missionControl.controlPanel.element.querySelector(`#${this.srcId}`);
					const secondInput = luna.missionControl.controlPanel.element.querySelector(`#${this.altId}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!input || !secondInput || selectedElement == null) return;
					input.value = selectedElement.src;
					secondInput.value = selectedElement.alt;
				}
			},
			'classPanel': {
				id: 'luna-control-panel-classlist',
				addId: 'luna-control-panel-addclass',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Class list
					//			  heading
					const classListHeading = document.createElement('h2');
					classListHeading.textContent = 'Classes'
					controlPanel.element.appendChild(classListHeading);
					//			  inputs
					const classList = document.createElement('div');
					classList.id = this.id;
					controlPanel.element.appendChild(classList);
					//			  update
					this.callback();
					//			  add input
					const classListContainer = document.createElement('div');
					classListContainer.id = this.addId;
					const classInput = document.createElement('input');
					classInput.setAttribute('placeholder', 'Class name')
					classListContainer.appendChild(classInput);
					const classAddButton = document.createElement('button');
					classAddButton.textContent = 'Add class'
					classAddButton.addEventListener('click', (e) => {
						_log.call(luna, 'Adding class to selected element');
						const className = e.target.previousSibling.value;

						if (className.length < 1) {
							alert('Please fill out the \'Class name\' input field.')
							return;
						}

						luna.missionControl.revisionHistory.executeAction('addClassToElement', {
							element: controlPanel.selectedElement,
							class: className,
							callback: this
						});

						e.target.previousSibling.value = '';
					})
					classListContainer.appendChild(classAddButton);
					controlPanel.element.appendChild(classListContainer);
				},
				callback: function () {
					const classList = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!classList || selectedElement == null) return;
					classList.innerHTML = '';
					if (selectedElement.classList.length < 1) {
						const message = document.createElement('p');
						message.style.cssText = 'margin-top: 0.25rem; margin-bottom: 0.5rem;';
						message.textContent = 'No classes yet';
						classList.appendChild(message);
					}
					selectedElement.classList.forEach(className => {
						if (className === _ids.selectedClass) return;
						const classButton = document.createElement('button');
						classButton.textContent = className + ' x';
						classButton.addEventListener('click', event => {
							_log.call(luna, 'Removing class from selected element');

							luna.missionControl.revisionHistory.executeAction('removeClassFromElement', {
								element: luna.missionControl.controlPanel.selectedElement,
								class: event.target.textContent.slice(0, -2),
								callback: this
							});
						})
						classList.appendChild(classButton);
					});
				}
			},
			'marginPanel': {
				id: 'luna-control-panel-margin',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Margin
					//		  wrapper
					const marginWrapper = document.createElement('div');
					marginWrapper.classList.add('luna-control-panel-spacing');
					//		  heading
					const marginHeading = document.createElement('h2');
					marginHeading.textContent = 'Margin';
					marginWrapper.appendChild(marginHeading);
					//		  icon
					const marginFlexElement = document.createElement('div');
					const marginIconElem = document.createElement('div');
					marginIconElem.classList.add('luna-control-panel-icon');
					marginIconElem.innerHTML = LUNA_MARGIN_ICON.trim();
					marginFlexElement.appendChild(marginIconElem);
					//		  list
					const marginList = document.createElement('div');
					marginList.id = this.id;
					marginList.classList.add('luna-control-panel-input');
					//		  inputs
					LUNA_DIRECTIONS.forEach(direction => {
						const marginContainer = document.createElement('div');

						const marginLabel = document.createElement('label');
						marginLabel.textContent = direction;
						marginContainer.appendChild(marginLabel);

						const marginInput = document.createElement('input');
						marginInput.value = window.getComputedStyle(controlPanel.selectedElement).getPropertyValue(`margin-${direction}`);
						marginInput.addEventListener('input', (e) => {
							_log.call(luna, 'Updating margin of selected element');

							luna.missionControl.revisionHistory.executeAction('editElement', {
								element: controlPanel.selectedElement,
								attribute: 'style',
								nestedAttribute: `margin-${direction}`,
								oldValue: window.getComputedStyle(controlPanel.selectedElement).getPropertyValue(`margin-${direction}`),
								value: e.target.value,
								callback: this
							});
						});
						marginContainer.appendChild(marginInput);
						marginList.appendChild(marginContainer);
					});
					marginFlexElement.appendChild(marginList);
					marginWrapper.appendChild(marginFlexElement);
					controlPanel.element.appendChild(marginWrapper);
				},
				callback: function () {
					const marginList = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!marginList || selectedElement == null) return;
					for (let i = 0; i < marginList.children.length; i++) {
						const newMargin = selectedElement.style[`margin-${LUNA_DIRECTIONS[i]}`];
						if (newMargin !== '') {
							marginList.children[i].children[1].value = newMargin;
						}
					}
				}
			},
			'paddingPanel': {
				id: 'luna-control-panel-padding',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Padding
					//		   wrapper
					const paddingWrapper = document.createElement('div');
					paddingWrapper.classList.add('luna-control-panel-spacing');
					//		   heading
					const paddingHeading = document.createElement('h2');
					paddingHeading.textContent = 'Padding';
					paddingWrapper.appendChild(paddingHeading);
					//		   icon
					const paddingFlexElement = document.createElement('div');
					const paddingIconElem = document.createElement('div');
					paddingIconElem.innerHTML = LUNA_PADDING_ICON.trim();
					paddingFlexElement.appendChild(paddingIconElem);
					//		   list
					const paddingList = document.createElement('div');
					paddingList.id = this.id;
					paddingList.classList.add('luna-control-panel-input');
					//		   inputs
					LUNA_DIRECTIONS.forEach(direction => {
						const paddingContainer = document.createElement('div');

						const paddingLabel = document.createElement('label');
						paddingLabel.textContent = direction;
						paddingContainer.appendChild(paddingLabel);

						const paddingInput = document.createElement('input');
						paddingInput.value = window.getComputedStyle(controlPanel.selectedElement).getPropertyValue(`padding-${direction}`);;
						paddingInput.addEventListener('input', (e) => {
							_log.call(luna, 'Updating padding of selected element');

							luna.missionControl.revisionHistory.executeAction('editElement', {
								element: controlPanel.selectedElement,
								attribute: 'style',
								nestedAttribute: `padding-${direction}`,
								oldValue: window.getComputedStyle(controlPanel.selectedElement).getPropertyValue(`padding-${direction}`),
								value: e.target.value,
								callback: this
							});
						});
						paddingContainer.appendChild(paddingInput);
						paddingList.appendChild(paddingContainer);
					})
					paddingFlexElement.appendChild(paddingList);
					paddingWrapper.appendChild(paddingFlexElement);
					controlPanel.element.appendChild(paddingWrapper);
				},
				callback: function () {
					const paddingList = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!paddingList || selectedElement == null) return;
					for (let i = 0; i < paddingList.children.length; i++) {
						const newPadding = selectedElement.style[`padding-${LUNA_DIRECTIONS[i]}`];
						if (newPadding !== '') {
							paddingList.children[i].children[1].value = newPadding;
						}
					}
				}
			},
			'colorPanel': {
				id: 'luna-control-panel-color',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Color
					//		 heading
					const colorHeading = document.createElement('h2');
					colorHeading.textContent = 'Color';
					controlPanel.element.appendChild(colorHeading);
					//		 input
					const colorInput = document.createElement('input');
					colorInput.id = this.id;
					colorInput.type = 'color';
					colorInput.value = _rgba2hex(window.getComputedStyle(controlPanel.selectedElement).color);
					colorInput.addEventListener('input', (e) => {
						_log.call(luna, 'Updating color of selected element');

						luna.missionControl.revisionHistory.executeAction('editElement', {
							element: controlPanel.selectedElement,
							attribute: 'style',
							nestedAttribute: 'color',
							oldValue: _rgba2hex(window.getComputedStyle(controlPanel.selectedElement).color),
							value: e.target.value,
							callback: this
						});
					});
					controlPanel.element.appendChild(colorInput);
				},
				callback: function () {
					const colorInput = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!colorInput || selectedElement == null) return;
					colorInput.value = _rgba2hex(window.getComputedStyle(selectedElement).color);
				}
			},
			'backgroundColorPanel': {
				id: 'luna-control-panel-background-color',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Background color
					//					heading
					const backgroundColorHeading = document.createElement('h2');
					backgroundColorHeading.textContent = 'Background Color';
					controlPanel.element.appendChild(backgroundColorHeading);
					//					input
					const backgroundColorInput = document.createElement('input');
					backgroundColorInput.id = this.id;
					backgroundColorInput.type = 'color';
					backgroundColorInput.addEventListener('input', (e) => {
						_log.call(luna, 'Updating background color of selected element');

						luna.missionControl.revisionHistory.executeAction('editElement', {
							element: controlPanel.selectedElement,
							attribute: 'style',
							nestedAttribute: 'backgroundColor',
							value: e.target.value,
							callback: this
						});
					});
					controlPanel.element.appendChild(backgroundColorInput);
					this.callback();
				},
				callback: function () {
					const colorInput = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!colorInput || selectedElement == null) return;
					colorInput.value = _rgba2hex(window.getComputedStyle(selectedElement).backgroundColor);
				}
			},
			'fontSize': {
				id: 'luna-control-panel-font-size',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Font size
					//			 heading
					const fontSizeHeading = document.createElement('h2');
					fontSizeHeading.textContent = 'Font Size'
					controlPanel.element.appendChild(fontSizeHeading);
					//			 input
					const fontSizeInput = document.createElement('input');
					fontSizeInput.id = this.id;
					fontSizeInput.addEventListener('input', (e) => {
						_log.call(luna, 'Updating font size of selected element');

						luna.missionControl.revisionHistory.executeAction('editElement', {
							element: controlPanel.selectedElement,
							attribute: 'style',
							nestedAttribute: 'fontSize',
							value: e.target.value,
							callback: this
						});
					})
					controlPanel.element.appendChild(fontSizeInput);
					this.callback();
				},
				callback: function () {
					const fontSizeInput = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!fontSizeInput || selectedElement == null) return;
					fontSizeInput.value = window.getComputedStyle(selectedElement).fontSize;
				}
			},
			'fontWeight': {
				id: 'luna-control-panel-font-weight',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Font weight
					//			 heading
					const heading = document.createElement('h2');
					heading.textContent = 'Font Weight'
					controlPanel.element.appendChild(heading);
					//			 input
					const input = document.createElement('input');
					input.id = this.id;
					input.addEventListener('input', (e) => {
						_log.call(luna, 'Updating text align of selected element');

						luna.missionControl.revisionHistory.executeAction('editElement', {
							element: controlPanel.selectedElement,
							attribute: 'style',
							nestedAttribute: 'fontWeight',
							value: e.target.value,
							callback: this
						});
					})
					controlPanel.element.appendChild(input);
					this.callback();
				},
				callback: function () {
					const input = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!input || selectedElement == null) return;
					input.value = window.getComputedStyle(selectedElement).fontWeight;
				}
			},
			'borderRadius': {
				id: 'luna-control-panel-border-radius',
				init: function () {
					const controlPanel = luna.missionControl.controlPanel;

					// Border radius
					//			 heading
					const heading = document.createElement('h2');
					heading.textContent = 'Border Radius'
					controlPanel.element.appendChild(heading);
					//			 input
					const input = document.createElement('input');
					input.id = this.id;
					input.addEventListener('input', (e) => {
						_log.call(luna, 'Updating text align of selected element');

						luna.missionControl.revisionHistory.executeAction('editElement', {
							element: controlPanel.selectedElement,
							attribute: 'style',
							nestedAttribute: 'borderRadius',
							value: e.target.value,
							callback: this
						});
					})
					controlPanel.element.appendChild(input);
					this.callback();
				},
				callback: function () {
					const input = luna.missionControl.controlPanel.element.querySelector(`#${this.id}`);
					const selectedElement = luna.missionControl.controlPanel.selectedElement;
					if (!input || selectedElement == null) return;
					input.value = selectedElement.style.borderRadius;
				}
			}
		}
	}

	Lunajs.prototype = {
		/**
		 * Initializer function.
		 *
		 * @param {object} parameters Specify initialization options in this object
		 * 				   (refer to documentation).
		 * @param {object} initialContent Initial element in Lunajs editor.
		 * @return {object} Lunajs instance.
		 */
		init: function (parameters = {}) {
			// Check if DOM is ready
			if (document.readyState !== 'complete' && document.readyState !== 'interactive') {
				this.debug = true;
				_log.call(this, 'Loaded too early! Make sure you are calling Luna after DOMContentLoaded has fired.');
				this.debug = false;
				return;
			}

			// reset launchpad
			this.launchpad = {
				element: document.createElement('div'),
				rockets: []
			};

			// Fix parameters
			if (!(Object.keys(parameters).length)) {
				parameters = {};
			}
			// Parse parameters
			// debug
			if ('debug' in parameters) {
				this.debug = parameters['debug'];
				_log.call(this, 'Initializing...');
				_log.call(this, 'Enabled debug output');
			}
			// removeInitialContent
			const initialContent = parameters['initialContent'] || null;
			const targetElement = parameters['targetElement'] || null;
			const useStylesheets = 'useStylesheets' in parameters || false;
			const removeInitialContent = 'removeInitialContent' in parameters || false;
			const showSizeButtons = 'showSizeButtons' in parameters ? parameters['showSizeButtons'] : 'hideSizeButtons' in parameters ? !parameters['hideSizeButtons'] : true;
			const showRevisionHistory = 'showRevisionHistory' in parameters ? parameters['showRevisionHistory'] : 'hideRevisionHistory' in parameters ? !parameters['hideRevisionHistory'] : true;
			const showExportButton = 'showExportButton' in parameters ? parameters['showExportButton'] : 'hideExportButton' in parameters ? !parameters['hideExportButton'] : true;
			// disableLaunchpad
			const useLaunchpad = 'disableLaunchpad' in parameters ? !parameters['disableLaunchpad'] : true;
			// overwriteIds
			if ('overwriteIds' in parameters) {
				const newIds = parameters['overwriteIds'];
				if (Object.keys(newIds).length) {
					for (const [key, value] of Object.entries(newIds)) {
						_ids[key] = value;
						_warn(`Overriding \'${key}\' may cause issues with styling.`);
					}
				} else {
					_warn('Refer to documentation for proper usage of the \'overwriteIds\' parameter.');
				}
			}
			// components
			if ('components' in parameters) {
				const rockets = parameters['components'];
				if (Array.isArray(rockets)) {
					rockets.forEach(rocket => this.launchpad.rockets.push(rocket));
				} else {
					_warn('Refer to documentation for proper usage of the \'rockets\' parameter.');
				}
			}
			// this.dragAndDropEnabled = 'dragAndDropEnabled' in parameters ? parameters['dragAndDropEnabled'] : false;

			// Initialize colony
			this.colony = document.createElement('div');
			this.colony.id = _ids.colonyId;
			const interfaceContainer = document.createElement('div');
			interfaceContainer.id = _ids.interfaceId;
			this.colony.appendChild(interfaceContainer);

			// Create warning
			this.lunaWarning = document.createElement('div');
			this.lunaWarning.id = _ids.warningId;
			this.lunaWarning.textContent = 'Luna is only available on devices with screen sizes wider than 1024px.';
			if (targetElement && targetElement.nodeType === Node.ELEMENT_NODE) {
				targetElement.appendChild(this.lunaWarning);
			} else {
				this.lunaWarning.classList.add('standalone');
				document.body.appendChild(this.lunaWarning);
			}

			// Initialize Launchpad
			useLaunchpad && _initLaunchpad.call(this);

			!useLaunchpad && this.colony.children[0].appendChild(document.createElement('div'));

			this.colony.children[0].appendChild(document.createElement('div'));

			// Initialize Mission Control
			_initMissionControl.call(this, showSizeButtons, showRevisionHistory, showExportButton);

			// Initialize Habitat
			{
				_log.call(this, 'Initializing Habitat');

				// Create iframe
				this.habitat = document.createElement('iframe');
				this.habitat.sandbox = 'allow-same-origin';
				this.habitat.allowtransparency = 'true';
				this.habitat.id = _ids.habitatId;
				this.habitat.style['opacity'] = '0';
				this.habitat.style['backgroundColor'] = 'white';

				// Create Base
				const base = document.createElement('div');
				base.id = _ids.baseId;

				const habitatArea = document.createElement('div');
				habitatArea.id = _ids.habitatAreaId;
				base.appendChild(habitatArea);

				habitatArea.appendChild(this.habitat);

				this.habitatInfo = document.createElement('div');
				this.habitatInfo.id = _ids.habitatInfoId;
				habitatArea.appendChild(this.habitatInfo);

				this.colony.children[0].children[1].appendChild(base);
				if (targetElement && targetElement.nodeType === Node.ELEMENT_NODE) {
					targetElement.appendChild(this.colony);
				} else {
					this.colony.classList.add('standalone');
					document.body.appendChild(this.colony);
				}

				this.habitat.onload = () => {
					this.habitat.style.opacity = 1;
					this.resetHabitatSize();
					this.missionControl.element.style.display = 'flex';
					const style = this.missionControl.element.style;
					setTimeout(function () { style.opacity = 1 }, 1);
				}

				// Populate iframe with element
				const habitatDocument = this.habitat.contentWindow.document;
				habitatDocument.open();
				habitatDocument.write('<!DOCTYPE html>');

				// Process initialContent
				if (initialContent !== null) {
					if (typeof initialContent === 'string' || initialContent instanceof String) {
						_log.call(this, 'Parsing \'initialContent\' as HTML String.');
						habitatDocument.write(initialContent);
					} else if (initialContent.nodeType === Node.ELEMENT_NODE) {
						_log.call(this, 'Parsing \'initialContent\' as DOM Element.');
						habitatDocument.write(initialContent.innerHTML);
						removeInitialContent && document.body.removeChild(initialContent);
					}
				} else {
					habitatDocument.write('<p>Welcome to the Lunajs website builder!</p>');
				}

				habitatDocument.querySelector('html').style.minHeight = '100%';

				if (_ids.selectedClass === 'luna-selected') {
					habitatDocument.head.insertAdjacentHTML('beforeend', '<style>.luna-selected{border:1px dashed #00f!important;border-radius:3px!important}</style>');
				}

				if (useStylesheets) {
					console.log('stylesheets')
					// Append stylesheets to element
					document.querySelectorAll('link[rel=stylesheet]').forEach(stylesheet => {
						habitatDocument.head.insertAdjacentHTML('beforeend', stylesheet.outerHTML);
					})
				}

				habitatDocument.close();

				_registerListeners.call(this);
			}

			// return Luna object
			return this;
		},
		/**
		 * Exports all Habitat contents into an HTML file.
		 * 
		 * @param {object} rocket The rocket being added to the launchpad.
		 */
		exportToFile: function () {
			this.resetControlPanel();

			this.habitat.contentWindow.document.body.style.padding = '';
			this.habitat.contentWindow.document.body.style.cursor = '';

			this.habitat.contentWindow.document.querySelector('html').style.minHeight = '';

			const elHtml = this.habitat.contentWindow.document.querySelector("html").outerHTML;
			const link = document.createElement('a');
			link.setAttribute('download', 'download.html');
			link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(elHtml));
			link.click();

			this.habitat.contentWindow.document.body.style.padding = '2rem';
			this.habitat.contentWindow.document.body.style.cursor = 'pointer';
			this.habitat.contentWindow.document.querySelector('html').style.minHeight = '100%';
		},
		/**
		 * Close Lunajs instance.
		 * 
		 * @return {object} Habitat contents.
		 */
		close: function () {
			this.resetControlPanel();

			this.habitat.contentWindow.document.body.style.padding = '';
			this.habitat.contentWindow.document.body.style.cursor = '';

			const elHtml = this.habitat.contentWindow.document.querySelector("html").outerHTML;
			this.colony.parentElement.removeChild(this.colony);
			return elHtml;
		},
		/**
		 * Set size of Habitat.
		 *
		 * @param {object} label The label that appears bottom right below the habitat.
		 * @param {object} width The new width of the habitat.
		 * @param {object} height The new height of the habitat.
		 */
		setHabitatSize: function (label, width, height) {
			_log.call(this, `Updating Habitat dimensions to ${width}px x ${height}px`);

			this.habitat.parentElement.style.setProperty('width', `${width}px`);
			this.habitat.parentElement.style.setProperty('height', `${height}px`);

			// Update info text
			this.habitatInfo.textContent = label;
		},
		/**
		 * Reset size of Habitat to default (Fit).
		 */
		resetHabitatSize: function () {
			_log.call(this, `Resetting Habitat dimensions`);

			// Update dimensions
			this.habitat.parentElement.style.removeProperty('width');
			this.habitat.parentElement.style.removeProperty('height');

			// Update info text
			this.habitatInfo.textContent = 'Fit';
		},
		/**
		 * Select element inside the Habitat.
		 * 
		 * @param {object} element The element inside the Habitat being selected.
		 */
		selectElement: function (element) {
			_log.call(this, 'Selecting element');
			if (element === this.missionControl.controlPanel.selectedElement) {
				this.resetControlPanel();
			} else {
				_updateControlPanel.call(this, element);
			}
		},
		/**
		 * Update the Revision History and selectedElement States
		 */
		updateState: function () {
			// Update undo control
			const undo = this.missionControl.controls['luna-history-controls'].element.children[0];
			if (this.missionControl.revisionHistory.position > 0) {
				undo.removeAttribute('disabled');
			} else {
				undo.setAttribute('disabled', '');
			}
			// Update redo control
			const redo = this.missionControl.controls['luna-history-controls'].element.children[1];
			if (this.missionControl.revisionHistory.position < this.missionControl.revisionHistory.history.length - 1) {
				redo.removeAttribute('disabled');
			} else {
				redo.setAttribute('disabled', '');
			}

			// Check if selectedElement was removed
			if (this.missionControl.controlPanel.selectedElement && this.habitat.contentWindow.document.body.querySelector(`.${_ids.selectedClass}`) == null) {
				this.resetControlPanel();
			}
		},
		/**
		 * Create controls.
		 * 
		 * @param {object} rocket The rocket being added to the launchpad.
		 */
		addControl: function (controls) {
			this.missionControl.controls[controls.name] = {};
			this.missionControl.controls[controls.name].element = document.createElement('div');
			const controlElement = this.missionControl.controls[controls.name].element;
			controlElement.id = controls.name;

			if ('aligned' in controls && controls.aligned === 'left') {
				controlElement.style.marginLeft = 'auto';
			}
			if ('leftSpacing' in controls) {
				controlElement.style.marginLeft = '0.5rem';
			}

			controls.controls.forEach(control => {
				const button = document.createElement('button');
				if (control.icon) {
					button.innerHTML = control.icon.trim();
				} else {
					button.textContent = control.label;
					button.classList.add('wide');
				}
				'title' in control && button.setAttribute('title', control.title);
				'disabled' in control && button.setAttribute('disabled', '');
				let setActive = false;
				if ('setActive' in control) {
					setActive = control.setActive;
				}
				'callback' in control && button.addEventListener('click', event => _handleControlClick.call(this, event, setActive, control.callback));
				controlElement.appendChild(button);
				'default' in control && button.classList.add('active');
			})

			// Append controls to Mission Control element
			this.missionControl.controls.element.appendChild(controlElement);
		},
		/**
		 * Reset Control Panel (hide it).
		 */
		resetControlPanel: function () {
			_log.call(this, 'Resetting Control Panel');

			if (this.missionControl.controlPanel.selectedElement) {
				this.colony.classList.remove(_ids.controlPanelShowingClass);
				this.missionControl.controlPanel.selectedElement.classList.remove(_ids.selectedClass);
				this.missionControl.controlPanel.selectedElement = null;
			}
			this.colony.classList.remove('luna-panel-showing');
			this.missionControl.controlPanel.element.style.display = 'none';
			this.missionControl.controlPanel.element.style.opacity = 0;
		},
		/**
		 * Add Component to Launchpad.
		 *
		 * @param {object} rocket The rocket being added to the launchpad.
		 */
		addComponent: function (rocket) {
			if (rocket == null) {
				_error('Component argument missing.');
				return;
			}
			if (!(rocket instanceof Component)) {
				_error('Object passed in as argument is not a Component.');
				return;
			}

			const launchpadWarning = this.launchpad.element.querySelector(`#${_ids.launchpadWarningId}`);
			if (launchpadWarning) {
				launchpadWarning.parentElement.removeChild(launchpadWarning);
			}

			const rocketBody = document.createElement('div');

			// Preview Stage
			const previewStage = document.createElement('div');
			previewStage.classList.add(_ids.rocketClass);
			previewStage.innerHTML = rocket.innerHTML;
			previewStage.addEventListener('click', (e) => {
				_log.call(this, 'Adding Component to Habitat');
				// this.habitat.contentWindow.document.body.insertAdjacentHTML('beforeend', e.target.innerHTML);
				this.missionControl.revisionHistory.executeAction('addElement', { elementHTML: e.target.innerHTML });
			})
			rocketBody.appendChild(previewStage);

			// Name Stage
			const nameStage = document.createElement('h2');
			nameStage.textContent = rocket.name;
			rocketBody.appendChild(nameStage);

			this.launchpad.element.appendChild(rocketBody);
		}
	}

	global.Component = global.Component || Component;
	global.Lunajs = global.Lunajs || Lunajs;

})(window, window.document);
