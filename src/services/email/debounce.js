/**
 * Debounce a function so that it get called only once in (at minimum) the specified period
 *
 * @param func to be debounced
 * @param period in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(func, period = 100) {
  let funcTimeout;

  function debounced() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const funcContext = this;
    const funcArguments = arguments;

    const runDebounced = () => {
      funcTimeout = null;
      func.apply(funcContext, funcArguments);
    };

    clearTimeout(funcTimeout);
    funcTimeout = setTimeout(runDebounced, period);
  }

  debounced.cancel = function () {
    clearTimeout(funcTimeout);
  };

  return debounced;
}

export default debounce;