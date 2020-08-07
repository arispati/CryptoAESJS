import CryptoJS from 'crypto-js'

/**
 * Crypto AES
 * 
 * AES crypto library which can be used in php and javascript
 * 
 * Depedency:
 * crypto-js @3.3.0
 */
export default class CryptoAES
{
  constructor (secretKey = 's3cr3tK3y') {
    this.secretKey = secretKey
  }

  encrypt(plaintext) {
    return CryptoJS.AES.encrypt(JSON.stringify(plaintext), this.secretKey, { format: this.format }).toString()
  }

  decrypt(chiper) {
    return CryptoJS.AES.decrypt(chiper, this.secretKey, { format: this.format }).toString(CryptoJS.enc.Utf8)
  }

  format = {
    'stringify': function (cipherParams) {
      let j = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
      
      if (cipherParams.iv) j.iv = cipherParams.iv.toString()
      if (cipherParams.salt) j.s = cipherParams.salt.toString()
      
      return JSON.stringify(j).replace(/\s/g, '')
    },
    'parse': function (jsonStr) {
      let j = JSON.parse(jsonStr)
      let cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) })
      
      if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv)
      if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s)
      
      return cipherParams
    }
  }
}