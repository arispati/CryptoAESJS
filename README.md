# CryptoAESJS
AES crypto library which can be used in php and javascript

## How to Install
- Install with composer
```bash
npm install @arispati/crypto-aes
```

## How to Use
```javascript
import CryptoAES from '@arispati/crypto-aes'

// Set the secret key
let secretKey = 's3cr3tK3y' // default secret key

// Initilize CryptoAES Class
let crypto = new CryptoAES(secretKey)

// Encrypt
let encrypted = crypto.encrypt('Hello World')
// {"ct":"ZIT1dzu47ndkudvSX9buFw==","iv":"56750944c9cb7b1844aab808c4f4581d","s":"35c9511ea1d8e3e5"}

// Decrypt
let decrypted = crypto.decrypt(encrypted)
// "Hello World"
```
