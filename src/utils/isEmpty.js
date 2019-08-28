const isEmpty = element => {
    return (
        element === undefined ||
        element === null ||
        (typeof element === 'object' && Object.keys(element).length === 0) ||
        (typeof element === 'string' && element.trim().length === 0)
    );
};

export default isEmpty;
