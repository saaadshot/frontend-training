  class Utils {
    // write logic to find whether value is null
  isNull = (value) => {
    if (Object.is(value, null)) {
      return true;
    }
    return false;
  };

  isUndefined = (value) => {
    // write logic to find whether value is undefined
    if (Object.is(value, undefined)) {
      return true;
    }
    return false;
  };

  isNumber = (value) => {
    // write logic to find whether value is number
    if (typeof (value) === "number" && !Object.is(-0, value)) {
      return true;
    }
    return false;
  };

  isString = (value) => {
    // write logic to find whether value is string
    if (typeof (value) === "string") {
      return true;
    }
    return false;
  };

  isBoolean = (value) => {
    // write logic to find whether value is boolean value
    if (typeof (value) === "boolean") {
      return true;
    }
    return false;
  };

  isObject = (value) => {
    // write logic to find whether value is an object
    if (typeof (value) === "object" && value != null) {
      return true;
    }
    return false;
  };

  isArray = (value) => {
    // write logic to find whether value is an Array
    if (Array.isArray(value)) {
      return true;
    }
    return false;
  };

  isTruthy = (value) => {
    // Write logic to find whether value is truthy
    if (!!value) {
      return true;
    }
    return false;
  };

  isFalsy = (value) => {
    // Write logic to find whether value is falsy
    if (!value) {
      return true;
    }
    return false;
  };

  isFunction = (value) => {
    return typeof value === "function";
  };

  keys = (value) => {
    /**
     * Write logic to only extract keys from an object and create an array of keys
     * value: {'animal': 'lion', 'age': 6}
     * output: ['animal', 'age']
     */
    return Object.keys(value);
  };

  values = (value) => {
    /**
     * Write logic to only extract values from an object and create an array of values
     * value: {'animal': 'lion', 'age': 6}
     * output: ['lion', 6]
     */
    return Object.values(value);
  };

  size = (value) => {
    /**
     * Find the size of value
     * value: array
     */

    return Object.keys(value).length();
  };

  filter = (collection, predicate) => {
    /**
     * collection: array
     * predicate: function
     * usage: filter([1,2,3,4], (item) => { return item !== 2})
     */

    if (!this.isArray(collection)) {
      return [];
    }

    if (!this.isFunction(predicate)) {
      return collection;
    }

    const result = [];
    for (const item of collection) {
      const truthy = predicate(item);

      if (truthy) {
        result.push(item);
      }
    }
  };
}

async function fetchDefinition() {
  /**
   * Write code to make an api call to get json
   * URL: https://raw.githubusercontent.com/karthik-hr/js-utils/master/definition.json;
   */
  const response = await fetch("https://raw.githubusercontent.com/karthik-hr/js-utils/master/definition.json")
    .then(res => res.json())
  return response.data;
}

function findStats(definition) {
  const instance = new Utils();

  const stats = {
    numberOfItems: 0,
    null: 0,
    undefined: 0,
    numbers: 0,
    strings: 0,
    boolean: 0,
    objects: 0,
    array: 0,
    truthy: 0,
    falsy: 0,
  };

  /**
   * Write loop here to update stats
   *
   *
   */
    definition.forEach(obj => {
    const data = Object.values(obj);
      data.forEach(value => {

      if (instance.isNull(value)) {
      stats.null++;
      }

      if (instance.isUndefined(value)) {
        stats.undefined++;
      }

      if (instance.isNumber(value)) {
        stats.numbers++;
      }

      if (instance.isString(value)) {
        stats.strings++;
      }

      if (instance.isBoolean(value)) {
        stats.boolean++;
      }

      if (instance.isObject(value)) {
        stats.objects++;
      }
        
      if (instance.isArray(value)) {
        stats.array++;
      }
        
      if (instance.isTruthy(value)) {
        stats.truthy++;
      }
        
      if (instance.isFalsy(value)) {
        stats.falsy++;
      }
      })
      stats.numberOfItems++;
    });
  
  /* Here is the same above logic with simple for loop. The answers are different
  
      for(var obj in definition) {
      const data = Object.values(obj);
      for(var value in data) {

      if (instance.isNull(value)) {
      stats.null++;
      }

      if (instance.isUndefined(value)) {
        stats.undefined++;
      }

      if (instance.isNumber(value)) {
        stats.numbers++;
      }

      if (instance.isString(value)) {
        stats.strings++;
      }

      if (instance.isBoolean(value)) {
        stats.boolean++;
      }

      if (instance.isObject(value)) {
        stats.objects++;
      }
        
      if (instance.isArray(value)) {
        stats.array++;
      }
        
      if (instance.isTruthy(value)) {
        stats.truthy++;
      }
        
      if (instance.isFalsy(value)) {
        stats.falsy++;
      }
      }
      stats.numberOfItems++;
    }

  */

  return stats;
  }

function render(stats) {
  const items = Object.keys(stats);
  const ul = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `${item}: ${stats[item]}`;
    ul.appendChild(li);
  }
  const root = document.getElementById("stats");
  if (root) {
    root.innerHTML = "";
    root.append(ul);
  }
}

async function main() {
  const definition = await fetchDefinition();

  const stats = findStats(definition);
  render(stats);
}

main();
