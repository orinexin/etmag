/**
 * Processes data based on the provided time unit and field definition.
 *
 * @param {string} timeUnit - The time unit to process (e.g., 'hour', 'minute').
 * @param {Object} [fieldDef1] - The primary field definition.
 * @param {Object} [fieldDef2] - The secondary field definition (optional).
 * @returns {string} - A message describing the action taken.
 */
function processData(timeUnit, fieldDef1, fieldDef2) {
    // Check if timeUnit is provided and fieldDef2 is not provided
    if (timeUnit && !fieldDef2) {
        // Perform some action when only timeUnit is provided
        return `Processing data with time unit: ${timeUnit} and primary field definition.`;
    }
    
    // Additional logic can go here
    if (fieldDef2) {
        return `Processing data with time unit: ${timeUnit}, primary field definition, and secondary field definition.`;
    }

    // Default case when neither condition is satisfied
    return 'No sufficient data to process.';
}

// Example usage:
console.log(processData('hour', { name: 'startTime' })); 
// Outputs: "Processing data with time unit: hour and primary field definition."

console.log(processData('day', { name: 'date' }, { name: 'additionalInfo' }));
// Outputs: "Processing data with time unit: day, primary field definition, and secondary field definition."

console.log(processData(null, { name: 'date' }));
// Outputs: "No sufficient data to process."
