export const withDefault = (column, field)=>{
    if (typeof field.defaultValue === 'undefined' || typeof field.defaultValue === 'function') {
        return column;
    }
    if (typeof field.defaultValue === 'string' && field.defaultValue.includes("'")) {
        const escapedString = field.defaultValue.replaceAll("'", "''");
        return {
            ...column,
            default: escapedString
        };
    }
    return {
        ...column,
        default: field.defaultValue
    };
};

//# sourceMappingURL=withDefault.js.map