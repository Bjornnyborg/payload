import { deepMergeSimple } from '@payloadcms/translations/utilities';
import { getSelectMode } from './getSelectMode.js';
export const sanitizeSelect = ({ forceSelect, select })=>{
    if (!forceSelect || !select) {
        return select;
    }
    const selectMode = getSelectMode(select);
    if (selectMode === 'exclude') {
        return select;
    }
    return deepMergeSimple(select, forceSelect);
};

//# sourceMappingURL=sanitizeSelect.js.map