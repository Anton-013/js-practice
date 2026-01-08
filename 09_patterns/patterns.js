// https://www.youtube.com/watch?v=tzWyyvyjaxs
// остановился на 1:04

const button = {
    _subscriber: {
        'click': [],
        'focus': [],
    },
    click() {
        this._subscriber['click'].forEach(subscriber => subscriber())
    },
    addEventListener(eventName, subscriber) {
        this._subscriber[eventName].push(subscriber)

        return () => {
            this.removeEventListener(eventName, subscriber)
        }
    },
    removeEventListener(eventName, subscriber) {
        this._subscriber[eventName] = this._subscriber[eventName].filter((event) => event !== subscriber)
    },
}

const callback = () => {
    console.log('button was clicked 1')
}

const unsubscriber = button.addEventListener('click', () => {
    console.log('button was clicked 2')
})

unsubscriber()

button.addEventListener('click', callback)

button.removeEventListener('click', callback)



button.click()

// button.addEventListener('focus', () => { })
