const { logger, HttpClient } = require("custom-module");

(async () => {
    logger.info('test init.');
    const httpClient = new HttpClient();
    const html = await httpClient.get("https://www.google.com");
    logger.info(html);
    logger.info('test finish.');
})()