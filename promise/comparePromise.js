promise.then(f1).catch(f2);
promise.then(f1, f2);

// If in first line there is error .catch(f2) will catch error , but in second line will pass error
