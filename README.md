### Tibetan fonts on on Windows, Mac/iOS, Android and Linux
Since the advent of Android 6(started affective in 2016), all major desktop and phone OSes are preinstalled with Tibetan fonts like bellow here.

| Windows  | Mac/iOS | Android | Linux |
| ------------- | ------------- | ------------- | ------------- |
| Ms Himalaya  | Kailasa  | Noto Sans Tibetan | Tibetan Machine Uni


### The problem: Tibetan text showing on these O
![](https://github.com/tennom/TibetanWebFont/blob/master/webTibetanB.jpg)

> Tibetan websites without font configuration

### A solution :wink: using this script
![](https://github.com/tennom/TibetanWebFont/blob/master/webTibetanA.jpg)

> Tibetan websites with usage of webBo.js


### Features

- No need of embedding a Tibetan font which is at least several handreds of KB in size.
- webBo.js is just 5KB and uses the preinstalled fonts on your OS.
- webBo.js has two modes: fit and reading, fit is suitable for most occasions while reading is for 
intensive Tibetan text.

### How to use it?

```html
//include the script like this
<script  type="text/javascript" src="js/webBo.js"></script>
<script>
//Please replace your element name in the square brackets bellow, and no brackets.
[TibetanTextElement].style.font = WebTibetan();
</script>
```
or if you want to set it to reading mode
```html
//include the script like this
<script  type="text/javascript" src="js/webBo.js"></script>
<script>
//Please replace your element name in the square brackets bellow, and no brackets.
[TibetanTextElement].style.font = WebTibetan('reading');
</script>
```
##### A live demo will be available at [Tennom's tools](https://tennom.net/tools/webBo "Web Bo Demo"), it's not there yet sorry.

##### Reminder! Using this script on non-Tibetan text may result in bad text rendering. Please use it only when you have Tibetan text mixed with other languages or Tibetan text only.

