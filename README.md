# combat-tracker-images
FoundryVTT Module that replaces images in the combat tracker

![the latest version zip](https://img.shields.io/github/downloads/MarkPearce/combat-tracker-images/releases/latest/download/combat-tracker-images.zip)

This module lets you select a custom image to to represent an Actor in the combat tracker. Square images (1:1 aspect ration) are best.
Now you can replace that token image with a nice headshot for your PC's

![gif showing module working](https://imgur.com/G15AUuL.gif)


USAGE
Once you have activated the module you will find two macros in the "Combat Tracker Images Macros" compendium.
Import the macros, and use them to set/remove combat tracker images. You only need the macros to modify or remove the image.
Once you have set the flag you don't need to keep the macros loaded in your world. (they are tiny though)

To Add/Change a combat tracker image:
1. select a token
2. click the "Set Combat Tracker Image" macro and it will open a file picker to select an image.
3. that image will now be saved to that tokens Actor, and used when adding it to the combat tracker if the module is active.

To remove a combat tracker image:
1. select a token
2. click the "Remove Combat Tracker Image" macro.
3. The image flag will be removed from the Actor.

note: Version 1.0 only supports Actors so if you have multiple copies of the same actor they will share the same Combat Tracker Image.

Thanks for the help and advice:
STWLAM
honeybadger, HarryFurAlle, Mana
