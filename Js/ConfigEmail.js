emailjs.init({
    publicKey: '2GSNK1MrwE0L-F3gz',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
    },
    limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
    },
});