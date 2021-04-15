# Opus Luna

![alt text](https://github.com/Restitutor-Orbis/Opus-Luna/blob/main/showcases/showcase1.png?raw=true)

A random wallpaper when you open the tab, a quote that only changes daily, and the current temperature in your city!

Also includes a RSS-feed displayer when hovered to the left of the screen.

Currently supported languages for the calender are Spanish, Danish, and English. This is detected by your browser's set language.

The search bar supports a few commands like ".img 'text'" for searching google images and ".wiki 'text'" for searching wikipedia.
 
 ## Customize wallpapers
 Simply drag your cursor to the rop right. These images are stored in your local storage, so they are saved for your next visit.
 But because of this the files can't be too big. In total they can't be bigger than 5mb (probably less due to other stored data).
 
 If you wish to have higher resolution wallpapers, then you can add them to your local repository and edit "themePicker.js". This should be fairly intuituve.
 To reset the images type "localStorage.clear()" in the browser console.
 
 ![alt text](https://github.com/Restitutor-Orbis/Opus-Luna/blob/main/showcases/showcase2.png?raw=true)
 
## How to use (customization)
Front-end you can customize the city from which the temperature is displayed as well as the 5 used wallpapers. This city is stored for the next time you open the tab. 
Hover over the temperature to see which city the temperature is taken from.

Instructions for editing the files can be found in comments.
- If you want to edit the RSS feeds it can easily be done in "fetcher.js".
- Quotes can be edited in "themePicker.js".
- Wallpapers can be edited "themePicker.js".
- Search engine commands can be edited/added/removed in "searchEngine.js".  
# To be added

- Translation of weather information (clear, sunny, etc.) into local language
- Front-end settings window (for ~wallpapers~, RSS feeds, and languages)
- A 'reset' button for backgrounds

# CREDITS

## Feeds
Feeds fetched with feednami: https://toolkit.sekando.com/docs/en/feednami

## Weather
Weather fetched with Open Weather Map: https://openweathermap.org/api

Most of the code for the weather fetching is taken from the great start page https://github.com/0-l/dawn

## Icon

Loupe-icon used in the search bar: https://www.flaticon.com/download/icon/landing/622669?format=svg&size=512
Gear-icon used in settings: https://www.flaticon.com/free-icon/gear-symbol_45312

## Fonts
Font used is Lemon Milk: https://www.dafont.com/lemon-milk.font

![alt text](https://github.com/Restitutor-Orbis/Opus-Luna/blob/main/showcases/showcase3.png?raw=true)
 
