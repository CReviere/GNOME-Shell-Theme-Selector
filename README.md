# GNOME Shell Theme Selector

This extension was developed using GNOME 3.30.2. The extension *should* work for 
versions going back to 3.10, but testing still needs to be performed.

![The menu](https://github.com/CReviere/GNOME-Shell-Theme-Selector/blob/master/screenshot.png)

## About

This extension adds an entry to the status popup menu that allows the user 
to select between easily configurable themes.

## Custom Themes

Currently, the options limited to the hard-coded "Light" and "Dark" themes. 
Also, the themes themselves are hard-coded in the script. Soon, a settings menu, 
accessible via the GNOME Tweak Tool, will allow users to add and rename themes 
to their heart's desire.

## Customizing Icons and Wallpapers

Currently, the script only supports GNOME Shell and GTK themes. 
Soon, support will be added for icon sets, and desktop/lock screen walllpapers.

This extension adds a little entry to the status-menu that shows the currently
selected pulse-audio-output device. Clicking on that will open a submenu with
all available output devices and let's you choose which one to use.

This extension is based on anducs work at https://github.com/anduchs/audio-output-switcher but it's not supporting last versions of gnome-shell.

## Installation

Clone the extension from this repository to your `gnome-shell/extensions` directory.

    git clone git@github.com:CReviere/GNOME-Shell-Theme-Selector.git ~/.local/share/gnome-shell/extensions/gnome-shell-theme-selector@CReviere
    
Access the command launcher by pressing ALT+F2 and enter `r` to restart GNOME-Shell.

Open the GNOME Tweak Tool and enable the extension.

## Updating

To update the extension, run the following command

    `(cd ~/.local/share/gnome-shell/extensions/gnome-shell-theme-selector@CReviere && git pull)`

