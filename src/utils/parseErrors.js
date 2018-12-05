import _ from 'lodash';

// Define variables here.

export default function(errors) {
    const result = {};
    _.forEach(errors, (val, key) => {
        result[key] = val.message;
    });
    return result;
}