'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useCallback, useEffect } from 'react';
const baseClass = 'toolbar-popup__dropdown';
import { mergeRegister } from '@lexical/utils';
import { useTranslation } from '@payloadcms/ui';
import { $getSelection } from 'lexical';
import { useEditorConfigContext } from '../../../../lexical/config/client/EditorConfigProvider.js';
import { DropDown, DropDownItem } from './DropDown.js';
const ToolbarItem = t0 => {
  const $ = _c(18);
  const {
    active,
    anchorElem,
    editor,
    enabled,
    item
  } = t0;
  const {
    i18n
  } = useTranslation();
  const {
    fieldProps: t1
  } = useEditorConfigContext();
  const {
    featureClientSchemaMap,
    schemaPath
  } = t1;
  if (item.Component) {
    let t2;
    if ($[0] !== active || $[1] !== anchorElem || $[2] !== editor || $[3] !== enabled || $[4] !== item) {
      t2 = item?.Component && _jsx(item.Component, {
        active,
        anchorElem,
        editor,
        enabled,
        item
      }, item.key);
      $[0] = active;
      $[1] = anchorElem;
      $[2] = editor;
      $[3] = enabled;
      $[4] = item;
      $[5] = t2;
    } else {
      t2 = $[5];
    }
    return t2;
  }
  let title = item.key;
  let croppedTitle;
  if (item.label) {
    let t2;
    if ($[6] !== featureClientSchemaMap || $[7] !== i18n || $[8] !== item || $[9] !== schemaPath) {
      t2 = typeof item.label === "function" ? item.label({
        featureClientSchemaMap,
        i18n,
        schemaPath
      }) : item.label;
      $[6] = featureClientSchemaMap;
      $[7] = i18n;
      $[8] = item;
      $[9] = schemaPath;
      $[10] = t2;
    } else {
      t2 = $[10];
    }
    title = t2;
  }
  if (title.length > 25) {
    croppedTitle = title.substring(0, 25) + "...";
  } else {
    croppedTitle = title;
  }
  let t2;
  if ($[11] !== active || $[12] !== croppedTitle || $[13] !== editor || $[14] !== enabled || $[15] !== item || $[16] !== title) {
    t2 = _jsx(DropDownItem, {
      active,
      editor,
      enabled,
      Icon: item?.ChildComponent ? _jsx(item.ChildComponent, {}) : undefined,
      item,
      tooltip: title,
      children: _jsx("span", {
        className: "text",
        children: croppedTitle
      })
    }, item.key);
    $[11] = active;
    $[12] = croppedTitle;
    $[13] = editor;
    $[14] = enabled;
    $[15] = item;
    $[16] = title;
    $[17] = t2;
  } else {
    t2 = $[17];
  }
  return t2;
};
export const ToolbarDropdown = t0 => {
  const $ = _c(36);
  const {
    anchorElem,
    classNames,
    editor,
    group,
    Icon,
    itemsContainerClassNames,
    label,
    maxActiveItems,
    onActiveChange
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [activeItemKeys, setActiveItemKeys] = React.useState(t1);
  let t2;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = [];
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const [enabledItemKeys, setEnabledItemKeys] = React.useState(t2);
  const [enabledGroup, setEnabledGroup] = React.useState(true);
  const editorConfigContext = useEditorConfigContext();
  const {
    items,
    key: groupKey
  } = group;
  let t3;
  if ($[2] !== editor || $[3] !== editorConfigContext || $[4] !== group || $[5] !== items || $[6] !== maxActiveItems || $[7] !== onActiveChange) {
    t3 = () => {
      editor.getEditorState().read(() => {
        const selection = $getSelection();
        if (!selection) {
          return;
        }
        const _activeItemKeys = [];
        const _activeItems = [];
        const _enabledItemKeys = [];
        for (const item of items) {
          if (item.isActive && (!maxActiveItems || _activeItemKeys.length < maxActiveItems)) {
            const isActive = item.isActive({
              editor,
              editorConfigContext,
              selection
            });
            if (isActive) {
              _activeItemKeys.push(item.key);
              _activeItems.push(item);
            }
          }
          if (item.isEnabled) {
            const isEnabled = item.isEnabled({
              editor,
              editorConfigContext,
              selection
            });
            if (isEnabled) {
              _enabledItemKeys.push(item.key);
            }
          } else {
            _enabledItemKeys.push(item.key);
          }
        }
        if (group.isEnabled) {
          setEnabledGroup(group.isEnabled({
            editor,
            editorConfigContext,
            selection
          }));
        }
        setActiveItemKeys(_activeItemKeys);
        setEnabledItemKeys(_enabledItemKeys);
        if (onActiveChange) {
          onActiveChange({
            activeItems: _activeItems
          });
        }
      });
    };
    $[2] = editor;
    $[3] = editorConfigContext;
    $[4] = group;
    $[5] = items;
    $[6] = maxActiveItems;
    $[7] = onActiveChange;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  const updateStates = t3;
  let t4;
  let t5;
  if ($[9] !== updateStates) {
    t4 = () => {
      updateStates();
    };
    t5 = [updateStates];
    $[9] = updateStates;
    $[10] = t4;
    $[11] = t5;
  } else {
    t4 = $[10];
    t5 = $[11];
  }
  useEffect(t4, t5);
  let t6;
  let t7;
  if ($[12] !== editor || $[13] !== updateStates) {
    t6 = () => mergeRegister(editor.registerUpdateListener(() => {
      updateStates();
    }));
    t7 = [editor, updateStates];
    $[12] = editor;
    $[13] = updateStates;
    $[14] = t6;
    $[15] = t7;
  } else {
    t6 = $[14];
    t7 = $[15];
  }
  useEffect(t6, t7);
  const t8 = `${groupKey} dropdown`;
  const t9 = `${baseClass}-${groupKey}`;
  let t10;
  if ($[16] !== classNames) {
    t10 = classNames || [];
    $[16] = classNames;
    $[17] = t10;
  } else {
    t10 = $[17];
  }
  let t11;
  if ($[18] !== t10 || $[19] !== t9) {
    t11 = [baseClass, t9, ...t10].filter(Boolean);
    $[18] = t10;
    $[19] = t9;
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  const t12 = t11.join(" ");
  const t13 = !enabledGroup;
  let t14;
  if ($[21] !== itemsContainerClassNames) {
    t14 = itemsContainerClassNames || [];
    $[21] = itemsContainerClassNames;
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  let t15;
  if ($[23] !== Icon || $[24] !== activeItemKeys || $[25] !== anchorElem || $[26] !== editor || $[27] !== enabledItemKeys || $[28] !== groupKey || $[29] !== items || $[30] !== label || $[31] !== t12 || $[32] !== t13 || $[33] !== t14 || $[34] !== t8) {
    t15 = _jsx(DropDown, {
      buttonAriaLabel: t8,
      buttonClassName: t12,
      disabled: t13,
      Icon,
      itemsContainerClassNames: [`${baseClass}-items`, ...t14],
      label,
      children: items.length ? items.map(item_0 => _jsx(ToolbarItem, {
        active: activeItemKeys.includes(item_0.key),
        anchorElem,
        editor,
        enabled: enabledItemKeys.includes(item_0.key),
        item: item_0
      }, item_0.key)) : null
    }, groupKey);
    $[23] = Icon;
    $[24] = activeItemKeys;
    $[25] = anchorElem;
    $[26] = editor;
    $[27] = enabledItemKeys;
    $[28] = groupKey;
    $[29] = items;
    $[30] = label;
    $[31] = t12;
    $[32] = t13;
    $[33] = t14;
    $[34] = t8;
    $[35] = t15;
  } else {
    t15 = $[35];
  }
  return t15;
};
//# sourceMappingURL=index.js.map