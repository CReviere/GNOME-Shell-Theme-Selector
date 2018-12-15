const Lang = imports.lang;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;

const switchTheme = "/home/cr/Scripts/switchTheme"

const SpacerMenuItem = new Lang.Class ({
	Name: 'SpacerMenuItem',
	Extends: PopupMenu.PopupSubMenuMenuItem,
	
	_init: function() {
		this.parent ('Spacer: Connecting...', true);
		this.label.set_text ("-------------");
	},
	
	destroy: function () {
		this._control.disconnect (this._controlSignal);
		this.parent();
	}
});

const ThemeSelectionSubMenu = new Lang.Class ({
	Name: 'ThemeSelectionSubMenu',
	Extends: PopupMenu.PopupSubMenuMenuItem,

	_init: function () {
		this.parent ('Theme Selector: Connecting...', true);
		this.label.set_text ("Select Desktop Theme");
		this._listThemeSelections();
	},

	_listThemeSelections: function () {
		this.menu.removeAll();

		let light = new PopupMenu.PopupMenuItem ('Light');
		light.connect ('activate', Lang.bind (this, function () {
			Util.spawnCommandLine ("sh " + switchTheme + " light");
		}));
		this.menu.addMenuItem (light);

		let dark = new PopupMenu.PopupMenuItem ('Dark');
		dark.connect ('activate', Lang.bind (this, function () {
			Util.spawnCommandLine ("sh " + switchTheme + " dark");		
		}));
		this.menu.addMenuItem (dark);
	},

	destroy: function () {
		this._control.disconnect (this._controlSignal);
		this.parent();
	}
});

let themeSelectionSubMenu = null;

function init() {
}

function enable() {
	if (themeSelectionSubMenu !== null)
		return;
	themeSelectionSubMenu = new ThemeSelectionSubMenu();
	spacerMenuItem = new SpacerMenuItem();
	
	let aggMen = Main.panel.statusArea.aggregateMenu;
	let volMen = aggMen._volume._volumeMenu;
	let items = volMen._getMenuItems();
	let i = 0;
	while (i < items.length)
		if (items[i] === volMen._output.item)
			break;
		else
			i++;
	//aggMen.addMenuItem (spacerMenuItem, 1);
	volMen.addMenuItem (themeSelectionSubMenu, i + 3);

	// Add the theme selector near the top, but below the volume slider
	//let volMen = Main.panel.statusArea.aggregateMenu._volume._volumeMenu;
	//let items = volMen._getMenuItems();
	//volMen.addMenuItem (numItems.length - 1, 5);
}

function disable() {
	themeSelectionSubMenu.destroy();
	themeSelectionSubMenu = null;
}

