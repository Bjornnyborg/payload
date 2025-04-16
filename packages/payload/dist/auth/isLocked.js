const isLocked = (date)=>{
    if (!date) {
        return false;
    }
    return date > Date.now();
};
export default isLocked;

//# sourceMappingURL=isLocked.js.map