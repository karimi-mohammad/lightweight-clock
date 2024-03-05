class Clock {
    /**
     * HTML element that displays the clock
     * @type {HTMLElement | null}
     */
    clockContainerElement = null;

    /**
     * setInterval id for continuous time update
     * @type {number | null}
     */
    clockUpdateInterval = null;

    /**
     * Constructor of the class
     */
    constructor() {
    }

    /**
     * Returns the current time as a NowTime object
     * @returns {NowTime}
     */
    getNow() {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        };
    }

    /**
     * Starts continuous time update and display
     */
    start() {
        if (!this.clockContainerElement) {
            throw new Error("Clock element not provided. Please call Clock.show() first.");
        }

        const updateClock = () => {
            try {
                const now = this.getNow();
                this.clockContainerElement.textContent = `${now.hours}:${now.minutes}:${now.seconds}`;
            } catch (error) {
                console.error("Error updating clock:", error);
            }
        };

        this.clockUpdateInterval = setInterval(updateClock, 1000);
    }

    /**
     * Stops the time update
     */
    stop() {
        clearInterval(this.clockUpdateInterval);
        this.clockUpdateInterval = null; // Explicitly reset the interval ID to avoid potential memory leaks.
    }

    /**
     * Shows the clock in a provided HTML element
     * @param {HTMLElement} element The element to display the clock in
     */
    show(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error("Invalid element provided to Clock.show()");
        }

        this.clockContainerElement = element;
        this.start(); // Start if element is valid
    }
}

// Export the Clock class for use in other parts of the code
export { Clock };
