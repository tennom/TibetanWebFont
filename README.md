### Tibetan fonts on on Windows, Mac/iOS, Android and Linux
Since the advent of Android 6(started affective in 2016), all major desktop and phone OSes are preinstalled with Tibetan fonts like bellow here.

| Windows  | Mac/iOS | Android | Linux |
| ------------- | ------------- | ------------- | ------------- |
| Ms Himalaya  | Kailasa  | Noto Sans Tibetan | Tibetan Machine Uni


### The problem: Tibetan text showing on these OSes
![](https://github.com/tennom/TibetanWebFont/blob/master/webTibetanB.png)
> Tibetan websites without font configuration

### A solution :wink: using this script
![](https://github.com/tennom/TibetanWebFont/blob/master/webTibetanA.png)
> Tibetan websites with usage of webBo.js


### Features

- No need of embedding a Tibetan font which is at least several handreds of KB in size.
- webBo.js is just 5KB and uses the preinstalled fonts on your OS.
- webBo.js is combined with CSS and can be used as CSS styles.
- You can adjust the Tibetan font size as the normal font-size.

### Todos/Future work
- Set the size with one CSS property. As of now, it needs multiple css properties to define Tibetan text size of an element. 

### How to use it?
##Step 1:
```html
//include the script like this at the end your document body. You can also Asych or defer the load as you wish.
//Please do not include it in the head or it will not work.
<script type="text/javascript" src="js/webBo.js"></script>
//Once included, it will detect the Tibetan font on the visitor's computer/cellphone
//It will define --bo-family, --bo-factor and --bo-lheight(line height) in the root
```
##Step 2:
```html
<style>
  .bo-font {
     /* change --text-size to the size you want in em or px or else*/
     --text-size:1em;
     /* No need for change of the following three lines. */
     font-family: var(--bo-family);
     line-height: var(--bo-lHeight);
     font-size: calc(var(--bo-factor,1) *var(--text-size,1em));
  }
</style>
//then you can use your style as normal
```

##### A live demo will be available at [Tennom's tools](https://tennom.net/tools/webBo "Web Bo Demo"), it's not there yet sorry.
##### Credits to UVA projects under Prof. David Germano.
##### Reminder! Using this script on non-Tibetan text may result in bad text rendering. Please use it only when you have Tibetan text mixed with other languages or Tibetan text only.

