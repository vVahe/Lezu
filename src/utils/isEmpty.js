/** Custom method to check if value is empty
    @param value
    @returns boolean: TRUE if value is empty, FALSE value is not empty
    @modifies none
*/
const isEmpty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

export default isEmpty;
