# Facebook Tracking Pixel

> React JS wrapper for [Facebook's Pixel](https://developers.facebook.com/docs/facebook-pixel)

## Install

```bash
npm install --save facebook-tracking-pixel

```

or

```bash
yarn add facebook-tracking-pixel

```

## How to use

```js
import { initialize } from 'facebook-tracking-pixel';


initialize('yourPixelIdGoesHere');

track('event');For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events

