### About the project

https://youtu.be/nAubB1ZF3r8 video demonstration of the project

You can view project here: https://gigachat-api-ai-text-generator.vercel.app/

You can use this application in your business, where you need to generate any text at the user's request. For example, the user can write a congratulatory text, but does not want to do this. This application will write a congratulatory text and any text for your client! The frontend of the application is developed in react.js, the backend is developed in node.js and express. The GigaChat API was chosen as the artificial intelligence API, it is cheap and generates good text.

### Node version

The project is made on nodejs v21.6.1, npm v10.2.4, any current version will do

### .env

`AUTH` - your authorization data. If you are an individual, you can access here https://developers.sber.ru/docs/ru/gigachat/individuals-quickstart. If you are a legal entity, you can access here https://developers.sber.ru/docs/ru/gigachat/legal-quickstart. This key is the longest of all. It appears after you click the "generate secret key" button

`SCOPE` - if for an individual, then `GIGACHAT_API_PERS`, if for a legal entity `GIGACHAT_API_CORP`

# Useful links

Documentation - https://developers.sber.ru/docs/ru/gigachat/api/reference/rest/gigachat-api

Tariffs and payment - https://developers.sber.ru/docs/ru/gigachat/api/tariffs

API requests - https://developers.sber.ru/docs/ru/gigachat/api/reference/rest/post-token

# Connecting a certificate

It is necessary to connect the NCA certificate of the Ministry of Digital Development to the Node application: https://developers.sber.ru/docs/ru/gigachat/certificates

There is a certificate for Linux, you click on the `direct link` (or click here [download](https://gu-st.ru/content/Other/doc/russiantrustedca.pem)), the certificate with the `pem` extension will be downloaded, it you need to throw it anywhere with the project

1. `npm install npm -g --ca=null`
2. `export NODE_TLS_REJECT_UNAUTHORIZED=0`
3. `npm config set cafile PATH/TO/CERTIFICATE.pem`
4. `npm config set strict-ssl false`

After these steps, the certificate will connect to the application

## Disable censorship

1. Space for legal entities is needed
2. You must write a request to `gigachat@sberbank.ru`. By specifying the space id and client id, which is given when receiving the api key
3. After point 2 - you will be answered to clarify the information, or “The censor will be disabled within two working days.”
4. After that, in the controlles.js file, find profanity_check and put falkse

### Stack

JavaScript, Express, GigaChat API
