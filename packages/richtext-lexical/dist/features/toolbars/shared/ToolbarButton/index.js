'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { mergeRegister } from '@lexical/utils';
import { $addUpdateTag, $getSelection } from 'lexical';
import React, { useCallback, useEffect, useState } from 'react';
import { useEditorConfigContext } from '../../../../lexical/config/client/EditorConfigProvider.js';
const baseClass = 'toolbar-popup__button';
export const ToolbarButton = t0 => {
  const $ = _c(34);
  const {
    children,
    editor,
    item
  } = t0;
  const [enabled, setEnabled] = useState(true);
  const [active, setActive] = useState(false);
  const [className, setClassName] = useState(baseClass);
  const editorConfigContext = useEditorConfigContext();
  let t1;
  if ($[0] !== active || $[1] !== editor || $[2] !== editorConfigContext || $[3] !== enabled || $[4] !== item) {
    t1 = () => {
      editor.getEditorState().read(() => {
        const selection = $getSelection();
        if (!selection) {
          return;
        }
        if (item.isActive) {
          const isActive = item.isActive({
            editor,
            editorConfigContext,
            selection
          });
          if (active !== isActive) {
            setActive(isActive);
          }
        }
        if (item.isEnabled) {
          const isEnabled = item.isEnabled({
            editor,
            editorConfigContext,
            selection
          });
          if (enabled !== isEnabled) {
            setEnabled(isEnabled);
          }
        }
      });
    };
    $[0] = active;
    $[1] = editor;
    $[2] = editorConfigContext;
    $[3] = enabled;
    $[4] = item;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  const updateStates = t1;
  let t2;
  let t3;
  if ($[6] !== updateStates) {
    t2 = () => {
      updateStates();
    };
    t3 = [updateStates];
    $[6] = updateStates;
    $[7] = t2;
    $[8] = t3;
  } else {
    t2 = $[7];
    t3 = $[8];
  }
  useEffect(t2, t3);
  let t4;
  let t5;
  if ($[9] !== updateStates) {
    t4 = () => {
      document.addEventListener("mouseup", updateStates);
      return () => {
        document.removeEventListener("mouseup", updateStates);
      };
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
  let t8;
  if ($[16] !== active || $[17] !== enabled || $[18] !== item.key) {
    t8 = () => {
      setClassName([baseClass, enabled === false ? "disabled" : "", active ? "active" : "", item?.key ? `${baseClass}-` + item.key : ""].filter(Boolean).join(" "));
    };
    $[16] = active;
    $[17] = enabled;
    $[18] = item.key;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  let t9;
  if ($[20] !== active || $[21] !== className || $[22] !== enabled || $[23] !== item.key) {
    t9 = [enabled, active, className, item.key];
    $[20] = active;
    $[21] = className;
    $[22] = enabled;
    $[23] = item.key;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  useEffect(t8, t9);
  let t10;
  if ($[25] !== active || $[26] !== editor || $[27] !== enabled || $[28] !== item) {
    t10 = () => {
      if (enabled !== false) {
        editor.focus(() => {
          editor.update(_temp);
          item.onSelect?.({
            editor,
            isActive: active
          });
        });
        return true;
      }
    };
    $[25] = active;
    $[26] = editor;
    $[27] = enabled;
    $[28] = item;
    $[29] = t10;
  } else {
    t10 = $[29];
  }
  let t11;
  if ($[30] !== children || $[31] !== className || $[32] !== t10) {
    t11 = _jsx("button", {
      className,
      onClick: t10,
      onMouseDown: _temp2,
      type: "button",
      children
    });
    $[30] = children;
    $[31] = className;
    $[32] = t10;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  return t11;
};
function _temp() {
  $addUpdateTag("toolbar");
}
function _temp2(e) {
  e.preventDefault();
}
//# sourceMappingURL=index.js.map