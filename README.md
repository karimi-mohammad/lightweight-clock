# Lightweight Clock

This JavaScript library provides a simple and intuitive way to display a live, updating clock in your web applications. It offers a clean and efficient implementation, making it ideal for scenarios where performance and resource usage are essential.

## Installation

You can install the lightweight-clock library using npm or yarn:

```bash
npm install lightweight-clock

yarn add lightweight-clock
```

### Usage

 Import the Clock class:

```JavaScript
import { LW_Clock } from 'lightweight-clock';
```
  
Create a Clock instance and specify the HTML element to display it:

```JavaScript
const clockElement = document.getElementById('my-clock');
const clock = new LW_Clock();
clock.show(clockElement);
```

Make sure you have an HTML element with the specified ID (my-clock in this example) in your document.

(Optional) Stop the clock:

```JavaScript
clock.stop();
```

This will stop the clock from updating further.

### Features

- Live time display: Continuously updates the displayed time in real-time.
- Lightweight and efficient: Designed with minimal performance impact in mind.
- Easy to use: Simple API with clear methods for controlling the clock.
- Error handling: Validates input and gracefully handles potential errors.

Example Code
HTML

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Live Clock</title>
</head>
<body>
    <div id="my-clock"></div>
    <script src="node_modules/lightweight-clock/dist/index.js"></script>
    <script>
        import { LW_Clock } from 'lightweight-clock';
        const clockElement = document.getElementById('my-clock');
        const clock = new LW_Clock();
        clock.show(clockElement);
    </script>
</body>
</html>
```

### License

This library is licensed under the MIT License. For more information, see the LICENSE file.

Contribution

We welcome contributions to improve this library. Feel free to submit pull requests or issues on our 
[GitHub repository](https://github.com/karimi-mohammad/lightweight-clock)
.

[NPM repository](https://www.npmjs.com/package/lightweight-clock)