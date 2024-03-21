/* eslint-disable no-restricted-globals */

import sjcl from "sjcl";

export default () => {
  /**
   * Encrypts the provided data using the specified password and posts a message with the result.
   *
   * @param event
   * @param {string} event.data.password - The password to use in the encryption
   * @param {string} event.data.data - The data to encrypt
   */
  onmessage = (event) => { // eslint-disable-line no-restricted-globals
    console.log("event inside onmessage", event);

    postMessage({
      encryptedData: sjcl.encrypt(event.data.password, event.data.data),
      workerHref: window.self.location.href
    });
  };
}